
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id');
        // VIN, make, model, and Milage
        tbl.text('VIN', 17).unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.float('mileage').notNullable();
        table.foreign('sales').references('cars')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars');
};
