const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb://admin:admin123#@ds241408.mlab.com:41408/dm_lab7'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title:String,
  year:String,
  poster:String
});

const albumModel = mongoose.model('album', albumSchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/api/albums', (req,res,next) => {
  
  console.log("get request")
  albumModel.find((err,data)=>{
    res.json({albums:data});
  })
  
  
})

app.post('/api/albums', (req,res) =>{
console.log('post Sucessfull');
console.log(req.body)
console.log(req.body.title);
console.log(req.body.year);
console.log(req.body.poster);

albumModel.create({
  title: req.body.title,
  year: req.body.year,
  poster: req.body.poster
});
res.json('data uploaded')


})

app.get('/api/albums/:id',(req,res)=>{
  console.log(req.params.id);

  albumModel.findById(req.params.id, (err, data)=>{
    res.json(data);
  })
})

app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});