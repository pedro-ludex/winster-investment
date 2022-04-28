import React,{useState,useRef,useEffect,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
//import event from '../img/event4.jpg'
import {Formik} from 'formik'
import Axios from 'axios'
import PersonOutlined from '@material-ui/icons/PersonOutline';
import EmailIcon from '@material-ui/icons/EmailOutlined'
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOffOutlined'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle'

import HttpsOutlined from '@material-ui/icons/HttpsOutlined'
import LensOutlined from '@material-ui/icons/LensOutlined'
import Check from '@material-ui/icons/Check'

import {Checkbox,FormControlLabel,CircularProgress,Grid,AppBar} from '@material-ui/core'
import cookie from 'js-cookie'
//import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';
import {useRouter} from 'next/router'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Public from '@material-ui/icons/PublicOutlined'
import {HashLoader} from 'react-spinners'
//import {useGoogleReCaptcha,GoogleReCaptchaProvider} from 'react-google-recaptcha-v3'
//import { useRecaptcha, Badge } from 'react-recaptcha-hook';
import ReCAPTCHA from "react-google-recaptcha";
import Paper from '@material-ui/core/Paper'
import Close from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'


//import {Dot} from '@material-ui/icons/dot'
//import MyFooter from '../../components/myFooter'
//import '../home/node_modules/rc-footer/assets/index.css';
// import PhoneIcon from '@material-ui/icons/Phone'
// //import EmailIcon from '@material-ui/icons/Email'
// import AddressIcon from '@material-ui/icons/LocationCity'
// import Header from '../../components/Header'
// import HeaderLinks from '../../components/HeaderLinks'
// import Particles from 'react-particles-js'
// import MyAppbar from '../../components/appbar'
// import white from '../../img/black.png'
// import Menu from "@material-ui/icons/Menu";
// import Image from 'next/image'
// import Head from 'next/head'





// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });



const Signup=(props)=> {
  //const classes = useStyles();
  const bull = <span>•</span>;
  const [loading,setLoading]=useState({
    pending:false,
    done:false,
  })
  const [visible,setVisible]=useState(false)
  const [type,setType]=useState('password')
  const [country,setCountry]=useState()
  const [captcha,setCaptcha]=useState(false)
  const [user,setUser]=useState()
  const Router=useRouter()
  const {slug}=Router.query
  //const { executeRecaptcha } = useGoogleReCaptcha();
  const sitekey="6LclhMgbAAAAAFBPDlXFdGAzA6ZzyQdfI9kkCrd2"
  //const execute = useRecaptcha({ sitekey, hideDefaultBadge: false });
  

  

  const showButton=(handleSubmit)=>{
    if(loading.pending==false&&loading.done==true){
      return (
        <div>
          <Check />
        </div>
      )
    }
    else if(loading.pending==true&&loading.done==false){
      return (
        <div style={{display:'grid',placeItems:"center"}} >
          <CircularProgress style={{color:'#ffab00'}} />
        </div>
      )
    }
    else {
      return (
        <div>
          <Button style={{color:'#ffab00',border:"solid #ffba00",width:90,height:60,}} onClick={handleSubmit} >
           Join
          </Button>
        </div>
      )
    }
    
  }

  const mail=(user)=>{
    
    Axios.post('/api/mail',{user})
    .then((res)=>{
      console.log('sent mail')
      //console.log(res.data)
    })
    //console.log(mail,name)
  }



  const toggleVissible=()=>{
   if(visible){
     setVisible(false)
     setType('password')
   }
   else if(!visible){
     setVisible(true)
     setType('text')
   }
    
  }

  const showEye=()=>{
    if(visible){
      return (
        <Button onClick={toggleVissible} style={{display:'grid',placeItems:'center'}}>
          <VisibilityIcon style={{color:'#ffab00',width:40,height:40}} />
        </Button>
      )
    }
    else {
      return (
        <Button style={{}} onClick={toggleVissible} style={{display:'grid',placeItems:'center'}}>
        <VisibilityOffIcon style={{color:'#ffab00',width:40,height:40}}  />
      </Button>
      )
    }
  }

 
  
  
  return (
   <div style={{display:'grid',placeItems:'center'}}>

     <div style={{padding:30,display:'grid',placeItems:'center'}} >
     
       <div style={{display:"grid",placeItems:"center",zIndex:1000}}>
       <Paper elevation={20} style={{display:'grid',placeItems:'center',backgroundColor:'#131519',zIndex:1000}} className='signup'>
           
         
      
    
         <div style={{
             // background:'linear-gradient(#131519 0%,#131519 50%,ffab00 80%)',
             backgroundColor:"rgba(0,0,0,0.6)",
             width:'100%',
             // marginBottom:170,
             height:'100%',
            padding:20,
             
         }}  >
     
           
             <Grid style={{position:'relative'}} container justify='center'>
             <h4 className='reg-header'  style={{marginTop:10,textAlign:'center'}}>
              <span style={{color:'#ffab00',textAlign:'center'}}>Register</span> for an account
             </h4>
        <IconButton className='signup-close-button' onClick={props.signup} style={{position:'absolute',right:0,top:0}}>
        <Close style={{color:'#ffab00',width:40,height:40}} />
        </IconButton>
        </Grid>
           
             <Formik initialValues={{firstName:'',lastName:'',email:'',password:'',username:'',country:''}} onSubmit={(values)=>{
                       let user={
                         firstName:values.firstName,
                         lastName:values.lastName,
                         email:values.email,
                         password:values.password,
                         bomber:slug,
                         username:values.username,
                         balance:0.00,
                         country:values.country,
                         //level:2

                        
                       }
                      
                       let per={
                         name:values.firstname,
                         mail:values.email
                       }
                       console.log(user)
                     
                       if(values.password.length>=8 &&values.firstName&&values.lastName&&values.email&&values.username&&values.country){
                         // setUser({
                         // name:values.name,
                         // email:values.email,
                         // password:values.password,
                         
                         // username:values.username,
                         // balance:0.00,
                         // //bomber:slug,
                         // })
     
                         
     
                         setLoading({
                           pending:true,
                           done:false,
                         })
                         Axios.post('/api/register',{user})
                         .then((res)=>{
                           if(res.data=='SAVED'){
                             cookie.set('user',user)
                           console.log(res.data)
                           mail(user)
                           // setLoading({
                           //   pending:false,
                           //   done:true,
                           // })
                           Router.push(`./success/${values.username}`)
                           }
                           else if(res.data=='THAT EMAIL ADDRESS IS TAKEN'){
                           alert('Sorry the email address or username is already taken')
                            setLoading({
                             pending:false,
                             done:false,
                           })
                            
                           }
                          
                         })
                         .catch((err)=>{
                           console.log(err.response.data)
                           //console.log('wahala')
                          if(err.response.data=='mongo wahala'){
                           alert('Unnable to connect to the server please try again later')
                           setLoading({
                             pending:false,
                             done:false,
                           })
                          }
                          
                         })
                       }
                      
                       else if(values.password.length<8){
                         alert('Password must contain at least 8 characters')
                       }
                       else if(!values.name||!values.email||!values.password||!values.phone)
                       alert('All fields are required')
                     }}>
                       {({handleChange,handleSubmit,values,user})=>((
                        <div className='signup-container signup-con'>
                          <FormControl  style={{display:'grid',placeItems:'center',padding:10}}>
                             <Grid   justify='center' alignItems='center' container>
                         <Grid justify='center' alignItems='center' style={{}} container direction='row'>
                        <Grid xs={12} md={6} style={{paddingRight:15}} justify='center' alignItems='center' container>
                        <Input
             className='app-input first-input '
             style={{color:'white'}}
             placeholder='First Name'
               id="input-with-icon-adornment"
               color='primary'
               autoComplete={false}
               type='text'
               value={values.firstName}
               onChange={handleChange('firstName')}
               startAdornment={
                 <InputAdornment position="start">
                  <PersonOutlined style={{color:"#ffab00"}} />
                 </InputAdornment>
               }
             />
                        </Grid>
            
                   <Grid xs={12} md={6} style={{paddingRight:15}} justify='center' alignItems='center' container >
                   <Input
             className='app-input username-input'
             style={{color:'white',}}
             placeholder='Last Name'
               id=""
               color='primary'
               autoComplete={false}
               type='text'
               value={values.lastName}
               onChange={handleChange('lastName')}
               startAdornment={
                <InputAdornment position="start">
                 <div style={{width:30}}>

                 </div>
                </InputAdornment>
              }
             />
                   </Grid>
     
                         </Grid>
            
     
             <Grid className='second-sign' justify='center' alignItems='center' style={{}} container direction='row' >
             <Grid xs={12} md={6} style={{paddingRight:15}} justify='center' alignItems='center' container>
             <Input
             className='app-input second-input'
             style={{color:'white'}}
             placeholder='Email address'
               id=""
               color='primary'
               
               type='email'
               value={values.email}
               onChange={handleChange('email')}
               startAdornment={
                 <InputAdornment position="start">
                  <EmailIcon style={{color:"#ffab00"}} />
                 </InputAdornment>
               }
             />
             </Grid>
     
               <Grid style={{paddingRight:15}} className='country-grid' xs={12} md={6} justify='flex-start' alignItems='center' container>
     
               <Input
                startAdornment={
                 <InputAdornment position="start">
                  <Public style={{color:"#ffab00"}} />
                 </InputAdornment>
               }
               required
               placeholder='country'
               name='country'
               className='country-input'
               disableUnderline
               value={values.country}
               onChange={handleChange('country')}
               style={{}}
               inputComponent={()=>(
                 <CountryDropdown
                 style={{height:50,textAlign:'center',backgroundColor:'black',color:'white',border:'2px solid #ffab00',}}
                 value={values.country}
                 onChange={handleChange('country')} />
               )}
               />
              
             
               </Grid>
             </Grid>
             
               <Grid className='password-grid' justify='center' alignItems='center' style={{}} container direction='row'>
                 <Grid xs={12} md={6} style={{paddingRight:15}} justify='center' alignItems='center' container>
                    
                   <Input
             className='app-input '
             style={{color:'white',}}
             placeholder='Username'
               id=""
               color='primary'
               autoComplete={false}
               type='text'
               value={values.username}
               onChange={handleChange('username')}
               startAdornment={
                <InputAdornment position="start">
                 <div style={{width:30}}>

                 </div>
                </InputAdornment>
              }
             />
                   
                 </Grid>
                 <Grid className='password-input' xs={12} md={6} style={{paddingRight:15,}} justify='center' alignItems='center' container>
                 <Input
             className='app-input '
             style={{color:'white'}}
             placeholder='Password'
               id="input-with-icon-adornment"
               color='primary'
               placeholder='Password'
               autoComplete={false}
               type={type}
               name='password'
               onChange={handleChange('password')}
               value={values.password}
               
               startAdornment={
                 <InputAdornment position="start">
                 <HttpsOutlined style={{color:"#ffab00"}} />
                 </InputAdornment>
               }
               
     
             />
                 </Grid>
               </Grid>
               <Grid className='password-eye' container justify='center'>
                 {showEye()}
               </Grid>
                 <div style={{color:'white'}}>

             <p style={{marginTop:10,textAlign:'center'}}>
             I have read and agreed to the terms of service and privacy policy
             </p>
                 </div>
                 
                 <Grid className='signup-confirmation' container direction='row'>
                 <Grid className='captcha-container' xs={12} md={6} container justify='center' alignItems='center' style={{height:60,width:100}}>
                 <ReCAPTCHA
         sitekey="6LcOQiEcAAAAAPPTvimnnC2RY0W6YgY5iuCrSlYp"
         onChange={()=>{setCaptcha(true)}}
         theme='dark'
         onErrored={()=>alert('cannot contact recaptcha please check your network connection and try again')}
         style={{height:60}}
       />
                 
                 </Grid>
                 <Grid className='signup-button' xs={12} md={6} container style={{}} justify='center' alignItems='center' container style={{display:'grid',placeItems:'center',
                 marginTop:40}}>
                   {!loading.pending && !loading.done && captcha ?     <div>
               <Button style={{color:'#ffab00',border:"solid #ffba00",width:90,height:60,}} onClick={handleSubmit} >
                Join
               </Button>
             </div>
                 :
                 !loading.done && loading.pending && captcha ?
                 <Grid container justify='center' alignItems='center'>
                   <HashLoader color='#ffab00'  size={47}/>
                 </Grid>
                 :
                 loading.done && !loading.pending && captcha ?
                 <div>
                   <Check style={{width:40,height:40,color:'#ffab00'}} />
                 </div>
                
                 :
                 null
           }
                   </Grid>

                 </Grid>

                
                             </Grid>
           </FormControl>
                 
                        </div>
                        
                        ))}
                           </Formik>
             
         </div>
     
       
        
       </Paper>
        
       </div>
       
   </div>
   </div>
  );
}
export default Signup