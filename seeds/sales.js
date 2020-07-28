
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {id: 1, model: '3000 GT', sales: 2500},
        {id: 2, model: 'Escape', sales: 6500},
        {id: 3, model: 'RX-7', sales: 8000}
      ]);
    });
};
