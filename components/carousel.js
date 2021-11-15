import React from 'react'


import { Grid,Card,CardHeader,CardContent,Container,Paper,CircularProgress } from '@material-ui/core'
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';

import Image from 'next/image'

import safe from '../img/safemoon.svg'
import tether from '../img/tether.svg'
import eth from '../img/eth.svg'
import btc from '../img/bitcoin.svg'
import Divider from '@material-ui/core/Divider'
import { AccountBalance,AccountBalanceWalletOutlined } from '@material-ui/icons';
import litecoin from '../img/litecoin.svg'
import CreditCardIcon from '@material-ui/icons/CreditCard';




const Carousel=()=>{

  const percentage=66
  return (
    <Grid className='bonus' style={{}} container justify='center'>
        <Grid  justify='flex-end' container xs={12} md={6}>
        <header style={{padding:30}} className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">Crypto Interest Account</div>
              <h3 className="heading-title interest-header weight-normal">
                An earners market
                </h3>
              <div className="heading-tex bonus-p">
              The Winster Interest Account (WIA) lets you put your crypto to work and earn monthly interest payments in the asset-type that you transfer to Winster.
Winster clients using the WIA earn compound interest in crypto, significantly increasing their Bitcoin, Ether, Litecoin, PAX Gold, USD Coin (USDC), Gemini Dollar (GUSD), and Tether (USDT)** balances over time.
Opening an account is quick and easy. Learn more about how you can start earning interest or refer your friends by exploring our Resource Center.
              </div>
              <Grid style={{marginTop:30,marginBottom:10}} container justify='center'>
          <a data-scroll href="/signup" className="btn btn--large btn--transparent btn--secondary">Get started</a>
          </Grid>
            </header>
        </Grid>

      <Grid style={{}} justify='center' container xs={12} md={6}>
      <Paper style={{zIndex:1000,borderRadius:5}} className='count-paper'>
        <div style={{backgroundColor:'rgba(0,0,0,0.5)',padding:20}}>
          <Grid style={{padding:20}} spacing={5} container direction='row' justify='center'>
            <Grid style={{}} container justify='center' alignItems='center' xs={6} md={3}>
             <Grid justify='center' container>
             <h6 style={{textAlign:'center'}}>
                Bitcoin
              </h6>
             </Grid>
                <Grid   style={{border:'2px solid #ffab00',borderRadius:80,padding:10,display:'grid',placeItems:'center',margin:5}}>
                <Image src={btc} height={30} width={30} layout='intrinsic' />
                </Grid>
            </Grid>
            <Grid container justify='center' alignItems='center' xs={6} md={3}>
           <Grid justify='center' container>
          <Grid container justify='center'> 
          <h6 style={{textAlign:'center'}}>
                Ethereum
              </h6>
          </Grid>
           </Grid>
                <Grid   style={{border:'2px solid #ffab00',borderRadius:60,padding:10,display:'grid',placeItems:'center',margin:5}}>
                <Image src={eth} height={30} width={30} layout='intrinsic' />
                </Grid>
            </Grid>
            <Grid container justify='center' alignItems='center' xs={6} md={3}>
              <Grid container justify='center'>
              <h6 style={{textAlign:'center'}}>
                Litecoin
              </h6>
              </Grid>
                <Grid   style={{border:'2px solid #ffab00',borderRadius:60,padding:10,display:'grid',placeItems:'center',margin:5}}>
                  <Image src={litecoin} height={30} width={30} layout='intrinsic' />
                </Grid>
            </Grid>
            <Grid container justify='center' alignItems='center' xs={6} md={3}>
              <Grid container justify='center'>
              <h6 style={{textAlign:'center'}}>
                Tether
              </h6>
              </Grid>
                <Grid   style={{border:'2px solid #ffab00',borderRadius:80,padding:10,display:'grid',placeItems:'center',margin:5}}>
                <Image src={tether} height={30} width={30} layout='intrinsic' />
                </Grid>
            </Grid>
          </Grid>
          <h6 style={{textAlign:'center',marginTop:30}}>
              And more
            </h6>
          <Grid style={{marginTop:40,marginBottom:40}} container justify='center'>
           
            <Divider variant='middle' style={{backgroundColor:'#ffab00',height:3,opacity:0.7,width:'80%'}} />
          </Grid>
          <Grid style={{}} className='earn-grid'  direction='row' container justify='center'>
            <Grid style={{}} justify='center' container xs={12} md={4}>
               <Grid xs={12} md={12}>
               <h6 style={{textAlign:'center'}}>
                  EARN UP TO
                </h6>
               </Grid>
                  <Grid xs={12} md={12}>
                  <h3 style={{textAlign:'center',color:'#ffab00'}}>
                  12.5%
                </h3>
                  </Grid>
                <h6 style={{textAlign:'center'}}>
                  APY
                </h6>
            </Grid>

            <Grid style={{}} justify='flex-end' container xs={12} md={6}>
              <Grid style={{}} spacing={5} container direction='row' >
                  <Grid style={{}} container md={4} xs={4} justify='center' alignItems='center'>
                  <div  style={{width:80,height:80}}>
              <CircularProgressbarWithChildren
          
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 1,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: `rgba(255, 171, 0,1)`,
            textColor: 'white',
            trailColor: 'grey',
            backgroundColor: '#3e98c7',
            
          
          })}
        value={24}>



<div style={{marginTop:-12}}>
{/* <Image  width={90} height={90} src={two} layout='intrinsic' /> */}
<AccountBalance style={{color:'#ffab00'}} />
</div>




</CircularProgressbarWithChildren>
         </div>
                  </Grid>


                  <Grid style={{}} xs={8} md={8} alignItems='flex-end' container>
                  <p style={{color:'white',marginTop:20,fontSize:18}}>
  Get 7.5% bonus for funds kept in your wallet for over 60 days
</p>
                  </Grid>
              </Grid>








              <Grid container direction='row' >
                  <Grid alignItems='center' justify='center' container md={4} xs={4}>
                  <div  style={{width:80,height:80}}>
              <CircularProgressbarWithChildren
          
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 1,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
        
            // Colors
            pathColor: `rgba(255, 171, 0,1)`,
            textColor: 'white',
            trailColor: 'grey',
            backgroundColor: '#3e98c7',
          
          })}
        value={50}>



<div style={{marginTop:-12}}>
{/* <Image  width={90} height={90} src={two} layout='intrinsic' /> */}
<CreditCardIcon style={{color:'#ffab00'}} />
</div>




</CircularProgressbarWithChildren>
         </div>
                  </Grid>


                  <Grid alignItems='center' xs={8} md={8} container>
                  <p style={{color:'white',marginTop:20,fontSize:18}}>
  Get 10.5% bonus for funds kept in your wallet for 45 days with a balance above $10000
</p>
                  </Grid>
              </Grid>
             
            </Grid>
          </Grid>
        
        </div>
      </Paper>
      </Grid>
    </Grid>
  )
}
export default Carousel