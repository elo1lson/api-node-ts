/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
interface Icidade {
    nome: string;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<Icidade>(
        yup.object().shape({
            nome: yup.string().required().min(3),
        })
    ),
}));

// eslint-disable-next-line @typescript-eslint/ban-types
export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {
    return res.status(StatusCodes.CREATED).send("Não implementado!");
};
