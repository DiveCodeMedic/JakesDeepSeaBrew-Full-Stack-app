//REST is ACTIONS peformed on RESOURCES

const router = require('express').Router();
const db = require('../models')

// GET ALL
router.get('/', (req, res) => {
  db
    .Product
    .findAll()
    .then(products => res.json(products));
});

// GET SINGLE
//GET : /api/notes/3  <--- The Primary Key of the Note we are looking for.
router.get('/:id', (req, res) => {
  db
    .Product
    .findById(req.params.id)
    .then(product => {
      if (product) {
        res.json(product);
      } else {
        res.sendStatus(404);
      }
    });
});


// CREATE
// POST
router.post('/', (req, res) => {
  const newProduct = new db.Product(req.body);


  newProduct.save().then(product => {
    res.json(product);
  });
});

router.put('/:id', (req, res) => {
  db
    .Product
    .findById(req.params.id)
    .then(product => {
      return product.update(req.body);
    })
    .then(() => res.sendStatus(204));
});

router.delete('/id', (req, res) => {
      db
        .Product
        .findById(req.params.id)
        .then(product => {
          product.destroy().then(() => res.json(product));

        });


      
});
    module.exports = router;