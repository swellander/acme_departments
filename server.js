//purpose of this file is simply to get everything in motion

const app = require('./server/app');
const db = require('./server/db');
const port = process.env.PORT || 3000;

db.sync()
  .then(() => db.seed())
  .then(() => app.listen(port, () => console.log('Listening on port ', port)));
