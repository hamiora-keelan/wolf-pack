/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('talent').del();

  // Inserts seed entries
  await knex('talent').insert([
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Python' },
    { id: 3, name: 'Java' },
  ]);
}