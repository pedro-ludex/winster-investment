import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid'
import signup from '../img/document.svg'
import confirm from '../img/confirmation.svg'
import deposit from '../img/deposit.svg'
import Image from 'next/image'
import Forward from '@material-ui/icons/ArrowForward'
import Down from '@material-ui/icons/ArrowDownward'
import Paper from '@material-ui/core/Paper'




function getSteps() {
  return [<p>Register for a free account by clicking <a>Here</a></p>, <p>Confirm your account details through your Email</p>, <p>Make a deposit to your account and </p>];
}



const Steps=(props)=>{
  
  const [mobile,setMobile]=useState(false)

  useEffect(()=>{
    let width=window.innerWidth
    //let user=Cookie.getJSON('user')
    
    console.log(name)
    if(width<500){
      setMobile(true)
      console.log('mobile view')
     
    }
    else if(width>500){
        setMobile(false)
        console.log('desktop view')

    }
  },[])

  

  return (
    <div  style={{marginTop:50}}>
      <h4 className='getting-started-header' style={{textAlign:'center'}}>
      How to get started
    </h4>
  
     
      <Grid direction='row' container justify='center' alignItems='center' >
        <Grid style={{display:'grid',placeItems:'center',padding:10}} item xs={12} md={2}>
         <Paper style={{width:'100%',height:300,display:'grid',placeItems:'center',zIndex:1000}} className='countdown-bg1' elevation={20}>
         <Image width={100} height={100} layout='intrinsic' src={signup} />
          <p style={{textAlign:'center',fontSize:20,color:'white'}}>Register</p>
         </Paper>
        </Grid>
        <Grid style={{}} style={{display:'grid',placeItems:'center'}} item xs={12} md={2}>
        {mobile ? 
          <Down style={{width:50,height:50,color:'#ffab00'}} />
          :
          <Forward style={{width:50,height:50,color:'#ffab00'}} />
        }
        </Grid>
        
        <Grid style={{display:'grid',placeItems:'center',padding:10}} item xs={12} md={2}>
        <Paper style={{width:'100%',height:300,display:'grid',placeItems:'center',zIndex:1000}} className='countdown-bg1' elevation={20}>
          <Image width={100} height={100} layout='intrinsic' src={confirm} />
          <p style={{textAlign:'center',color:'white', fontSize:20}}>Confirm your Email</p>
          </Paper>
        </Grid>
        <Grid style={{display:'grid',placeItems:'center'}} item xs={12} md={2}>
        {mobile ? 
          <Down style={{width:50,height:50,color:'#ffab00'}} />
          :
          <Forward style={{width:50,height:50,color:'#ffab00'}} />
        }
        </Grid>
        <Grid style={{display:'grid',placeItems:'center',padding:10}} item xs={12} md={2}>
        <Paper style={{width:'100%',height:300,display:'grid',placeItems:'center',zIndex:1000}} className='countdown-bg1' elevation={20}>
          <Image width={120} height={120} layout='intrinsic' src={deposit} />
          <p style={{textAlign:'center',fontSize:20,color:'white'}}>Make a deposit</p>
          </Paper>
        </Grid>
      </Grid>
      <p className='access-para' style={{textAlign:'center',fontSize:20}}>
    To access the features and benefits provided by winster trade investment<Button style={{color:'#ffab00'}} onClick={()=>{Router.push(`../Register/${props.bomber}`)}} ><span style={{}}> Sign up </span></Button> with credentials and get started. 
    </p>
    </div>
  );
}
export default Steps