import "dotenv/config";
import { router } from "./routes";
import "./shared/services/Yup";
import express from "express";

const server = express();

server.use(express.json());
server.use(router);

export { server };
