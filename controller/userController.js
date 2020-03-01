const User=require('../model/user')
const mongoose = require('mongoose');

class UserController{
    async register(req,res){
        try{
            let {name,age}=req.body;
            const user=await User.create({name,age})
            if(user){
                return res.status(200).send({user:user})
            }
        }catch(err){
            return res.status(500).send(err)
        }
    }

    async getAll(req,res){
        try{
            const users=await User.find({}).lean();
            if(users){
                return res.status(200).send({users:users})
            }
        }catch(err){
            return res.status(500).send(err)
        }
    }

    async getUser(req,res){
        try{
            const id=req.params.id
            const user = await User.find(mongoose.Types.ObjectId(id)).lean();
            if(user){
                return res.status(200).send({user:user})
            }
        }catch(err){
            return res.status(500).send(err)
        }
    }

    async updateUser(req,res){
        try{
            const id=req.params.id
            const product=req.body
            const updateOrder = await User.findByIdAndUpdate({_id:id},product).lean();
            if(updateOrder){
                return res.status(200).send({message:'Usuário atualizado!'})
            }
        }catch(err){
            return res.status(500).send(err)
        }
    }
    
    async deleteUser(req,res){
        try{
            const id=req.params.id
            if(!await User.deleteOne({_id:id})){
                return res.status(200).send({message:'Something wrong happened'})
            }
            return res.status(200).send('Product removed to stock')
        }catch(err){
            return res.status(500).send(err)
        }
    }
}

module.exports=new UserController();