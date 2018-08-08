const express = require('express');
const router = express.Router();

router.get('/departments', (req, res, next) => {
  res.send('API DEPARTMENTS ROUTE!!');
});

module.exports = router;
