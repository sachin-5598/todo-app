const tableNames = require('../../constant/tableNames');
const orderedTableNames = require('../../constant/ordered_tableNames');

function addDefaultColumns(table) {
  table.increments().notNullable();
  table.timestamps(false, true);
  table.boolean('is_deleted').notNullable().default(false);
}

function addForeignKey(table, foreignTableName) {
  return table
    .integer(`${foreignTableName}_id`)
    .unsigned()
    .references('id')
    .inTable(foreignTableName)
    .onDelete('cascade');
}

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.user_profile, (table) => {
    addDefaultColumns(table);
    table.string('display_name', 100).notNullable().unique();
    table.string('email', 254).notNullable().unique();
    table.string('password', 500).notNullable();
  });

  await knex.schema.createTable(tableNames.todo_list, (table) => {
    addDefaultColumns(table);
    table.string('title', 254).notNullable();
    table.text('description').notNullable();
    addForeignKey(table, tableNames.user_profile).notNullable();
  });

  await knex.schema.createTable(tableNames.list_task, (table) => {
    addDefaultColumns(table);
    table.string('title', 254).notNullable();
    table.text('description').notNullable();
    table.boolean('is_completed').notNullable().default(false);
    addForeignKey(table, tableNames.todo_list);
  });
};

exports.down = async (knex) => {
  // await knex.schema.dropTable(tableNames.list_task);
  // await knex.schema.dropTable(tableNames.todo_list);
  // await knex.schema.dropTable(tableNames.user_profile);
  await Promise.all(
    orderedTableNames.map((tableName) => knex.schema.dropTable(tableName)),
  );
};
