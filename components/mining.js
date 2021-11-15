import React,{useState} from 'react'
import {Grid,Paper} from '@material-ui/core'
import Image from 'next/image'
import pic1 from '../img/bg_3.jpg'
import Fade from 'react-reveal/Fade'

const Mining=()=>{
    
    return (
        <Grid className='mining' style={{}}>
           <Grid container direction='row' justify='center'>
           <Grid xs={12} md={5} container justify='center' style={{padding:20}}>
            <Paper className='countdown-bg1' elevation={20}>
            <header style={{padding:30}} className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">Top-Tier crypto mining</div>
              <h4 className="heading-title interest-header weight-normal">
                Designed for your needs
                </h4>
              <div className="heading-text bonus-p">
                We have access to state of the art mining hardware and equipment that aims to keep the mining process as efficient and seamless as possible
              </div>
            </header>
            </Paper>
            </Grid>

            <Grid style={{padding:30}} container justify='center' className='countdown-bg'  xs={12} md={6}>
                <Paper style={{}} className='mining-main-pic' elevation={20}>
                  
                </Paper>
                <Grid container justify='flex-start'>
                <div style={{margin:5}} className=" mining-talk hardware-talk">Well managed hardware</div>
                </Grid>
                {/* <Image src={pic1} layout='intrinsic' width={600} height={400} /> */}
            </Grid>
           </Grid>

                    <h4 style={{textAlign:'center',marginTop:80}}>
                        Agile Infrastructure
                    </h4>
                    <p style={{textAlign:'center',fontSize:18,padding:30,marginBottom:-35}}>
                        Our fascilities are managed and maintained by a team of professionals who work hard to ensure Efficiency
                    </p>

           <Grid  style={{}} container justify='center' direction='row'>
                <Grid className='hardware-group' style={{}} container justify='center' xs={12} md={6}>
                    <Paper className='hardware-1' elevation={20}>
                        
                    </Paper>
                   <Grid container justify='flex-start'>
                   <div style={{margin:5}} className=" mining-talk">Winster Equipment room</div>
                   </Grid>
                </Grid>

                <Grid className='hardware-group' style={{}} container justify='center' xs={12} md={6}>
                    <Paper className='hardware-2' elevation={20}>

                    </Paper>
                    <Grid container justify='flex-start'>
                   <div style={{margin:5}} className=" mining-talk">Winster data center</div>
                   </Grid>
                </Grid>
           </Grid>

        </Grid>
    )
}

export default Mining