let mongoose = require('mongoose');
let userSchema = mongoose.Schema({
  name: String,
  number: Number
});

mongoose.model('User', userSchema);
