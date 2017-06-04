let mongoose = require('mongoose');
let request = require('request');
let User = mongoose.model('User');
let apiKey = "RGAPI-b36bb2fe-7731-42e5-9afb-5a320c8e7bfa";
module.exports = {
  create: (req, res)=>{
    request.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${req.body.username}?api_key=${apiKey}`, (error, apiRes, body)=>{
      let riotId = JSON.parse(apiRes.body).id;
      if(error){
        res.send(400);
      }
      let regUser = new User({lolid:riotId, email:req.body.email, region:req.body.region, roles:req.body.roles, password:req.body.password, validated:false});
      regUser.save((err)=>{
        if(err){
          res.send(400);
        }else{
          req.session.user = regUser._id;
          res.json(regUser);
        }
      })
    })
  },
  genCode:(req, res)=>{
    let code = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        code += possible.charAt(Math.floor(Math.random() * possible.length));
    req.session.code = code;
    res.json(code);
  },
  validate: (req, res)=>{
    User.findOne({_id:req.session.user}, (err, user)=>{
      request.get(`https://na1.api.riotgames.com/lol/platform/v3/runes/by-summoner/${user.lolid}?api_key=${apiKey}`, (error, apiRes, body)=>{
        let runePage = JSON.parse(apiRes.body).pages[0];
        if(runePage.name==req.session.code){
          user.validated = true;
          user.save((err)=>{
            if(!err){
              console.log(user);
              res.send(200);
            }else{
              res.send(400);
            }
          });
        }else{
          res.send(403);
        }
      });
    })

  }
}
