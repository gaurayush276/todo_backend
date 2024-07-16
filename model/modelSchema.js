const mongoose = require("mongoose") ; 

const Schema = new mongoose.Schema( {
    task : String ,
    done : {
        type : Boolean,
        default :false 
    }
})

const todo = mongoose.model("todos" , Schema) ;

module.exports = todo ; 