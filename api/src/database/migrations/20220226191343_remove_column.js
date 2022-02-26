/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.table('users', (table) => {
  table.dropColumn('isAdmin');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.table('users', (table) => {
  table.string('isAdmin');
});
