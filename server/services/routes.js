let users = require('../controllers/users.js')
module.exports = (app)=>{
  app.post('/users/create', users.create);
  // app.use(authentication);
  app.post('/users/gencode', users.genCode)
  app.post('/users/validate', users.validate);
}
function authentication(req, res, next){
  if(req.session.user){
    next()
  } else{
    res.status(401).send("Permission denied")
  }
}
