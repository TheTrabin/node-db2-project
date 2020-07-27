
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: '1G1YY22GXX5116295', make: 'Mitsubishi', model: '3000 GT', mileage: 125000},
        {id: 2, VIN: '2G4WB55K1Y1247101', make: 'Ford', model: 'Escape', mileage: 80000},
        {id: 3, VIN: '1NXBU40E49Z186935', make: 'Subaru', model: 'RX-7', mileage: 250000}
      ]);
    });
};
