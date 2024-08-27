import { Knex } from "knex";
import {log} from "console"
import { ETableNames } from "../seeds/ETableNames";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(ETableNames.cidade, table => {
        table.bigIncrements('id').primary().index();
        table.string("nome", 100).notNullable().index();
        table.comment("Tabela usada para armazenar cidades.")
    }).then(()=>log(`${ETableNames.cidade} criada.`))

}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(ETableNames.cidade)
}

