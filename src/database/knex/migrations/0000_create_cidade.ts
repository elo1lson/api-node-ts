import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("cidade", table => {
        table.bigIncrements('id').primary().index();
        table.string("nome", 100).notNullable().index();
        table.comment("Tabela usada para armazenar cidades.")
    })

}
export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("cidade")
}

