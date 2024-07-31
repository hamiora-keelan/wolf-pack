/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
    return knex.schema.createTable('talent', (table) => {
      table.increments('id').primary();
      table.string('name');
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('talent');
  }