// import connectDB from '../../middleware/mongodb';

// import users from '../../middleware/models';

// //import mailjet from 'node-mailjet'
// "use strict";
// const nodemailer = require("nodemailer");

// const Mail=async (req,res)=>{
// //     var user=req.body.user
// //     console.log(user)
// //     //console.log('mailer')
// //    const mailjet=require('node-mailjet')
// //   .connect('317bf425aef4945240af85eaa8303720', '7ca8dacb713582262c912b2c032abec0')
// // const request = mailjet
// //   .post("send", {'version': 'v3.1'})
// //   .request({
// //   "Messages":[
// //     {
// //       "From": {
// //         "Email": "winsterinvest@gmail.com",
// //         "Name": "Winster investment option"
// //       },
// //       "To": [
// //         {
// //           "Email": `${user.email}`,
// //           "Name": `${user.name}`
// //         }
// //       ],
// //       "Subject": "Welcome to Capital investment option.",
// //       "TextPart": "Congratulations on signing up",
// //       "HTMLPart": `<h3>Dear ${user.name}, welcome to <a href='https://www.capitalinvestmentoption.com/'>Capital investment option</a>!</h3><br /><div>please click the link bellow to confirm your account</div>
// //       <a href="/www.capitalinvestmentoption.com/Dashboard">capitalinvestmentoption</a>`,
// //       "CustomID": "confirmation mail"
// //     }
// //   ]
// // })
// // request
// //   .then((result) => {
// //     console.log(result.body)
// //     res.send(result.body)
// //     console.log('mailed')
// //   })
// //   .catch((err) => {
   
// //     console.error(err)
// //     console.log('mail-error')
// //   })



// // async..await is not allowed in global scope, must use a wrapper

//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   transporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: 'winsterinvest@gmail.com', // sender address
//     to: `${req.body.email}`, // list of receivers
//     subject: "success", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   })

//   info
//   .then(()=>{
//     console.log('mailed')
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...




// }
// export default Mail

const nodemailer = require("nodemailer");
//const temp=require("../../templates/mail.html")

const fs = require('fs');

const { promisify } = require('util');

const readFile = promisify(fs.readFile);

// async..await is not allowed in global scope, must use a wrapper
const Mail = async (req,res)=> {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  

  console.log(req.body)
  
  // create reusable transporter object using the default SMTP transport
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
    }
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: 'winsterinvest@gmail.com', // sender address
    //to: 'greyspades99@gmail.com', // list of receivers
    to:`${req.body.user.email}`,
    subject: "Account confirmation", // Subject line
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
                <h2  style="text-align: center; color: #ffab00;">Welcome to Winster trade investment</h2>
            </div>
            <div style="text-align: center;">
                <p>
                    Dear ${req.body.user.firstName} you have successfuly registered with Winster trade investment please click the link bellow to complete your registration
                </p>
            </div>
            <div style="width: 100%;display: flex; justify-content: center;margin-top: 50px;" >
             <a style="display:grid;place-items: center; text-decoration: none;margin-left:15%" href="www.winstertradeinvestment.com/login">
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
  //console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default Mail
