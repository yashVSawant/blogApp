const comment = require('../module/comment');
const blog = require('../module/blog');
const { where } = require('sequelize');

exports.postComment = async(req,res,next)=>{
    const getComment = req.body.comment;
    const blogId = req.body.id;
    try{
        const getBlog = await blog.findByPk(blogId);
        const postComment = await comment.create({
            comment:getComment
        })
        const commentOfBlog = await getBlog.addComments(postComment);
        res.json(commentOfBlog);
    }catch(err){
        console.log(err)
    }
}

exports.getComments = async(req,res,next)=>{
    const blogId = req.query.id;
    console.log(blogId);
    try{
        const currentBlog = await blog.findByPk(blogId);
        const getAllComments = await currentBlog.getComments();
        res.json(getAllComments);
    }catch(err){
        console.log(err)
    }
}

exports.deleteComment = async(req,res,next)=>{
    const commentId = req.query.id;
    try{
        const deleted = await comment.destroy({where:{id:commentId}});
        res.json(deleted);
    }catch(err){
        console.log(err)
    }
}