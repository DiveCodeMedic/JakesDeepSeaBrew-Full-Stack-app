//REST is ACTIONS peformed on RESOURCES

const router = require('express').Router();
const db = require('../models')

// GET ALL
router.get('/', (req, res) => {
  db
    .SaleItem
    .findAll()
    .then(saleItems => res.json(saleItems));
});

// GET SINGLE
//GET : /api/notes/3  <--- The Primary Key of the Note we are looking for.
router.get('/:id', (req, res) => {
  db
    .SaleItem
    .findById(req.params.id)
    .then(saleItem => {
      if (saleItem) {
        res.json(saleItem);
      } else {
        res.sendStatus(404);
      }
    });
});


// CREATE
// POST
router.post('/', (req, res) => {
  const newSaleItem = new db.SaleItem(req.body);


  newSaleItem.save().then(saleItem => {
    res.json(saleItem);
  });
});

router.put('/:id', (req, res) => {
  db
    .SaleItem
    .findById(req.params.id)
    .then(saleItem => {
      return saleItem.update(req.body);
    })
    .then(() => res.sendStatus(204));
});

router.delete('/id', (req, res) => {
      db
        .SaleItem
        .findById(req.params.id)
        .then(saleItem => {
          saleItem.destroy().then(() => res.json(saleItem));

        });


      
});
    module.exports = router;