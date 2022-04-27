import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
import mongoose from 'mongoose';

const uri="mongodb+srv://grey:Vermilion9%23@cluster0.tkbdb.mongodb.net/users?retryWrites=true&w=majority"

const userInfo = async(req, res) => {
       
  const name=req.body.slug
  console.log(name)
  users.findOne({username:name})
    .then((item)=>{
      console.log('found')
      //console.log(item)
      res.send(item)
    })


}
//export default connectDB(userInfo);
export default connectDB(userInfo)
