/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
    return knex.schema.createTable('talents_users', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer('talents_id').unsigned().references('id').inTable('talent').onDelete('CASCADE');
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('talents_users');
  }