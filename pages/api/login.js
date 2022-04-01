import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
//const users =require('../../middleware/models')

const handler = async (req, res) => {
 
  console.log(req.body.user)
  users.findOne({email:req.body.user.email})
      .then((user)=>{
        //console.log(user)
       if(user!=null){
        if(user.password==req.body.user.password){
          
          res.send({
            status:'LOG IN',
            info:user
          })
          
          console.log('loged in')
        }
        else{
          res.send({status:'WRONG DETAILS'})
          console.log('wrong details')
        }
       }
       else{
         res.send({status:'NO USER'})
       }
      })
      .catch((err)=>{
        console.error(err)
        if(err){
          res.send({status:'NO USER'})
        }
      })
    
}
  


export default connectDB(handler);
