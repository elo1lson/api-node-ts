/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
import { Knex } from "../../../database/knex";
import { ICidade } from "../../../database/models";
import knex from "knex";

interface IBodyProps extends Omit<ICidade, 'id'> { }

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(
        yup.object().shape({
            nome: yup.string().required().min(3),
        })
    ),
}));

// eslint-disable-next-line @typescript-eslint/ban-types
export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    return res.status(StatusCodes.CREATED).send("Não implementado!");
};
