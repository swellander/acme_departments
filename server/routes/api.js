const express = require('express');
const router = express.Router();
const { User, Department } = require('../db').models;

router.get('/departments', (req, res, next) => {
  Department.findAll({ include: [ User ] })
    .then( departments => res.json(departments) )
    .catch(err => next(err));
});

router.get('/departments/:id', (req, res, next) => {
  Department.findOne({
    where: { id: req.params.id },
    include: [ User ]
  })
  .then( department => res.json(department) )
  .catch( err => next(err) );
});

module.exports = router;
