const blog = require('../module/blog');
const comment = require('../module/comment');

exports.postBlog = async(req,res,next)=>{
    const title = req.body.title;
    const author = req.body.author;
    const descrip = req.body.description;
    console.log(req.body);
    try{
        const postBlog = await blog.create({
            title:title,
            author:author,
            description:descrip
        })
        res.json(postBlog);
    }catch(err){
        console.log(err)
    } 
}

exports.getBlogs = async(req,res,next)=>{
    try{
        const getAllBlogs = await blog.findAll();
        //console.log("blogs",getAllBlogs[0]);
        res.json(getAllBlogs);
    }catch(err){
        console.log(err)
    }
}

exports.getCurrentBlog = async(req,res,next)=>{
    const id = req.query.id;
    console.log(id);
    try{
        const getCurrentBlog = await blog.findByPk(id);
        res.json(getCurrentBlog);
    }catch(err){
        console.log(err)
    }
}