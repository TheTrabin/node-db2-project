exports.up = function(knex, Promise) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments('id');
        // number of sales of each car
        tbl.integer('sales').notNullable();
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars');
};
