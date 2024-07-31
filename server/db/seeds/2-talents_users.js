/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('talents_users').del();

  // Inserts seed entries
  await knex('talents_users').insert([
    { id: 1, user_id: 1, talents_id: 1 },
    { id: 2, user_id: 2, talents_id: 2 },
    { id: 3, user_id: 3, talents_id: 3 },
  ]);
}