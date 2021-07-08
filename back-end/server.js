const express = require("express");
const morgan  = require("morgan");
const mongoose = require("mongoose");
const bodyParser =  require("body-parser");
const cors = require("cors");

const AuthRoute  = require('./routes/authRoute');
 


mongoose.connect('mongodb:mongodb://127.0.0.1:27017/testone',{useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) =>{
  console.log(err);
})

db.once('open',()=>{ 
  console.log("Database Connection Established!")
})


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




 app.get('/get',(req,res)=>{
   res.render("This more one");

 })




const PORT = process.env.PORT || 3001


app.listen(PORT,() =>{
  console.log(`Server Is Runing on Port ${PORT}`)
})


app.use('/api', AuthRoute);









