/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
    return knex.schema.createTable('project_users', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer('project_id').unsigned().references('id').inTable('project').onDelete('CASCADE');
      table.boolean('owner').defaultTo(false);
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('project_users');
  }