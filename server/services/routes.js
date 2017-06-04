let users = require('./controllers/users.js')
module.exports = (app)=>{
  app.get('/', users.index);
  app.get('/test', users.getUsers);
}
