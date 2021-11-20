//import formidable from 'formidable';
import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';

const Get_users= async(req,res)=>{

    users.find().sort({'_id':-1}).limit(10)
    .then((item)=>{
        //console.log(item)
        res.send({status:'DONE',info:item})
    })
}

export default connectDB(Get_users)