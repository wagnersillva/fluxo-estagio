exports.up = function(knex) {
    return knex.schema.alterTable('users', function (table) {
        table.string('numero').alter();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
