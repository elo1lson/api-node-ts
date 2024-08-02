/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { AnyObject, Maybe, ObjectSchema, ValidationError } from "yup";

type TProperty = "body" | "query" | "params" | "header";
type TAllSchemas = Record<TProperty, ObjectSchema<any>>;
type TGetSchema = <T extends Maybe<AnyObject>>(
    schema: ObjectSchema<any>
) => ObjectSchema<any>;
type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;
type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation =
    (getAllSchemas) => async (req, res, next) => {
        const schemas = getAllSchemas((schema) => schema);
        const errorResult: Record<string, Record<string, string>> = {};

        Object.entries(schemas).forEach(([key, schema]) => {
            try {
                schema.validateSync(req[key as TProperty], {
                    abortEarly: false,
                });
            } catch (error) {
                const yupError = error as ValidationError;
                const err: Record<string, string> = {};

                yupError.inner.forEach((error) => {
                    if (!error.path) return;
                    err[error.path] = error.message;
                });

                errorResult[key] = err;
            }
        });
        if (Object.entries(errorResult).length === 0) {
            return next();
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: errorResult,
            });
        }
        next();
    };
