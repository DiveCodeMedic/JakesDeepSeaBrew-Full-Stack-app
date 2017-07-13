//REST is ACTIONS peformed on RESOURCES

const router = require('express').Router();
const db = require('../models')

// GET ALL
router.get('/', (req, res) => {
  db
    .Customer
    .findAll()
    .then(customers => res.json(customers));
});

// GET SINGLE
//GET : /api/notes/3  <--- The Primary Key of the Note we are looking for.
router.get('/:id', (req, res) => {
  db
    .Customer
    .findById(req.params.id)
    .then(customer => {
      if (customer) {
        res.json(customer);
      } else {
        res.sendStatus(404);
      }
    });
});


// CREATE
// POST
router.post('/', (req, res) => {
  const newCustomer = new db.Customer(req.body);


  newCustomer.save().then(customer => {
    res.status(201).json(customer);
  });
});
 
router.put('/:id', (req, res) => {
  db
    .Customer
    .findById(req.params.id)
    .then(customer => {
     return customer.update(req.body);
    })
     .then(() => res.sendStatus(204));
     });
    
    

router.delete('/id', (req, res) => {
      db
        .Customer
        .findById(req.params.id)
        .then(customer => {
          customer.destroy().then(() => res.json(customer));

        });


     
});
    module.exports = router;