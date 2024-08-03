import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - Create", () => {
    it("Criar registro", async () => {
        const res = await testServer
            .post("/cidades")
            .send({ nome: "São Paulo" });

        expect(res.statusCode).toEqual(StatusCodes.CREATED);
    });

    it("Criar registro muito curto", async () => {
        const res = await testServer.post("/cidades").send({ nome: "" });

        expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res.body).toHaveProperty("errors.body.nome");
    });
});
