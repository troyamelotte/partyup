let mongoose = require('mongoose');
let User = mongoose.model('User');
module.exports = {
  index: (req, res)=>{
    User.create({name:"test", number:1});
    res.send("alsdfasdf");
  },
  getUsers: (req, res)=>{
    User.find({}, (err, data)=>{
      res.json(data);
    })
  }
}
