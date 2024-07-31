/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
    return knex.schema.createTable('project', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.text('description');
      table.string('talent_needed');
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('project');
  }