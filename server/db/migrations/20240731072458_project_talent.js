/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
    return knex.schema.createTable('project_talent', (table) => {
      table.increments('id').primary();
      table.integer('talent_id').unsigned().references('id').inTable('talent').onDelete('CASCADE');
      table.integer('project_id').unsigned().references('id').inTable('project').onDelete('CASCADE');
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('project_talent');
  }