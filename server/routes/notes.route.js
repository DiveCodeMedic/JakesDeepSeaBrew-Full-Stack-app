//REST is ACTIONS peformed on RESOURCES

const router = require('express').Router();
const db = require('../models')

//GET ALL NOTES
//Get : /api/notes/
router.get('/', function (req, res) {
  var promise = db.Customer.findAll()
  
  promise.then(function (customers) {
    res.json(customers);
  });
});

// GET SINGLE
//GET : /api/notes/3  <--- The Primary Key of the Note we are looking for.
router.get('/:id', function (req, res) {
  db.Note.findById(req.params.id).then(function (note) {
    if (note === null) {
      res.sendStatus(404);
    } else {
      res.json(note);
    }
  });
});


// CREATE
// POST: /api/notes
router.post('/', function (req, res) {
  const note = db.note.build(req.body);
   


  note.save().then(function (newNote) {
    res.send(newNote);
  });
});


module.exports = router;
