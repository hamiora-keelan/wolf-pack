/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('username');
      table.string('role');
      table.string('email');
      table.string('discord');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('users');
  }