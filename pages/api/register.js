import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';
//import { validate } from 'uuid';
//const users =require('../../middleware/models')

const Register = async (req, res) => {

  let today=new Date()
  let year=today.getFullYear()+'/'
  let time=today.getHours()+":"
  let month=today.getMonth()+'/'
  let day=today.getDate()
  let reg_date=`${year}${month}${day}`
  
    const newUser=new users({
      
      email:req.body.user.email,
      password:req.body.user.password,
      name:req.body.user.name,
     
      balance:req.body.user.balance,
      username:req.body.user.username,
      bomber:req.body.user.bomber || '',
      date:reg_date
  
    })
    console.log(req.body.user)
  
    //console.log(req.body.user)
    //console.log(res.status)
   users.exists({email:req.body.user.email },{username:req.body.user.username})
   .then((exists)=>{
     if(exists==true){
       res.send('THAT EMAIL ADDRESS IS TAKEN')
       console.log('exists')
       console.log(exists)
     }
     else if(exists==false) {
      newUser.save()
      .then((item)=>{
        console.log('user saved')
        res.send('SAVED')
        //console.log(item)
      })
      .catch((error)=>{
        console.log(error);
      })
     }
   })
   .catch((error)=>{
    console.log(error);
    res.send('CONNECTION ERROR')
  })
    //console.log(req.body)
  
};

export default connectDB(Register);

