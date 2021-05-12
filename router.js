const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');

app.set('port', (process.env.PORT || 4000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect ('mongodb+srv://seandcarr1:fU1eTV5YUOCyblcJ@cluster0.8kj9p.mongodb.net/NGBReg', { useNewUrlParser: true }, { useUnifiedTopology: true } );
const db = mongoose.connection;

const userSchema = {
  firstName: String,
  lastName: String,
  gender: String, // Need to figure out radio
  email: String,
  phoneNum: String,
  phoneNumInt: String,
  bDay: String, //can I pass date??
  addy1: String,
  addy2: String,
  customerCity: String,
  customerState: String,
  customerCountry: String,
  customerZip: String,
  knownTid: String,
  ppNum: String,
  ppExpDate: String, //date again
  ppNationality: String,
  ppCountry: String,
  psw: String
}

const user = mongoose.model("user", userSchema);

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

app.post("/registration.html", function(req, res){
    let newUser = new user({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      email: req.body.email,
      phoneNum: req.body.phoneNum,
      phoneNumInt: req.body.phoneNumInt,
      bDay: req.body.bDay,
      addy1: req.body.addy1,
      addy2: req.body.addy2,
      customerCity: req.body.customerCity,
      customerState: req.body.customerState,
      customerCountry: req.body.customerCountry,
      customerZip: req.body.customerZip,
      knownTid: req.body.knownTid,
      ppNum: req.body.ppNum,
      ppExpDate: req.body.ppExpDate,
      ppNationality: req.body.ppNationality,
      ppCountry: req.body.ppCountry,
      psw: req.body.psw
    })
    newUser.save();
    res.redirect('login.html');
})


app.listen(app.get('port'), function(){
});
