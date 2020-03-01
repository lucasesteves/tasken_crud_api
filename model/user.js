const {Schema,model}=require('mongoose');

const UserSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    }
})

module.exports=model('User',UserSchema)