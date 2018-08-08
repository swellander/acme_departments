const Sequelize = require('sequelize');
const connection = new Sequelize(process.env.DATABASE_URL, { logging: false });

const User = connection.define('user', {
  name: Sequelize.STRING
});

const Department = connection.define('department', {
  name: Sequelize.STRING
});

//Class methods


//associations
User.belongsTo(Department);
Department.hasMany(User); //Department include User matches users to the department in question by the the departmentId foreign key in users table to the id key in the department's table

const sync = () => connection.sync({ force: true });

const seed = () => {
  const userNames = ['Frank', 'Jobin', 'Ricardo'];
  let frank, jobin, ricardo, pieMaking, dance, psychology;
  return Promise.all(userNames.map( userName => User.create({ name: userName }) ))
    .then( users => {
      [frank, jobin, ricardo] = users;
      const departmentNames = ['Pie-making', 'Dance', 'Psychology'];
      return Promise.all(departmentNames.map( departmentName => Department.create({ name: departmentName }) ))
    })
    .then( departments => {
      [pieMaking, dance, psychology] = departments;
      jobin.setDepartment(pieMaking);
      frank.setDepartment(pieMaking);
      ricardo.setDepartment(dance);
    }) 
    .catch(err => console.log(err));
}

module.exports = {
  sync,
  seed,
  models: {
    User,
    Department
  }
}
