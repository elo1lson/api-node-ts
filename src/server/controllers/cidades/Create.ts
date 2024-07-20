/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
interface Icidade {
    nome: string;
}

const bodyValidation: yup.Schema<Icidade> = yup.object().shape({
    nome: yup.string().required().min(3),
});

// eslint-disable-next-line @typescript-eslint/ban-types
export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {
    let validatedData: Icidade | undefined = undefined;
    try {
        validatedData = await bodyValidation.validate(req.body, {
            abortEarly: false,
        });
    } catch (error) {
        const yupError = error as yup.ValidationError;
        const err: Record<string, string> = {};

        yupError.inner.forEach((error) => {
            if (!error.path) return;
            err[error.path] = error.message;
        });

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: err,
        });
    }
    return res.status(StatusCodes.CREATED).send("Create");
};
