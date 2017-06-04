const express = require('express');
const app = express();

require('./services/loadModels.js');
require('./services/routes.js')(app);

app.listen(5800, ()=>{
  console.log("sup we on 3000.");
})
