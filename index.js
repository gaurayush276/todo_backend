const express = require("express") ; 
const cors = require("cors");
const server = express() ; 
const mongoose = require("mongoose") ;
const todoModel = require('./model/modelSchema') ;
server.use(cors());

mongoose.connect("mongodb+srv://newMongoDB:newMongoDB@cluster0.nilhdoh.mongodb.net/mongodbLearn?retryWrites=true&w=majority&appName=Cluster0").then( r => console.log("MongoDB connected")) ;
server.use(express.json()) ; 
 


server.get('/' ,async (req,res)=>{
    const data = await todoModel.find() ; 
   console.log(data) ; 
    res.json([data]) ;
    
})

server.post('/' , (req,res)=>{
    const data = new todoModel(req.body ) ; 
     data.save() ; 
    res.json(data).status(201) ; 
})


server.put('/:id' ,async (req,res) =>{
    const id = req.params.id ; 
    console.log(id)
    const data = await todoModel.findByIdAndUpdate({_id : id } , {done : true} )
    res.json(data);

     
})

server.put('/:id' ,async (req,res) =>{
    const id = req.params.id ; 
    console.log(id)
    const data = await todoModel.findByIdAndUpdate({_id : id } , {done : false} )
    res.json(data);

     
})

server.delete('/:id' , async (req,res) =>{
    const id  = req.params.id ; 
    const data = await todoModel.findOneAndDelete( {_id : id } ) ;
    res.json() ;
})



server.listen(8000 , () =>{
    console.log("Server Started") ; 
})