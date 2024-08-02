/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";

interface IParamsProps {
    id?: number;
}

interface IBodyProps {
    nome: string;
}

export const updateByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(
        yup.object().shape({
            id: yup.number().integer().required().moreThan(0),
        })
    ),
    body: getSchema<IBodyProps>(
        yup.object().shape({
            nome: yup.string().required().min(3),
        })
    ),
}));

export const updateById = async (
    req: Request<IParamsProps, {}, IBodyProps>,
    res: Response
) => {
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Não implementado!");
};
