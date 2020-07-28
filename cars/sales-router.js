const express = require('express');

const db = require('../data/dbconfig');

const router = express.Router();

router.get('/', (req, res) => {
  db('sales')
  .then(cars => {
    res.json(cars); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve vehicles' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('sales').where({ id }).first()
  .then(car => {
    res.json(car);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve sales information' });
  });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('sales').insert(carData)
  .then(ids => {
    db('sales').where({ id: ids[0] })
    .then(newSaleEntry => {
      res.status(201).json(newSaleEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
});

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const postData = req.body;
	
	db('sales')
		.where('id', id)
		.update(postData)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ data: count });
			} else {
				res.status(404).json({ message: 'Nothing exists there.' });
			}
		})
		.catch (err => {
            console.log('POST error', err);
            res.status(500).json({ message: "Failed to store data" });
          });
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    db('sales')
		.where('id', id)
		.del()
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ data: count });
			} else {
				res.status(404).json({ message: 'Nothing exists there.' });
			}
		})
		.catch((err) => console.log(err));
})

module.exports = router;