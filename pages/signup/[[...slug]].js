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
//import {Dot} from '@material-ui/icons/dot'
import MyFooter from '../../components/myFooter'
//import '../home/node_modules/rc-footer/assets/index.css';
import PhoneIcon from '@material-ui/icons/Phone'
//import EmailIcon from '@material-ui/icons/Email'
import AddressIcon from '@material-ui/icons/LocationCity'
import Header from '../../components/Header'
import HeaderLinks from '../../components/HeaderLinks'
import Particles from 'react-particles-js'
import MyAppbar from '../../components/appbar'
import white from '../../img/black.png'
import Menu from "@material-ui/icons/Menu";
import Image from 'next/image'
import Head from 'next/head'





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



const Signup=()=> {
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
     <Head>
       <title>
         Sign up
       </title>
     </Head>
      <Header
          
          fixed
          color="primary"
          //routes={dashboardRoutes}
          // changeColorOnScroll={{
          //   color:'transparent',
          //   height:50,
          // }}
          
          // rightLinks={(
          //       <div>
          //         <div>
          //         name
          //       </div>
          //         <div>
          //         name
          //       </div>
          //       </div>
          // )}
          header='Signup'
          menu={ <Menu style={{color:'black'}} />}
          image={<Image style={{marginLeft:'auto',marginRight:0}} src={white} width={50} height={40} layout='intrinsic' />}
        //rightLinks={<HeaderLinks />}   
/>


     <div style={{padding:30,display:'grid',placeItems:'center'}} >
     



<Particles
className='particles'
canvasClassName='particle-canvas'
    params={
      {
        "autoPlay": true,
        "background": {
          // "color": {
          //   "value": "#232741"
          // },
          // "image": "url('http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png')",
          // "position": "50% 50%",
          // "repeat": "no-repeat",
          // "size": "20%",
          //"opacity": 1
        },
        // "backgroundMask": {
        //   "composite": "destination-out",
        //   "cover": {
        //     "color": {
        //       "value": "#fff"
        //     },
        //     "opacity": 1
        //   },
        //   "enable": false
        // },
        "fullScreen": {
          "enable": true,
          "zIndex": 1
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 60,
        "interactivity": {
          "detectsOn": "canvas",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "repulse"
            },
            "onDiv": {
              "selectors": [],
              "enable": false,
              "mode": [],
              "type": "circle"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "attract": {
              "distance": 200,
              "duration": 0.4,
              "easing": "ease-out-quad",
              "factor": 1,
              "maxSpeed": 50,
              "speed": 1
            },
            "bounce": {
              "distance": 200
            },
            "bubble": {
              "distance": 250,
              "duration": 2,
              "mix": false,
              "opacity": 0,
              "size": 0
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 400,
              "links": {
                "blink": false,
                "consent": false,
                "opacity": 1
              }
            },
            "light": {
              "area": {
                "gradient": {
                  "start": {
                    "value": "#ffffff"
                  },
                  "stop": {
                    "value": "#000000"
                  }
                },
                "radius": 1000
              },
              "shadow": {
                "color": {
                  "value": "#000000"
                },
                "length": 2000
              }
            },
            "push": {
              "default": true,
              "groups": [],
              "quantity": 4
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad"
            },
            "slow": {
              "factor": 3,
              "radius": 200
            },
            "trail": {
              "delay": 1,
              "pauseOnStop": false,
              "quantity": 1
            }
          }
        },
        "manualParticles": [],
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        },
        "particles": {
          "bounce": {
            "horizontal": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            },
            "vertical": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1
            }
          },
          "collisions": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "enable": false,
            "mode": "bounce",
            "overlap": {
              "enable": true,
              "retries": 0
            }
          },
          "color": {
            "value": "#ffab00",
            "animation": {
              "h": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              },
              "s": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              },
              "l": {
                "count": 0,
                "enable": false,
                "offset": 0,
                "speed": 1,
                "sync": true
              }
            }
          },
          "destroy": {
            "mode": "none",
            "split": {
              "count": 1,
              "factor": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 3
              },
              "rate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": {
                  "min": 4,
                  "max": 9
                }
              },
              "sizeOffset": true
            }
          },
          "groups": {},
          "life": {
            "count": 0,
            "delay": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0,
              "sync": false
            },
            "duration": {
              "random": {
                "enable": false,
                "minimumValue": 0.0001
              },
              "value": 0,
              "sync": false
            }
          },
          "links": {
            "blink": false,
            "color": {
              "value": "#ffffff"
            },
            "consent": false,
            "distance": 150,
            "enable": false,
            "frequency": 1,
            "opacity": 0.4,
            "shadow": {
              "blur": 5,
              "color": {
                "value": "#00ff00"
              },
              "enable": false
            },
            "triangles": {
              "enable": false,
              "frequency": 1
            },
            "width": 1,
            "warp": false
          },
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "enable": false,
              "rotate": {
                "x": 600,
                "y": 600
              }
            },
            "decay": 0,
            "distance": {},
            "direction": "none",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 50
            },
            "path": {
              "clamp": true,
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0
              },
              "enable": false
            },
            "outModes": {
              "default": "out",
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": true,
            "size": false,
            "speed": 1,
            "spin": {
              "acceleration": 0,
              "enable": false
            },
            "straight": false,
            "trail": {
              "enable": false,
              "length": 10,
              "fillColor": {
                "value": "#000000"
              }
            },
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800,
              "factor": 1000
            },
            "limit": 0,
            "value": 160
          },
          "opacity": {
            "random": {
              "enable": true,
              "minimumValue": 0.1
            },
            "value": {
              "min": 0,
              "max": 1
            },
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 1,
              "sync": false,
              "destroy": "none",
              "minimumValue": 0,
              "startValue": "random"
            }
          },
          "orbit": {
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 45
            },
            "width": 1
          },
          "reduceDuplicates": false,
          "repulse": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
          },
          "roll": {
            "darken": {
              "enable": false,
              "value": 0
            },
            "enable": false,
            "enlighten": {
              "enable": false,
              "value": 0
            },
            "speed": 25
          },
          "rotate": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "path": false
          },
          "shadow": {
            "blur": 0,
            "color": {
              "value": "#000000"
            },
            "enable": false,
            "offset": {
              "x": 0,
              "y": 0
            }
          },
          "shape": {
            "options": {},
            "type": "circle"
          },
          "size": {
            "random": {
              "enable": true,
              "minimumValue": 1
            },
            "value": {
              "min": 1,
              "max": 3
            },
            "animation": {
              "count": 0,
              "enable": false,
              "speed": 4,
              "sync": false,
              "destroy": "none",
              "minimumValue": 0.3,
              "startValue": "random"
            }
          },
          "stroke": {
            "width": 0
          },
          "tilt": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "animation": {
              "enable": false,
              "speed": 0,
              "sync": false
            },
            "direction": "clockwise",
            "enable": false
          },
          "twinkle": {
            "lines": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            },
            "particles": {
              "enable": false,
              "frequency": 0.05,
              "opacity": 1
            }
          },
          "wobble": {
            "distance": 5,
            "enable": false,
            "speed": 50
          },
          "zIndex": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
          }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "themes": []
      }
	    }
	/>
       <div style={{display:"grid",placeItems:"center",zIndex:1000}}>
       <Paper elevation={20} style={{display:'grid',placeItems:'center',backgroundColor:'#131519',zIndex:1000,marginTop:100}} className='signup'>
         
      
    
         <div style={{
             // background:'linear-gradient(#131519 0%,#131519 50%,ffab00 80%)',
             backgroundColor:"rgba(0,0,0,0.6)",
             width:'100%',
             // marginBottom:170,
             height:'100%',
            padding:20,
             
         }}  >
     
           
             <h4 className='reg-header'  style={{marginTop:10,textAlign:'center'}}>
              <span style={{color:'#ffab00',textAlign:'center'}}>Register</span> for an account
             </h4>
           
             <Formik initialValues={{name:'',email:'',password:'',nextPassword:'',username:'',country:''}} onSubmit={(values)=>{
                       let user={
                         name:values.name,
                         email:values.email,
                         password:values.password,
                         bomber:slug,
                         username:values.username,
                         balance:0.00,
                         country:values.country,
                         level:2

                        
                       }
                      
                       let per={
                         name:values.firstname,
                         mail:values.email
                       }
                     
                       if(values.password==values.nextPassword&&values.password.length>=8 &&values.name&&values.email&&values.username&&values.country){
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
                           Router.push('../success')
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
                       else if(values.password!=values.nextPassword&&values.name&&values.email){
                         alert('The passwords do not match')
                       }
                       else if(values.password.length<8){
                         alert('Password must contain at least 8 characters')
                       }
                       else if(!values.name||!values.email||!values.password||!values.phone)
                       alert('All fields are required')
                     }}>
                       {({handleChange,handleSubmit,values,user})=>((
                        <div>
                          <FormControl style={{display:'grid',placeItems:'center',marginTop:150,padding:10}}>
                             <Grid   justify='center' alignItems='center' container>
                         <Grid justify='center' alignItems='center' style={{}} container direction='row'>
                        <Grid xs={12} md={6} style={{paddingRight:15}} justify='center' alignItems='center' container>
                        <Input
             className='app-input first-input '
             style={{color:'white'}}
             placeholder='Full name'
               id="input-with-icon-adornment"
               color='primary'
               autoComplete={false}
               type='text'
               value={values.name}
               onChange={handleChange('name')}
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
             placeholder='Username'
               id=""
               color='primary'
               autoComplete={false}
               type='text'
               value={values.username}
               onChange={handleChange('username')}
               startAdornment={
                <InputAdornment position="start">
                 <PersonOutlined style={{color:"#ffab00"}} />
                </InputAdornment>
              }
             />
                   </Grid>
     
                         </Grid>
             {/* <div style={{backgroundColor:'blue'}}>
             <CountryDropdown
               value={country}
               onChange={(val) =>setCountry(val)} />
             </div> */}
     
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
                 style={{width:200,backgroundColor:'black',color:'white',border:'2px solid #ffab00',}}
                 value={values.country}
                 onChange={handleChange('country')} />
               )}
               />
              
             
               </Grid>
             </Grid>
             
               <Grid justify='center' alignItems='center' style={{}} container direction='row'>
                 <Grid xs={12} md={6} style={{paddingRight:15}} justify='center' alignItems='center' container>
                 <Input
             className='app-input'
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
                 <Grid xs={12} md={6} style={{paddingRight:15}} justify='center' alignItems='center' container>
                 <Input
             className='app-input second-input'
             style={{color:'white'}}
             placeholder='Password'
               id="input-with-icon-adornment"
               color='primary'
               placeholder='Confirm Password'
              
               type={type}
               name='nextPassword'
               onChange={handleChange('nextPassword')}
               value={values.nextPassword}
               
               startAdornment={
                 <InputAdornment position="start">
                 <HttpsOutlined style={{color:"#ffab00"}} />
                 </InputAdornment>
               }
              
     
             />
                 </Grid>
               </Grid>
               <Grid container justify='center'>
                 {showEye()}
               </Grid>
                 <div style={{color:'white'}}>
                 {/* <FormControlLabel
                 style={{color:'white',marginTop:-20}}
                 color='primary'
               value="bottom"
               control={<Checkbox   style={{color:'white'}} color="default" />}
               label="I have read and agreed to the terms of service and privacy policy"
               labelPlacement="right"
             /> */}
             <p style={{marginTop:10,textAlign:'center'}}>
             I have read and agreed to the terms of service and privacy policy
             </p>
                 </div>
                 <Grid container justify='center' alignItems='center' style={{}}>
                 <ReCAPTCHA
         sitekey="6LcOQiEcAAAAAPPTvimnnC2RY0W6YgY5iuCrSlYp"
         onChange={()=>{setCaptcha(true)}}
         theme='dark'
         onErrored={()=>alert('cannot contact recaptcha please check your network connection and refresh the page')}
         
       />
                 
                 </Grid>
                <Grid style={{}} justify='center' alignItems='center' container style={{display:'grid',placeItems:'center',
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
           </FormControl>
                 
                        </div>
                        
                        ))}
                           </Formik>
             
         </div>
     
       
        </Paper>
        
       </div>
       
   </div>
   <div style={{backgroundColor:'red',width:'100%'}}>
          <MyFooter />
          </div>
   </div>
  );
}
export default Signup