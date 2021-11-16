import React from 'react'
import {Container, Grid } from '@material-ui/core'
import Image from 'next/image'
import thawte from '../img/thawte.png'
import sitelock from '../img/sitelock.png'
import symantec from '../img/symantec.png'
import digicert from '../img/digicert.png'
import geotrust from '../img/geotrust.png'
import SecurityIcon from '@material-ui/icons/SecurityOutlined';
import LockIcon from '@material-ui/icons/Lock';
import PolicyIcon from '@material-ui/icons/PolicyOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';
import Assignment from '@material-ui/icons/AssignmentTurnedInOutlined'
import cert from '../img/cert.jpg'
import bsi from '../img/bsicert.jpg'
import MyContainer from '../components/myContainer'
import Paper from '@material-ui/core/Paper'


const Security = () => {
    return (
        <div className='security' style={{}}>
            <h4 style={{textAlign:'center',color:''}} className='choose-heading'>
                Trusted and Secure
            </h4>
            <p style={{textAlign:'center',fontSize:18,padding:20}}>
                By investing with winster trade investment you are assured of
            </p>
            <Grid container justify='center' direction='row'>
                <Grid style={{padding:10,zIndex:1000}} justify='center' alignItems='center' xs={12} md={4} container>
                  <Paper className='countdown-bg1' style={{backgroundColor:'#131519',margin:30,padding:15,height:340,width:'70%',border:"3px solid #ffab00"}} elevation={20}>
                  <div style={{display:'grid',placeContent:'center'}}>
                   <SecurityIcon className='choose-icon' />
                   </div>
                   <h5 style={{color:'#ffab00',textAlign:'center'}}>
                        Security
                   </h5>
                  
                   <p style={{textAlign:'center',fontSize:16,color:'#8c96a5'}}>
                   Your funds are protected by industry leading protocols,dedicated to efficiency and flexibility, while maintaining ease of use
                    </p>
                   
                  </Paper>
                </Grid>
                <Grid style={{padding:10,zIndex:1000}} justify='center' alignItems='center' xs={12} md={4} container>
                    <Paper className='countdown-bg1' style={{backgroundColor:'#131519',margin:30,padding:15,height:340,width:'70%',border:"3px solid #ffab00"}} elevation={20}>
                    <div style={{display:'grid',placeContent:'center'}}>
                   <PolicyIcon className='choose-icon' />
                   </div>
                   <h5 style={{color:'#ffab00',textAlign:'center'}}>
                        Transparency
                   </h5>
                    <p style={{textAlign:'center',fontSize:16,color:'#8c96a5'}}>
                    Honesty and transparency are our top priorities. Winster trade investment is audited to ensure every asset is accounted for in our secure system.
                    </p>
                    </Paper>
                </Grid>
                <Grid style={{padding:10,zIndex:1000}} justify='center' alignItems='center' xs={12} md={4} container>
                    <Paper className='countdown-bg1' style={{backgroundColor:'#131519',margin:30,padding:15,height:340,width:'70%',border:"3px solid #ffab00"}} elevation={20}>
                    <div style={{display:'grid',placeContent:'center'}}>
                   <VerifiedUserIcon className='choose-icon' />
                   </div>
                   <h5 style={{color:'#ffab00',textAlign:'center'}}>
                        Reliability
                   </h5>
                    <p style={{textAlign:'center',fontSize:16,color:'#8c96a5'}}>
                    We ensure speedy and efficient transactions which make your invetments a priority
                    </p>
                    </Paper>
                </Grid>
            </Grid>



            
            <p style={{textAlign:'center',fontSize:16,marginTop:20}}>
                They help make your interests more secure in the palm of your hands and elsewhere
            </p>
            <Grid style={{marginTop:70}} container direction justify='center' alignItems='center'>
                <Grid style={{padding:20}} xs={6} md={2} justify='center' alignContent='center'>
                    <div style={{display:'grid',placeItems:'center'}}>
                    <Image layout='intrinsic' width={200} height={100} style={{}} src={thawte} />
                    </div>
                </Grid>
                <Grid style={{padding:20}} xs={6} md={2} justify='center' alignItems='center'>
                <div style={{display:'grid',placeItems:'center'}}>
                    <Image layout='intrinsic' width={200} height={100} style={{}} src={sitelock} />
                    </div>
                </Grid>
                <Grid style={{padding:20}} xs={6} md={2} justify='center' alignItems='center'>
                <div style={{display:'grid',placeItems:'center'}}>
                    <Image layout='intrinsic' width={200} height={100} style={{}} src={digicert} />
                    </div>
                </Grid>

                <Grid style={{padding:20}} xs={6} md={2} justify='center' alignItems='center'>
                <div style={{display:'grid',placeItems:'center'}}>
                    <Image layout='intrinsic' width={200} height={100} style={{}} src={geotrust} />
                    </div>
                </Grid>
                
            </Grid>
            <Grid style={{backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className='' direction='row' container justify='center' alignItems='center'>
               
                <Grid container justify='center' xs={12} md={12}>
                <p className='heading-text' style={{textAlign:'center',fontSize:16,padding:20}}>
                Backed and Certified by Standard Protocols dedicated to enforcing strict regulations and transparency 
                </p>
                </Grid>
                <Grid style={{display:'grid',placeItems:'center'}} xs={12} md={6}  item>
                   <Paper elevation={20} style={{}} className='security-paper1'>
                   <Image  src={cert} width={500} height={700} layout='intrinsic' />
                   </Paper>
                </Grid>
                
                <Grid  style={{display:'grid',placeItems:'center'}} xs={12} md={6}  item>
                   <Paper elevation={20} style={{padding:0}} className='security-paper2'>
                   <Image  src={bsi} width={500} height={700} layout='intrinsic' />
                   </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Security
