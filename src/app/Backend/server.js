const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://Admin:Admin123@cluster0-ovnca.mongodb.net/test?retryWrites=true&w=majoritynode'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title:String,
  year:String,
  poster:String
});

const AlbumModel = mongoose.model('album',albumSchema);

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// respond with "hello customer" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello customer');
})

app.get('/api/albums', (req,res,next) => {

  console.log("get request")
  AlbumModel.find((err,data)=>{
    res.json({albums:data});
  })
})

app.put('/api/albums/:id', (req, res)=>{
  console.log(req.body);
  console.log("Edit "+req.params.id);

  AlbumModel.findByIdAndUpdate(req.params.id,
    req.body, {new:true}, (error, data)=>{
      res.send(data);
    })
})

app.delete('/api/albums/:id', (req,res) =>{
  console.log(req.params.id);

  AlbumModel.deleteOne({_id:req.params.id},(error,data)=>{
    if(error)
      res.json(error);
      
    res.json(data);
  })
})

app.get('/api/albums/search/:title/:criteria', (req,res)=>{
  console.log(req.params.title);
  console.log(req.params.criteria);
if(req.params.criteria == 'title')
  {
  AlbumModel.find({ 'title': req.params.title},
(error,data) =>{
  res.json(data);
})
  }
})


app.post('/api/albums', (req,res) =>{
console.log('post Sucessfull');
console.log(req.body)
console.log(req.body.title);
console.log(req.body.year);
console.log(req.body.poster);

AlbumModel.create({
  title: req.body.title,
  year: req.body.year,
  poster: req.body.poster
});
res.json('data uploaded')


})

app.get('/api/album/:id',(req,res)=>{
  console.log(req.params.id);

  AlbumModel.findById(req.params.id, (err, data)=>{
    res.json(data);
  })
})


app.listen(PORT, () => 
console.log(`Example app listening on port ${PORT}!`))
