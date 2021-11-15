import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons'
import {faPiggyBank} from '@fortawesome/free-solid-svg-icons'
import {faMoneyCheckAlt} from  '@fortawesome/free-solid-svg-icons'
import {faCoins} from  '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'
import Image from 'next/image'
import crypto from '../img/mining.svg'
import currency from '../img/cryptocurrency.svg'
import chart from '../img/chart.svg'
import tax from '../img/tax.svg'
import invest from '../img/invest.svg'




// import {
//     Container,
//     Row,
//     Col,
//     Button,
//     Card,
//     CardBody,
//     CardHeader,
//     CardFooter
    
// } from 'reactstrap'


import { Grid,Card,CardHeader,CardContent,Paper } from '@material-ui/core'

const Products = (props) => {
    return (
        <div style={{paddingBottom:60,paddingTop:60,paddingLeft:30,paddingRight:30}}>
            <Grid style={{borderRadius:8}}>
                
            <h3 style={{textAlign:'center'}}>
                Our Services
            </h3>
                
             {
                 props.mobile ?
                 <Grid container
                 direction='row'
                 justify='center'
                 alignItems='center'
                 
                 
                 >
     
                  <Fade bottom cascade>
                  <Grid item
                 direction
                 justify='center'
                 alignItems='center'
                 md={3}
                 xs={12}
                 
                 >
                                     <div style={{display:'grid',placeItems:'center'}}>
                                     <Card  style={{zIndex:1000}} elevation={20} className='product-grid countdown-bg1'>
                                        
                                         <CardContent>
                                             <div style={{display:'grid',placeItems:'center'}}>
                                             <Image width={100} height={100} src={crypto} layout='intrinsic' />
                                             </div>
                                             <h5 style={{textAlign:'center' ,color:'#ffab00',marginTop:40}}>
                                                  Crypto mining
                                             </h5>
                                             <div style={{color:'white',textAlign:'center'}}>
                                                Fast and efficient mining solutions using the latest technologies and hardware with steady rates and no hidden charges
                                             </div>
                                           
                                         </CardContent>
                                     </Card>
                                     
                                     </div>
                 </Grid>
                 
                 <Grid item
                 direction
                 justify='center'
                 alignItems='center'
                 md={3}
                 xs={12}
                 >
                                        <div elevation={20} style={{display:'grid',placeItems:'center'}}>
                                     <Card style={{zIndex:1000}} className='product-grid countdown-bg1'>
                                         
                                         <CardContent>
                                             <div style={{display:'grid',placeItems:'center'}}>
                                             <Image width={100} height={100} src={invest} layout='intrinsic' />
                                             </div>
                                             <h5 style={{textAlign:'center' ,color:'#ffab00',marginTop:40}}>
                                                 Crypto Investments
                                             </h5>
                                             <div style={{color:'white',textAlign:'center'}}>
                                             Invest in our crypto trades and get live trade data and analysis with a 25% guarantee in all our investments.
                                             </div>
                                            
                                         </CardContent>
                                     </Card>
                                     
                                     </div>
                 </Grid>
     
     
                 <Grid item
                 direction
                 justify='center'
                 alignItems='center'
                 md={3}
                 xs={12}
                 >       
                  <div style={{display:'grid',placeItems:'center'}}>
                                     <Card elevation={20} style={{zIndex:1000}} className='product-grid countdown-bg1'>
     
                                         <CardContent>
                                             <div style={{display:'grid',placeItems:'center'}}>
                                             <Image width={100} height={100} src={currency} layout='intrinsic' />
                                             </div>
                                             <h5 style={{textAlign:'center' ,color:'#ffab00',marginTop:40 }}>
                                                 Crypto Transactions
                                             </h5>
                                             <div style={{color:'white',textAlign:'center'}}>
                                             Conduct live crypto and cash transactions which are completely transparent and encrypted.
                                             </div>
                                         </CardContent>
                                     </Card>
                                     
                                     </div>
                                         
                 </Grid>
     
                 <Grid item
                 direction
                 justify='center'
                 alignItems='center'
                 md={3}
                 xs={12}
                 >
                      <div style={{display:'grid',placeItems:'center'}}>
                                     <Card elevation={20} style={{zIndex:1000}} className='product-grid countdown-bg1'>
                                        
                                         <CardContent style={{}}>
                                             <div style={{display:'grid',placeItems:'center'}}>
                                             <Image width={100} height={100} src={chart} layout='intrinsic' />
                                             </div>
                                             <h5 style={{textAlign:'center',color:'#ffab00',marginTop:40}}>
                                                 Crypto Trading
                                             </h5>
                                             <div style={{color:'white',textAlign:'center'}}>
                                             Access our AI integrated crypto trading charts and trading signals, predicted by a state of the art Artificial inteligence model
                                             </div>
                                         </CardContent>
                                     </Card>
                                     
                                     </div>
     
                 </Grid>
     
                  </Fade>
     
                 </Grid>
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 :






                <Fade bottom>
                     <Grid container
                 direction='row'
                 justify='center'
                 alignItems='center'
                 
                 
                 >
     
                  
                  <Grid container
                 direction
                 justify='center'
                 alignItems='center'
                 md={3}
                 xs={12}
                 
                 >
                                     <div style={{display:'grid',placeItems:'center'}}>
                                     <Card  style={{zIndex:1000}} elevation={20} className='product-grid countdown-bg1'>
                                         
                                         <CardContent>
                                             <div style={{display:'grid',placeItems:'center'}}>
                                             <Image width={100} height={100} src={crypto} layout='intrinsic' />
                                             </div>
                                             <h6 style={{textAlign:'center' ,color:'#ffab00',marginTop:40}}>
                                                  Crypto mining
                                             </h6>
                                             <div style={{color:'white',textAlign:'center'}}>
                                                Fast and efficient mining solutions using the latest technologies and hardware with steady rates and no hidden charges
                                             </div>
                                           
                                         </CardContent>
                                     </Card>
                                     
                                     </div>
                 </Grid>
                 
                 <Grid container
                 direction
                 justify='center'
                 alignItems='center'
                 md={3}
                 xs={12}
                 >
                                        <div elevation={20} style={{display:'grid',placeItems:'center'}}>
                                     <Card style={{zIndex:1000}} className='product-grid countdown-bg1'>
                                         
                                         <CardContent>
                                             <div style={{display:'grid',placeItems:'center'}}>
                                             <Image width={100} height={100} src={invest} layout='intrinsic' />
                                             </div>
                                             <h6 style={{textAlign:'center' ,color:'#ffab00',marginTop:40}}>
                                                 Crypto Investments
                                             </h6>
                                             <div style={{color:'white',textAlign:'center'}}>
                                             Invest in our crypto trades and get live trade data and analysis with a 25% guarantee in all our investments.
                                             </div>
                                            
                                         </CardContent>
                                     </Card>
                                     
                                     </div>
                 </Grid>
     
     
                 <Grid container
                 direction
                 justify='center'
                 alignItems='center'
                 md={3}
                 xs={12}
                 >       
                  <div style={{display:'grid',placeItems:'center'}}>
                                     <Card elevation={20} style={{zIndex:1000}} className='product-grid countdown-bg1'>
     
                                         <CardContent>
                                             <div style={{display:'grid',placeItems:'center'}}>
                                             <Image width={100} height={100} src={currency} layout='intrinsic' />
                                             </div>
                                             <h6 style={{textAlign:'center' ,color:'#ffab00',marginTop:40 }}>
                                                 Crypto Transactions
                                             </h6>
                                             <div style={{color:'white',textAlign:'center'}}>
                                             Conduct live crypto and cash transactions which are completely transparent and encrypted.
                                             </div>
                                         </CardContent>
                                     </Card>
                                     
                                     </div>
                                         
                 </Grid>
     
                 <Grid container
                 direction
                 justify='center'
                 alignItems='center'
                 md={3}
                 xs={12}
                 >
                      <div style={{display:'grid',placeItems:'center'}}>
                                     <Card elevation={20} style={{zIndex:1000}} className='product-grid countdown-bg1'>
                                        
                                         <CardContent style={{}}>
                                             <div style={{display:'grid',placeItems:'center'}}>
                                             <Image width={100} height={100} src={chart} layout='intrinsic' />
                                             </div>
                                             <h6 style={{textAlign:'center',color:'#ffab00',marginTop:40}}>
                                                 Crypto Trading
                                             </h6>
                                             <div style={{color:'white',textAlign:'center'}}>
                                             Access our AI integrated crypto trading charts and trading signals, predicted by a state of the art Artificial inteligence model
                                             </div>
                                         </CardContent>
                                     </Card>
                                     
                                     </div>
     
                 </Grid>
     
                
     
                 </Grid>
                </Fade>
             }

            



        
            </Grid>
        </div>
    )
}

export default Products
