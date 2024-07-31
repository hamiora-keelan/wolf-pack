/**
 * @param {import('knex').Knex} knex
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, name: 'John Doe', username: 'johndoe', role: 'admin', email: 'john@example.com', discord: 'john#1234', created_at: knex.fn.now() },
    { id: 2, name: 'Jane Smith', username: 'janesmith', role: 'user', email: 'jane@example.com', discord: 'jane#5678', created_at: knex.fn.now() },
    { id: 3, name: 'Mike Johnson', username: 'mikejohnson', role: 'user', email: 'mike@example.com', discord: 'mike#9101', created_at: knex.fn.now() },
  ]);
}