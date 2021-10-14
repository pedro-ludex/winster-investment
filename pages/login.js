import React,{useState,useRef} from 'react';
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
import {Grid,} from '@material-ui/core'
import HttpsOutlined from '@material-ui/icons/HttpsOutlined'
import LensOutlined from '@material-ui/icons/LensOutlined'
import Check from '@material-ui/icons/Check'
import Router from 'next/router'
import {Checkbox,FormControlLabel,CircularProgress} from '@material-ui/core'
import cookie from 'js-cookie'
//import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';
import {HashLoader} from 'react-spinners'
import Paper from '@material-ui/core/Paper'
import MyFooter from '../components/myFooter'
import PhoneIcon from '@material-ui/icons/Phone'
//import EmailIcon from '@material-ui/icons/Email'
import AddressIcon from '@material-ui/icons/LocationCity'
import Particles from 'react-particles-js'
import Header from '../components/Header'
import white from '../img/black.png'
import HeaderLinks from '../components/HeaderLinks'
import Image from 'next/image'
import Menu from "@material-ui/icons/Menu";



//import {Dot} from '@material-ui/icons/dot'

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

const Login=()=> {
  //const classes = useStyles();
  const bull = <span>•</span>;
  const [loading,setLoading]=useState({
    pending:false,
    done:false,
  })
  const [visible,setVisible]=useState(false)
  const [type,setType]=useState('password')

  const [user,setUser]=useState()

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
          {/* <CircularProgress style={{color:'#ffab00'}} /> */}
          <HashLoader size={52} color='#ffab00' />
        </div>
      )
    }
    else {
      return (
        <div  >
          <Button style={{color:'#ffab00',border:"solid #ffba00",width:90,height:60,borderRadius:30}} onClick={handleSubmit} >
           Login
          </Button>
        </div>
      )
    }
    
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
          <VisibilityIcon style={{color:'#ffab00'}} />
        </Button>
      )
    }
    else {
      return (
        <Button style={{}} onClick={toggleVissible} style={{display:'grid',placeItems:'center'}}>
        <VisibilityOffIcon style={{color:'#ffab00'}}  />
      </Button>
      )
    }
  }
  
  return (
   <div>
      <Header
          
          fixed
          color="primary"
          //routes={dashboardRoutes}
          // changeColorOnScroll={{
          //   color:'transparent',
          //   height:50,
          // }}
          
        
          header='Login'
          menu={ <Menu style={{color:'black'}} />}
          image={<Image style={{marginLeft:'auto',marginRight:0}} src={white} width={50} height={40} layout='intrinsic' />}
         rightLinks={<HeaderLinks />}   
/>

     <div style={{display:"grid",placeItems:"center",padding:30}}>
    

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

       <Paper elevation={20} style={{display:'grid',placeItems:'center',zIndex:1000,backgroundColor:'#131519',marginTop:100}} className='signup'>
         
    <Card style={{
        // background:'linear-gradient(#131519 0%,#131519 50%,ffab00 80%)',
        backgroundColor:"rgba(0,0,0,0.5)",
        width:'100%',
        // marginBottom:170,
        height:'100%',

        
    }}  >

        <CardContent >
        <h2 style={{marginTop:10,textAlign:'center',marginBottom:70}}>
        <span style={{color:'#ffab00',textAlign:'center'}}>Login</span> to your Account
        </h2>
        <Formik initialValues={{email:'',password:''}} onSubmit={(values)=>{
                  let user={
                   
                    email:values.email,
                    password:values.password,
                  
                  }
                 
                  let per={
                    name:values.firstname,
                    mail:values.email
                  }
                
                
                  if(values.password.length>=8 &&values.email){
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
                    console.log(user)
                    Axios.post('/api/login',{user})
                    .then((res)=>{
                      if(res.data.status=='LOG IN'){
                        cookie.set('user',user)
                      console.log(res.data)
                      setLoading({
                        pending:false,
                        done:true,
                      })
                      Router.push('./dashboard')
                      }
                      else if(res.data.status=='WRONG DETAILS'){
                        alert('The password you have provided is incorect')
                        setLoading({
                          pending:false,
                          done:false
                        })
                      }
                    })
        
                    .catch((err)=>{
                      console.log(err.response)
                      //console.log('wahala')
                     if(err){
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
                  else if(!values.email||!values.password)
                  alert('All fields are required')
                }}>
                  {({handleChange,handleSubmit,values,user})=>((
                   <div>
                     <FormControl style={{display:'grid',placeItems:'center',padding:10}} >
                   
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

<Input
        className='app-input'
        style={{color:'white',marginTop:50}}
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
          endAdornment={
            <InputAdornment style={{marginRight:-30}}>
                {showEye()}
            </InputAdornment>
          }
        />
        <div style={{marginTop:20}}>
         <p style={{fontSize:16,textAlign:'center'}} className='heading-text'>
         Cant remember password ? click <a href='/password_reset' style={{textDecoration:'none',color:'#ffab00'}}>here</a>
         </p>
        </div>
         <div style={{display:'grid',placeItems:'center',
            marginTop:10,backgroundColor:'rgba(0,0,0,0)',width:'100%',height:150}}>
             <div >
             {showButton(handleSubmit)}
             </div>
              </div>
        
      </FormControl>
                </div>
                   
                   ))}
                      </Formik>

        </CardContent>
    </Card>
   </Paper>

   </div>
   <MyFooter />
   </div>
  );
}
export default Login