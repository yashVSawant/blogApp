const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

const blogsRoutes = require('./routes/getBlog');
const commentsRoutes = require('./routes/getComment');
const sequelize = require('./util/database');
const Blogs = require('./module/blog');
const Comments = require('./module/comment');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use('/public',express.static('public'));

Blogs.hasMany(Comments);

app.use(blogsRoutes);
app.use(commentsRoutes);


app.get('/home',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.use('/',(req,res,next)=>{
    res.send('error')
})

sequelize
.sync()
.then(result=>{
    app.listen(2000)
})
.catch(err=>console.log(err))
