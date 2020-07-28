exports.up = function(knex, Promise) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        // number of sales of each car
        tbl.text('model').unsigned();
        tbl.foreign('model').references("model").inTable('cars');
        tbl.integer('sales').notNullable();
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sales');
};
