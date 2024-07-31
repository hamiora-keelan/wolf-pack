/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('project').del();

  // Inserts seed entries
  await knex('project').insert([
    { id: 1, name: 'Project Alpha', description: 'Description for Project Alpha', talent_needed: 'JavaScript' },
    { id: 2, name: 'Project Beta', description: 'Description for Project Beta', talent_needed: 'Python' },
    { id: 3, name: 'Project Gamma', description: 'Description for Project Gamma', talent_needed: 'Java' },
  ]);
}