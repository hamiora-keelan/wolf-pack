/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('project_talent').del();

  // Inserts seed entries
  await knex('project_talent').insert([
    { id: 1, talent_id: 1, project_id: 1 },
    { id: 2, talent_id: 2, project_id: 2 },
    { id: 3, talent_id: 3, project_id: 3 },
  ]);
}