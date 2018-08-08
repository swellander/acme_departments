const expect = require('chai').expect;
const db = require('../server/db');
const { Department, User } = db.models;

describe('db', () => {
  
  beforeEach(() => {
    return db.sync()
      .then(() => db.seed());
  });

  it('exists', () => {
    expect(db).to.be.ok;
  });

  it('has three users', () => {
    return User.findAll()
      .then( users => expect(users.length).to.equal(3));
  });

  it('has three departments', () => {
    return Department.findAll() 
      .then( departments => expect(departments.length).to.equal(3));
  });

  it('users belong to a department', () => {
    return User.findOne({
      where: { name: 'Jobin' },
      include: [ Department ]
    })
      .then( jobin => expect(jobin.department.name).to.equal('Pie-making'))
      .catch( (err) => expect(false).to.equal(err) );
  });

  it('departments have many users', () => {
    return Department.findOne({
      where: { name: 'Pie-making' },
      include: [ User ]
    })
    .then( department => expect(department.users.length).to.equal(2) )
      .catch( err => expect(err).to.equal('whoops') )
  })
})
