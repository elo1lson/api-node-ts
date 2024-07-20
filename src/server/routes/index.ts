import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadeController } from "../controllers";
const router = Router();

router.get("/", (_, res) => res.redirect("/ping"));
router.get("/ping", (_, res) => {
    return res.status(StatusCodes.OK).send("pong");
});

router.get("/cidades", CidadeController.create);
router.post("/cidades", CidadeController.create);
export { router };
