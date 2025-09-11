exports.createImage=(req,res,next)=>{
    try{
        console.log(req.body)
        res.json({message:"hello upload"})
        
    }catch(err){
        next(err)
    }
}