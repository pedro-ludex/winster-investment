import React from 'react'
import {Grid,Button,Paper} from '@material-ui/core'
import Fade from 'react-reveal/Fade'




const Affiliate = () => {
    return (
        <div style={{width:'80%',display:'grid',placeItems:'center',alignItems:'center',marginTop:120,marginBottom:80,zIndex:1000}} >
          <Grid container justify='center'>
            
          <Fade bottom>
          <Paper elevation={10} className='affili countdown-bg1' >
           <Grid spacing={5} container  justify='center' direction='row'>
            <Grid style={{display:'grid',placeItems:'center',}} item md={6} className="">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">Affiliate Program</div>
              <h2 className="heading-title weight-normal">Extending your reach
                </h2>
              <div className="heading-text">
              You may use, reproduce and share any links to any page of this Website. You should use Your individual referral link to take part in the affiliate program. The affiliate program is a way to get extra earnings for referring other people to the products and services offered through this Website.
              </div>
            </header>
         
           
          </Grid>
          <Grid style={{paddingTop:20,paddingRight:-20}} container justify='center' alignItems='center' md={6} className="worl">
          
            {/* <Image width={500} height={550} layout='intrinsic' src={world} /> */}
            <div className='world'>
              <p style={{fontSize:25,color:'white',padding:20}}>
                A vast digital ocean awaits
              </p>
            </div>
           
          </Grid>
         

            </Grid>
           
           </Paper>
          </Fade>

        
          </Grid>
        </div>
    )
}

export default Affiliate
