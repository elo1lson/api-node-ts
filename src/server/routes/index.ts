import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadeController } from "../controllers";

const router = Router();

router.get("/", (_, res) => res.redirect("/ping"));

router.get("/ping", (_, res) => {
    return res.status(StatusCodes.OK).send("pong");
});

router.get(
    "/cidades",
    CidadeController.getAllValidation,
    CidadeController.getAll
);
router.get(
    "/cidades/:id",
    CidadeController.getByIdValidation,
    CidadeController.getById
);
router.put(
    "/cidades/:id",
    CidadeController.updateByIdValidation,
    CidadeController.updateById
);
router.delete(
    "/cidades/:id",
    CidadeController.deleteByIdValidation,
    CidadeController.deleteById
);
router.post(
    "/cidades",
    CidadeController.createValidation,
    CidadeController.create
);

export { router };
