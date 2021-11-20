
import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
import { connection } from 'mongoose';

const Balance=async(req,res)=>{
    console.log(req.body)
    users.findOne({email:req.body.email})
    .then((data)=>{
        console.log('found user')
        
        users.updateOne({email:req.body.email},{$set:{balance:req.body.amount}})
        .then((item)=>{
           res.send('SUCCESS')
            console.log('updated balance')
        })
    })
    
}

export default connectDB(Balance)