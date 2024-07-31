/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('project_users').del();

  // Inserts seed entries
  await knex('project_users').insert([
    { id: 1, user_id: 1, project_id: 1, owner: true },
    { id: 2, user_id: 2, project_id: 2, owner: false },
    { id: 3, user_id: 3, project_id: 3, owner: false },
  ]);
}