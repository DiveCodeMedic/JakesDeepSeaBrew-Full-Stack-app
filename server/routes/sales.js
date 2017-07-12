//REST is ACTIONS peformed on RESOURCES

const router = require('express').Router();
const db = require('../models')

// GET ALL
router.get('/', (req, res) => {
  db
    .Sale
    .findAll()
    .then(sales => res.json(sales));
});

// GET SINGLE
//GET : /api/notes/3  <--- The Primary Key of the Note we are looking for.
router.get('/:id', (req, res) => {
  db
    .Sale
    .findById(req.params.id)
    .then(sale => {
      if (sale) {
        res.json(sale);
      } else {
        res.sendStatus(404);
      }
    });
});


// CREATE
// POST
router.post('/', (req, res) => {
  const newSale = new db.Sale(req.body);


  newSale.save().then(sale => {
    res.json(sale);
  });
});

router.put('/:id', (req, res) => {
  db
    .Sale
    .findById(req.params.id)
    .then(sale => {
      return sale.update(req.body);
    })
    .then(() => res.sendStatus(204));
});

router.delete('/id', (req, res) => {
      db
        .Sale
        .findById(req.params.id)
        .then(sale => {
          sale.destroy().then(() => res.json(sale));

        });


      
});
    module.exports = router;