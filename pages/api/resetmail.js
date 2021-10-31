import connectDB from '../../middleware/mongodb';

import users from '../../middleware/models';

const nodemailer = require("nodemailer");
//const temp=require("../../templates/mail.html")

const fs = require('fs');


const Resetmail = async (req,res)=> {
  
  console.log(req.body)
  
  const mail=req.body.user.email
  let testAccount = await nodemailer.createTestAccount();
  
  users.findOne({email:req.body.user.email})
  
  .then((item)=>{
    console.log('found user')
    let transporter = nodemailer.createTransport({
        //host: "smtp.ethereal.email",
        host: 'smtp.gmail.com', 
        service:'gmail',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'winsterinvest@gmail.com',
          pass: 'Vermilion9#', 
        },
      });

      transporter.verify((error, success) => {
        if (error) {
          console.log(error);
        } else {
          console.log('All works fine, congratz!');
          transporter.sendMail({
            from: 'winsterinvest@gmail.com', // sender address
           // to: `${req.body.user.email}`, // list of receivers
           to:`${req.body.user.email}`,
            subject: "Password Reset", // Subject line
            //text: "Please confirm your re", // plain text body
            html: `<html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
            </head>
            <body >
               <div style="display: grid;place-items: center;padding: 5px;">
                <div style="background-color:black;
                height: 70vh;color: white;width: auto;
                font-family: -apple-system, BlinkMacSystemFont, 
                'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
                'Helvetica Neue', sans-serif; padding: 30px; border-radius: 5px;">
                    <div>
                        <h2  style="text-align: center; color: #ffab00;">Password Reset</h2>
                    </div>
                    <div style="text-align: center;">
                        <p>
                           You have requested to change your password, please click the link bellow to continue or ignore if this wasnt you
                        </p>
                    </div>
                    <div style="width: 100%;display: flex; justify-content: center;margin-top: 50px;" >
                     <a style="display:grid;place-items: center; text-decoration: none;margin-left:15%" href="www.winstertradeinvestment.com/reset/${req.body.user.email}">
                        <button style="width: 200px;height: 70px;background-color: rgba(0,0,0,0); color: #ffab00;
                        font-size: 20px; border: 3px solid #ffab00;border-radius: 10px;">
                            Confirm
                        </button>
                     </a>
                    </div>
                </div>
               </div>
            </body>
            </html>`,
            
          })
          .then((item)=>{
            console.log('mailed')
            console.log(item)
            res.send('SUCCESS')
          })
          .catch((err)=>{
            console.log(err)
            console.log('not sent')
          })
        }
      });
      
      
      
    })
  

  // send mail with defined transport object
  
}

export default connectDB(Resetmail)