
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();      
        table.string('nome').notNullable();
        table.string('sobrenome');
        table.string('nomeFantasia');    
        table.string('dataDeNascimento');
        table.string('pessoa').notNullable();
        table.string('documento').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('telefone').notNullable();
        table.string('modulos').notNullable();
        table.string('uf').notNullable();
        table.string('cidade').notNullable();
        table.string('bairro').notNullable();
        table.string('cep').notNullable();
        table.string('endereco').notNullable();
        table.integer('numero').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
