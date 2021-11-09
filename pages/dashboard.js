import React,{useState,useRef,useEffect,} from 'react';

import AppBar from '@material-ui/core/AppBar';

import Check from '@material-ui/icons/CheckTwoTone'
//import Drawer from '@material-ui/core/Drawer';

import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import "@material/react-drawer/dist/drawer.css";

import Grid from '@material-ui/core/Grid'
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import {motion} from 'framer-motion'

import PeopleOutline from '@material-ui/icons/People'
import Payment from '@material-ui/icons/PaymentOutlined'

import Poll from '@material-ui/icons/PollOutlined'

import Account from '@material-ui/icons/AccountBalanceOutlined'
import AttachMoney from '@material-ui/icons/AttachMoneyOutlined'
import Paper from '@material-ui/core/Paper'

import Button from '@material-ui/core/IconButton'
import ExitToAppIcon from '@material-ui/icons/ExitToAppOutlined'

import LocalAtmIcon from '@material-ui/icons/LocalAtmOutlined'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BarChartIcon from '@material-ui/icons/BarChart'

import Image from 'next/image'

import Drawer, {
    DrawerHeader,
   
    DrawerAppContent,
  
    DrawerContent,
  } from '@material/react-drawer';
  import "@material/react-drawer/dist/drawer.css";
  
import axios from 'axios';

import Cookie from 'js-cookie'

import {HashLoader,} from  "react-spinners";

import LinearProgress from '@material-ui/core/LinearProgress';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

import ToolTip from '@material-ui/core/Tooltip'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
//import Router from 'next/dist/next-server/lib/router/router';
import {Formik} from 'formik'
import {Input,Popover} from '@material-ui/core'
import CryptoCompare from 'react-crypto-compare'
import Table from 'rc-table'
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";


import tetherIcon from '../img/teth.svg'
// import {
//     chartExample1,
//     chartExample2,
//     chartExample3,
//     chartExample4,
// } from '../variables/charts'
import safemoon from '../img/safemoon.svg'
import btcIcon from '../img/bitcoin.svg'
import ethIcon from '../img/eth.svg'

import black from '../img/black.png'
import AlertIcon from '@material-ui/icons/NotificationImportantOutlined'
import NotificationsNone from '@material-ui/icons/NotificationsActiveRounded'

import Head from 'next/head'
import MyFooter from '../components/myFooter'
import {MiniChart} from 'react-ts-tradingview-widgets'

import balance from '../img/crypto.svg'
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import Divider from '@material-ui/core/Divider'

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import CreditCard from '@material-ui/icons/CreditCard'
import {useRouter} from 'next/router'
import Modal from '@material-ui/core/Modal'
import litecoin from '../img/litecoin.svg'





const fetcher=(url)=>{

  //let person=parseCookies(req)
  let person=Cookie.get('user')
  let raw=JSON.parse(person)  
  const mail=raw.email
  axios.get(url)
  .then((res)=>{
    return res.data
  })
}

const Dashboard=({data})=>{
    
    const [tech,setTech]=useState('BTCUSD')
    const [mobile,setMobile]=useState()
    const [content,setContent]=useState('Balance')
    const [balanceElev,setBalanceElev]=useState(7)
    
    //const {info,error}=useSWR('/api/info',fetcher)
    const [info,setInfo]=useState()
    const [chart,setChart]=useState('BTCUSD')
    //const {user,setUser}=useSWR('/api/info',fetcher)
    const [gotten,setGotten]=useState(false)
    const [analPair,setPair]=useState('BTCUSD')
    const [depoPair,setDepoPair]=useState('BTC')
    const [loading,setLoading]=useState(true)
    const [showDepo,setShowDepo]=useState(false)
    const [deposit,setDeposit]=useState(0)
    const [bigChartData, setbigChartData] = React.useState("data1");
   
    const [address,setAddress]=useState()
    const [withdraw,setWithdraw]=useState(false)
    const [withdrawal,setWithdrawal]=useState(0)
    const [pending,setPending]=useState(false)
    
    const [phone,setPhone]=useState()
    
    const [action,setAction]=useState('confirm')

    const Router=useRouter()

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


    useEffect(()=>{
    let width=window.innerWidth
    let user=Cookie.getJSON('user')
    setContent('Balance')
    //console.log(name)
    if(width<500){
      setMobile(false)
      console.log('mobile view')
      setPhone(true)
    }
    else if(width>500){
        setMobile(true)
        console.log('desktop view')
        setPhone(false)
    }
    getInfo()
   

    },[])


    const scrollTop=()=>{
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    
    const getInfo=()=>{
      let person=Cookie.get('user')
      let raw=JSON.parse(person)  
      const mail=raw.email
        axios.post('/api/info',{mail})
        .then((res)=>{
            //console.log(res.data)
            //let item=JSON.parse(res.data)
            setInfo(res.data)
            setGotten(true)
            setLoading(false)
        })
        .catch((err)=>{
            if(err.response.data=='mongo wahala'){
                alert('Unnable to connect to the server please check your network connection and refresh this page')
                setLoading(false)
               
               }
        })
    }

    

    
    
   
    


    const handleResize=()=>{
        let width=window.innerWidth
        if(width<400){
          setMobile(true)
        }
        else if(width>400){
            setMobile(false)
        }
    }

    const toggleDrawer=()=>{
        mobile ? setMobile(false) : setMobile(true)
        //phone && !open ? setContent('') : setOpen(true)

    }

    
    const columns=[
    
        {
          title:'Amount($)',
          dataIndex:'amount',
          key:'amount',
          width:30,
          fixed:false
        },
        {
          title:'Currency',
          dataIndex:'pair',
          key:'pair',
          width:30,
          fixed:false
        },
       
        {
          title:'Date',
          dataIndex:'date',
          key:'date',
          width:30,
          fixed:false
        },
        {
            title:'Ref',
            dataIndex:'key',
            key:'key',
            width:30,
            fixed:false,
            style:{
                color:'#ffab00'
            }
          },
          {
            title:'Status',
            dataIndex:'status',
            key:'key',
            width:30,
          //   render:()=> action=='confirm' ?
          //    <Grid container alignItems='center'>
          //        <Button style={{color:'#ffab00',fontSize:16}}>Confirm</Button>
          //    </Grid>
          //   //  : action=='load' ?
          //   //  <Grid container alignItems='center' justify='center'>
          //   //      <HashLoader size={30} color='#ffab00' />
          //   // </Grid>
          //   :
          //   null

          },
        
      ]

      function Draw(con){
        setContent(con)
      }

      function drawToggle(){
        mobile ? setMobile(false) : setMobile(true)
      }
    const drawer=()=>{
        let names=['tim','ed','sean']
        let options=[
            {
                name:'Balance',
                icon:<Account style={{width:40,height:40,color:'#ffab00'}} />,
            },
            {
                name:'Deposit',
                icon:<Payment style={{width:40,height:40,color:'#ffab00'}} />,
            },
            {
                name:'Withdraw',
                icon:<LocalAtmIcon style={{width:40,height:40,color:'#ffab00'}} />,
            },
           
            {
              name:'Chart',
              icon:<Poll style={{width:40,height:40,color:'#ffab00'}} />,
          },
          {
            name:'Confirm',
            icon:<Check style={{width:40,height:40,color:'#ffab00'}} />,
        },
        ]
       
        return (
            <div>
                {options.map((item)=>(
                   <div>
                   <Paper onClick={()=>{
                     Draw(item.name)
                    {phone ?  drawToggle():null}
                   }} elevation={balanceElev}  style={{backgroundColor:'black',marginBottom:40,width:'90%',borderBottomRightRadius:5,borderTopRightRadius:5}}  className='dashboard-options'>
                           <motion.div whileHover={{scale:1.2}}>
   
                           <ListItem button>
                       <ListItemIcon>
                            {item.icon}
                           </ListItemIcon>
                       <ListItemText style={{color:'white'}}>
                              {item.name}
                           </ListItemText>
                       </ListItem>
                         
                           </motion.div>
                      </Paper>
               </div>
                ))}
            </div>
        )

    }

    const handleDeposit=(handleChange)=>{
        //setDeposit(money)
        handleChange('amount')
        
        
    }

    const appContent=()=>{
       if(content=='Balance'){
           return (
               <Grid justify='center' container spacing={3} className='container-p'  style={{padding:5,marginTop:60,width:'100%'}} >
                
                   <Grid  className='top-row' justify='flex-start' style={{height:'auto',padding:10,}} container direction='row' spacing={3}>
                     
                   <Grid className='top-balance' justify='center' spacing={3} style={{height:400,width:'100%',}} item xs={12} md={4}>
                     
              <Grid style={{}} container className='c-grid'>
              <Paper style={{width:'95%'}}  className='profile-paper balance-paper'>
  <Grid direction='row' style={{padding:5,}} container>
      <Grid md={2} xs={2} style={{}} item>
          <div>
              {/* <AccountBallanceIcon style={{width:60,height:60,color:'#ffab00'}} /> */}
              <Image src={balance} width={50} height={50} layout='intrinsic'  />
          </div>
      </Grid>
      <Grid md={6} xs={6} style={{}} item>
          <div style={{margin:5,marginBottom:-20}}>
          <h5>
                  Balance
              </h5>
              {/* <Button style={{color:'white'}} onClick={()=>console.log(eth)}>
                  click
              </Button> */}
          </div>
      </Grid>
      <Grid justify='flex-end' alignItems='flex-end' md={2} xs={2} style={{}}  item>
          {/* <ToolTip arrow title='Total accessible balance in dollars' style={{display:'grid',placeItems:'flex-end'}}>
             <IconButton>
             <HelpOutlineIcon style={{width:30,height:30,color:'#ffab00',marginLeft:50,marginTop:-22}} />
             </IconButton>
          </ToolTip> */}
      </Grid>
  </Grid>
  <Grid style={{marginTop:-10}} direction='row' justify='center' alignItems='center' container>
      <Grid style={{}}  md={2} xs={2}  item>
          <AttachMoney className='dollar-sign' style={{height:50,width:50,color:'#ffab00',marginLeft:30,marginRight:10}} />

      </Grid>
      <Grid style={{marginLeft:15}} md={9} xs={9} item>
 {/* {gotten ?  : <h5>0.00</h5> } */}
 {/* <h3 className='balance-value'  >{data.balance}.00</h3> */}
 {
   gotten ? <h4 className='balance-value'  >{info.balance}.00</h4>
   :
   <h4 className='balance-value'  >0.00</h4>
 }
 
      </Grid>

  </Grid>


  <Grid justify='center' alignItems='center' id='level' style={{marginLeft:1,marginTop:10}} direction='row' container>
  <Grid 
 // justify='flex-end' alignItems='flex-end' 
  item md={2} xs={2} style={{color:'white',marginLeft:5,marginBottom:-5}}>
           Level
          </Grid>

          <Grid justify='center' alignItems='center' item md={2} xs={2} style={{color:'white'}}>
              
          <StarBorderIcon style={{marginTop:9,color:'#ffff'}}  />
          </Grid>


          <Grid justify='center' alignItems='center' item md={2} xs={2} style={{color:'white',}}>
              <ToolTip title='last deposit'>
                  <IconButton>
                  <HourglassEmptyIcon style={{marginTop:9,color:'#ffab00'}}  />
                  </IconButton>
              </ToolTip>
          
          </Grid>

          <Grid justify='center' alignItems='center' item md={4} xs={4} style={{color:'white',marginBottom:-9}}>
              22/9/2021
         
          </Grid>
  </Grid>


  <Grid id='progress' style={{marginLeft:15}} direction='row' container>
  <Grid item md={3} xs={3} style={{color:'white',}}>
              Progress
          
          </Grid>

          <Grid justify='center' alignItems='center' item md={9} xs={9} style={{color:'white'}}>
              
          <LinearProgress color='primary'  style={{height:10,width:'75%',marginTop:9,color:'#ffab00'}} variant="determinate" value={gotten ? info.level : 0} />
          </Grid>
  </Grid>
  <Grid id='progress' style={{marginLeft:15,marginTop:10}} direction='row' container>
  <Grid item md={3} xs={3} style={{color:'white',}}>
              Affiliate
          
          
          </Grid>

          <Grid justify='center' alignItems='center' item md={9} xs={9} style={{color:'white',}}>
              
          <LinearProgress color='primary'  style={{height:10,width:'75%',marginTop:9,color:'#ffab00'}} variant="determinate" value={gotten ? info.level*2.7 : 0} />
          </Grid>
  </Grid>
  <p style={{color:'white',fontSize:16,textAlign:'center',margin:5,marginTop:30}}>
    Your referal link
  </p>
  <Grid direction='row' id='progress' style={{marginTop:-5}} container>
  {/* <Grid item md={2} xs={2} style={{}}>
  <PeopleOutline style={{color:'#ffab00',marginBottom:-20}} />
          
          </Grid> */}
          <Grid  justify='center' alignItems='center' item md={12} xs={12} style={{marginTop:5,textAlign:'center'}}>
            
             
              {
                gotten ?
                <a className='affili-link' href={`https://winstertradeinvestment.com/${info.username}`} style={{textAlign:'center',color:'#ffab00'}}>
                 winstertradeinvestment.com/{info.username}
              </a>
              :
              null
              }

          </Grid>
  </Grid>



</Paper>
              </Grid>
</Grid>

<Grid item style={{height:400,width:'85%'}}  direction='column' justify='flex-end'  xs={12} md={3}>
<Grid className='c-grid' justify='center'  style={{}} >
<Paper elevation={0} xs={12} md={3} style={{height:170}} className='profile-paper'>
 
  <Grid style={{}} container justify='center'>
  <MiniChart autosize={true} underLineColor='rgba(255,171,0, 0.1)' trendLineColor='#ffab00' isTransparent  symbol='BTCUSD' colorTheme="dark"></MiniChart>
  </Grid>

 
</Paper>
</Grid>

<Grid item>
<Grid className='c-grid' justify='center'>
<Paper xs={12} md={3} style={{height:170}} className='profile-paper'>
  <Grid justify='center' container  alignItems='center' direction='row'>
  <MiniChart autosize={true} height={200} underLineColor='rgba(255,171,0, 0.1)' trendLineColor='#ffab00' isTransparent  symbol='ETHUSD' colorTheme="dark"></MiniChart>
  </Grid>

</Paper>
</Grid>
</Grid>

</Grid>
<Grid item style={{height:400,width:'85%'}}  direction='column'  xs={12} md={3}>
<Grid className='c-grid' justify='center'>
<Paper xs={12} md={3} style={{height:170}} className='profile-paper'>
  <Grid justify='center' container  alignItems='center' direction='row'>
  <MiniChart autosize={true} height={200} underLineColor='rgba(255,171,0, 0.1)' trendLineColor='#ffab00' isTransparent  symbol='USDTUSD' colorTheme="dark"></MiniChart>
  </Grid>

</Paper>
</Grid>
<Grid  item>
<Grid className='c-grid' justify='center'>
<Paper xs={12} md={3} style={{height:170}} className='profile-paper'>
  <Grid justify='center' container  alignItems='center' direction='row'>
  <MiniChart autosize={true} height={200} underLineColor='rgba(255,171,0, 0.1)' trendLineColor='#ffab00' isTransparent  symbol='LTCUSD' colorTheme="dark"></MiniChart>
  </Grid>

</Paper>
</Grid>
</Grid>
</Grid>


<Grid style={{}} className='c-gri' xs={12} md={2} item justify='center'>

{/* <Grid style={{padding:10}} container justify='center'></Grid> */}

    <Grid className='asset-grid' style={{}} container justify='center'>
    <Paper style={{}} className=' asset-paper'>
<Grid style={{}} direction='column' className='circlar' alignItems='center' container justify='center'>

<Grid style={{marginBottom:50,marginTop:-30}} xs={12} md={12} className='circlar' item justify='center'>
              <div  style={{width:90,height:90}}>
              <h6 style={{textAlign:'center'}}>
     Assets
  </h6>
              <CircularProgressbarWithChildren
          
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
        
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
        value={16}>



<div style={{marginTop:-14}}>
{/* <Image  width={30} height={30} src={btcIcon} layout='intrinsic' /> */}
<Account style={{marginTop:9,color:'#ffab00',width:30,height:30}}  />
</div>
<div style={{color:'white',textAlign:'center',marginTop:-5,fontSize:15}}>
  14%
</div>




</CircularProgressbarWithChildren>

         </div>
     
              </Grid>
              <p style={{color:'white',textAlign:'center',marginBottom:-0.5,fontSize:14}} >
       24% more for loan request
     </p>

 <Grid style={{marginBottom:2}} md={12} xs={12} container justify='center'>
              <Divider variant='middle' style={{height:2,backgroundColor:'rgba(255,255,255,0.3)',width:'100%'}} />
            </Grid>




              <Grid style={{marginBottom:-10}} xs={12} md={12} className='circlar' container justify='center'>
              <div  style={{width:90,height:90}}>
              <h6 style={{textAlign:'center'}}>
     Bonus
  </h6>
              <CircularProgressbarWithChildren
          
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
        
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
        value={10}>



<div style={{marginTop:-12}}>
{/* <Image  width={30} height={30} src={btcIcon} layout='intrinsic' /> */}
<CreditCard style={{marginTop:9,color:'#ffab00',width:30,height:30}}  />
</div>
<div style={{color:'white',textAlign:'center',marginTop:-7}}>
  10%
</div>




</CircularProgressbarWithChildren>

         </div>
     
              </Grid>
           
     
              </Grid>
            
              {/* <Grid container justify='center'>
              <Divider variant='middle' style={{margin:10,height:2,backgroundColor:'rgba(255,255,255,0.3)',width:'90%'}} />
            </Grid> */}
</Paper>
    </Grid>


</Grid>







                   </Grid>
                   {/* <Grid container justify='flex-end' style={{backgroundColor:'blue'}}></Grid> */}
                    
                   <Grid className='bottom-profi' spacing={3} justify='flex-end' style={{marginTop:10}} container direction='row'>

<Grid  style={{}} justify='center'  md={8} xs={12} item>
          <Grid style={{marginTop:-14,}} alignItems='center' container justify='center'>
          <Paper style={{width:'100%',height:500,}} className='profile-paper coin-grid'>
<CryptoCurrencyMarket colorTheme="dark" height={480} width="100%" isTransparent={true} ></CryptoCurrencyMarket>
{/* <AdvancedRealTimeChart style={{}}  isTransparent theme="dark" width="100%" autosize></AdvancedRealTimeChart> */}
</Paper>
          </Grid>
</Grid>



<Grid xs={12} md={4} className='anal-grid' item justify='center'>
<Grid style={{}} justify='center' container>
<Paper style={{padding:0,marginTop:10,width:'90%',height:500}} className='profile-paper coin-grid'>

<Grid style={{}} className='tech-grid' container justify='center'>

<TechnicalAnalysis height='420'   width='100%' symbol={tech}   style={{marginTop:20}} isTransparent colorTheme="dark"></TechnicalAnalysis>


</Grid>
<Grid className='tech-row' style={{}} id='pair' container direction='row'>
                                               
                                               <Grid className='coin-sel' xs={3} md={3} container justify='center' alignItems='center'>
                                                       {tech=='BTCUSD' ?  
                                                        <Grid  style={{display:'grid',placeItems:'center'}} justify='center' alignItems='center' container>
                                                      <div className='tech-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                            <Image priority={true} width={40} height={40}  src={btcIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton  onClick={()=>{setTech('BTCUSD')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                        <Image priority={true} width={40} height={40} responsive src={btcIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                   
                                                    
                                               <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {tech=='ETHUSD' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='tech-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                            <Image priority={true} width={40} height={40} className='coin-icon' src={ethIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setTech('ETHUSD')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                        <Image priority={true} responsive width={40} height={40} className='coin-icon' src={ethIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
                                                    
                                               <Grid className='coin-sel' style={{display:'grid',placeItems:'center'}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {tech=='USDTUSD' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='tech-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={40} height={40} src={tetherIcon}/>
                                                            </motion.div> 
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                       
                                                            <IconButton style={{}} onClick={()=>{setTech('USDTUSD')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        

                                                        <Image priority={true} responsive width={40} height={40} src={tetherIcon}/>
                                                        
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                    
                                                     
                                                    }
                                                    </Grid>
                                                    <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {tech=='LTCUSD' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='tech-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={40} height={40} src={litecoin}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setTech('LTCUSD')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        
                                                        <Image priority={true} responsive width={40} height={40} src={litecoin}/>
                                                            
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                                    </Grid>
</Paper>
</Grid>
</Grid>

 </Grid>
                   
     
          
               </Grid>
           )
       }

       else if(content=='Deposit'){
           return (
                
                    <Grid style={{marginTop:20,display:'grid',placeItems:'center'}} container justify='center' alignItems='center'>
                        <Paper style={{}} className=' deposit-paper'>
                           <Grid item style={{marginBottom:30}} >
                               <h3 style={{textAlign:'center'}}>
                                   Make a <span style={{color:'#ffab00'}}>Deposit</span>
                               </h3>
                           </Grid>
                           <Grid style={{}} container>
                               <form>
                                   <Formik initialValues={{amount:''}} onSubmit={(value)=>{
                                        
                                        let today=new Date()
                                        let year=today.getFullYear()+'/'
                                        let time=today.getHours()+":"
                                        let month=today.getMonth()+'/'
                                        let day=today.getDate()
                                        let date=`${year}${month}${day}`

                                       let item={
                                           investment:value.amount,
                                           pair:depoPair,
                                           //worth:value.worth,
                                           date:date,
                                           username:info.username,
                                           status:'pending'
                                           
                                       }
                                       console.log(item)
                                      
                                       
                                      if(value.amount){
                                        setPending(true)
                                        axios.post('/api/invest',{item})
                                        .then((res)=>{
                                            if(res.data=='SUCCESS'){
                                                setPending(false)
                                                setShowDepo(true)
                                            }
                                        })
                                        .catch((err)=>{
                                         if(err.response.data=='mongo wahala'){
                                             alert('Unnable to connect to the server please try again later')
                                           setPending(false)
                                            }
                                        })
                                      }
                                      else {
                                          alert('All fields are required')
                                      }
                                       
                                   }} >{({handleChange,handleSubmit,values,handleReset,handleBlur})=>(
                                       <Grid item style={{display:'grid',placeItems:'center'}} >

                                           <Grid container justify='center' alignItems='center'>
                                                <a style={{textAlign:'center',color:'white',fontSize:18}}>
                                                    You can easily make a deposit to your account it is simple and straightforward

                                                </a>

                                                
                                           </Grid>

                                           <Grid container justify='center' style={{marginTop:10,}}>
                                                <p style={{textAlign:'center',color:'white',fontSize:18,}}>
                                                    Simply select a cryptocurrency and input how much money you would invest in that currency
                                                </p>
                                                </Grid>
                                           <Grid className='coin-row' style={{marginTop:50}} id='pair' container direction='row'>
                                               
                                               <Grid className='coin-sel' xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='BTC' ?  
                                                        <Grid  style={{display:'grid',placeItems:'center'}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                            <Image priority={true} width={50} height={50}  src={btcIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton  onClick={()=>{setDepoPair('BTC');setShowDepo(false)}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                        <Image priority={true} width={50} height={50} responsive src={btcIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                   
                                                    
                                               <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='ETH' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                            <Image priority={true} width={50} height={50} className='coin-icon' src={ethIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setDepoPair('ETH');setShowDepo(false)}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                        <Image priority={true} responsive width={50} height={50} className='coin-icon' src={ethIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
                                                    
                                               <Grid className='coin-sel' style={{display:'grid',placeItems:'center'}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='USDT' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={50} height={50} src={tetherIcon}/>
                                                            </motion.div> 
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                       
                                                            <IconButton style={{}} onClick={()=>{setDepoPair('USDT');setShowDepo(false)}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        

                                                        <Image priority={true} responsive width={50} height={50} src={tetherIcon}/>
                                                        
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                    
                                                     
                                                    }
                                                    </Grid>
                                                    <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='LTC' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={50} height={50} src={litecoin}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setDepoPair('LTC');setShowDepo(false)}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        
                                                        <Image priority={true} responsive width={50} height={50} src={litecoin}/>
                                                            
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                                    </Grid>
                                         
                                                                <Input
        className='app-input first-input '
        style={{color:'white',textAlign:'center',marginTop:40,marginBottom:30}}
        placeholder='Amount in USD'
          onBlur={()=>setShowDepo(false)}
          id="amount"
          color='primary'
          autoComplete={false}
          type='number'
          value={values.amount}
          //onChange={()=>{handleChange('amount')}}
          onChange={()=>setDeposit(values.amount)}
          onInput={handleChange('amount')}
        //   startAdornment={
        //     <InputAdornment position="start">
        //      <PersonOutline style={{color:"#ffab00"}} />
        //     </InputAdornment>
        //   }
        />

                                <Grid container justify='center' alignItems='center'>
                                
                                        <h3 style={{textAlign:'center'}}>
                                        <CryptoCompare style={{color:'blue'}} from='USD'  to={depoPair} amount={deposit} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> 
                                        </h3>
                                </Grid>

                                <Grid style={{marginTop:20}} justify='center' alignItems='center' container>
                                   {pending && content=='Deposit'
                                    ? 
                                    <HashLoader color='#ffab00' loading={true} size={42} />
                                    :
                                   
                                    <Button onClick={handleSubmit} style={{color:'#ffab00',}}>
                                        Proceed
                                        </Button>
                                    }
                                </Grid>
                                <Grid style={{marginTop:-20}} justify='center' alignItems='center' container>
                              
                                  <Grid container>
                                 
                                
                                 <Modal  style={{display:'grid',placeItems:'center',}} ba 
                                 
                                 onClose={()=>setShowDepo(false)} open={showDepo}>
                                   
                                  
                                   <Grid style={{width:'90%'}} container justify='center'>
                                   <Grid className='depo-modal' 
                                   style={{backgroundColor:'black',margin:20,borderRadius:10,marginTop:0,border:'3px solid #ffab00'}}
                                    container justify='center' alignItems='center'>
                                   <p  style={{color:'white',textAlign:'center',fontSize:20,width:'90%',padding:10}}>
                                    You are about to make a deposit of <span style={{color:'#ffab00'}}>${values.amount}</span>, You are required to pay the sum of <CryptoCompare style={{color:'blue'}} from='USD'  to={depoPair} amount={deposit} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> 
                                    to the wallet address {depoPair=='BTC' ? <a href='#' style={{color:'#ffab00'}}>bc1q30ljt5azln7ygmtaa<br/>yuw4lak3ez2cl05qdzg6d</a>
                                     :
                                      depoPair=='ETH' ? <a style={{color:'#ffab00'}}>0x5B086aF3b099f23f4BC5<br/>fc7754aE63484F48AC79</a> 
                                      :
                                      depoPair=='USDT' ? <a style={{color:'#ffab00'}}>0xc608d59224710Ed2dF32<br/>399c78dF145A0c55B406</a> 
                                      :
                                      depoPair=='LTC' ? <a style={{color:'#ffab00'}}>ltc1q2tjz9e2sy3nedk804<br/>mmfyv28ues3fat0glmsln</a> 
                                      :
                                      null
                                      } and upload proof of Payment
                                </p>
                                <Grid container justify='center'>
                                     <Button  style={{color:'#ffab00'}} onClick={()=>setShowDepo(false)} >
                                        close
                                     </Button>
                                   </Grid>
                                   </Grid>
                                   </Grid>

                                 </Modal>
                                  
                                  </Grid>
                                 
                                </Grid>
                                       </Grid>
                                   )}

                                   </Formik>
                               </form>
                           </Grid>
                        </Paper>
                    </Grid>

                
           )
       }





       else if(content=='Withdraw'){
           return (
            <Grid style={{marginTop:50}} container justify='center' alignItems='center'>
            <Paper style={{}} className='profile-paper withdraw-paper'>
               <Grid item style={{marginBottom:30}} >
                   <h3 style={{textAlign:'center'}}>
                       Make a <span style={{color:'#ffab00'}}>Withdrawal</span>
                   </h3>
               </Grid>
               <Grid style={{}} item>
                   <form>
                       <Formik initialValues={{amount:'',address:''}} onSubmit={(value)=>{
                            
                            let today=new Date()
                            let year=today.getFullYear()+'/'
                            let time=today.getHours()+":"
                            let month=today.getMonth()+'/'
                            let day=today.getDate()
                            let date=`${year}${month}${day}`

                           let item={
                               amount:value.amount,
                               pair:depoPair,
                               //worth:value.worth,
                               date:date,
                               username:data.username,
                               status:'pending',
                               address:value.address
                               
                           }
                           console.log(item)
                          
                           
                          if(value.amount && value.address){
                            setPending(true)
                            axios.post('/api/withdraw',{item})
                            .then((res)=>{
                                if(res.data=='SUCCESS'){
                                    setPending(false)
                                    setWithdraw(true)
                                }
                            })
                            .catch((err)=>{
                             if(err.response.data=='mongo wahala'){
                                 alert('Unnable to connect to the server please try again later')
                               setLoading(false)
                                }
                            })
                          }

                          else {
                              alert('All fields are required')
                          }
                           
                       }} >{({handleChange,handleSubmit,values})=>(
                           <Grid item style={{display:'grid',placeItems:'center'}} >

                               <Grid style={{padding:20,textAlign:'center'}} item justify='center' alignItems='center'>
                                    <a className=''  style={{textAlign:'center',color:'white',fontSize:18}}>
                                        You can easily make a Withdrawal to your designated crypto address within 3
                                         bussiness days, which can be tracked through your reference number
                                    </a>
                               </Grid>
                               <Grid className='coin-row' style={{marginTop:50}} id='pair' container direction='row'>
                                               
                                               <Grid className='coin-sel' xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='BTC' ?  
                                                        <Grid  style={{display:'grid',placeItems:'center'}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                            <Image priority={true} width={70} height={70}  src={btcIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton  onClick={()=>{setDepoPair('BTC')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                        <Image priority={true} width={70} height={70} responsive src={btcIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                   
                                                    
                                               <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='ETH' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                            <Image priority={true} width={70} height={70} className='coin-icon' src={ethIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setDepoPair('ETH')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                        <Image priority={true} responsive width={70} height={70} className='coin-icon' src={ethIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
                                                    
                                               <Grid className='coin-sel' style={{display:'grid',placeItems:'center'}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='USDT' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={70} height={70} src={tetherIcon}/>
                                                            </motion.div> 
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                       
                                                            <IconButton style={{}} onClick={()=>{setDepoPair('USDT')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        

                                                        <Image priority={true} responsive width={70} height={70} src={tetherIcon}/>
                                                        
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                    
                                                     
                                                    }
                                                    </Grid>
                                                    <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {depoPair=='SAFEMOON' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={70} height={70} src={safemoon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setDepoPair('SAFEMOON')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        
                                                        <Image priority={true} responsive width={70} height={70} src={safemoon}/>
                                                            
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                                    </Grid>
                                         
                                                    <Input
className='app-input first-input '
style={{color:'white',textAlign:'center',marginTop:40,marginBottom:30}}
placeholder='Amount in USD'

id="amount"
color='primary'
autoComplete={false}
type='number'
value={values.amount}
//onChange={()=>{handleChange('amount')}}
onChange={()=>setWithdrawal(values.amount)}
onInput={handleChange('amount')}
//   startAdornment={
//     <InputAdornment position="start">
//      <PersonOutline style={{color:"#ffab00"}} />
//     </InputAdornment>
//   }
/>


<div>
<Input
className='app-input first-input '
style={{color:'white',textAlign:'center',marginTop:40,marginBottom:30}}
placeholder='wallet address'

id="amount"
color='primary'
autoComplete={false}
type='number'
value={values.address}
//onChange={()=>{handleChange('amount')}}
onChange={handleChange('address')}
//onInput={handleChange('amount')}
//   startAdornment={
//     <InputAdornment position="start">
//      <PersonOutline style={{color:"#ffab00"}} />
//     </InputAdornment>
//   }
/>
</div>

                    <Grid container justify='center' alignItems='center'>
                    
                            <h3>
                            <CryptoCompare style={{color:'blue'}} from='USD'  to={depoPair} amount={withdrawal} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> 
                            </h3>
                    </Grid>

                    <Grid style={{marginTop:20}} justify='center' alignItems='center' container>
                       {pending && content=='Withdraw'
                        ? 
                        <HashLoader color='#ffab00' loading={true} size={42} />
                        :
                       
                        <Button onClick={handleSubmit} style={{color:'#ffab00',}}>
                            Proceed
                            </Button>
                        }
                    </Grid>
                    <Grid style={{marginTop:30}} justify='center' alignItems='center' item>
                        {withdraw
                        ?
                        <p align='center' style={{color:'white'}}>
                        You are about to make a withdrawal of <span style={{color:'#ffab00'}}>${values.amount}</span> which is equivalent to <CryptoCompare style={{color:'blue'}} from='USD'  to={depoPair} amount={withdrawal} apikey="9e17d4341c26890479617fab12138968c28eecdfd8ac77be8d0bd181fa919870" /> 
                        to the wallet address {values.address}, your request will be approved shortly and completed within 3 bussiness days
                    </p>
                        :
                        <span></span>
                        }
                    </Grid>
                           </Grid>
                       )}

                       </Formik>
                   </form>
               </Grid>
            </Paper>
        </Grid>

           )
       }
       else if(content=='Confirm') {
        return (
            <Grid direction container style={{padding:30,marginTop:20}}>
               <Paper style={{backgroundColor:'rgba(0,0,0,0)',width:'100%',marginTop:20}}>
               <Table emptyText={()=><p style={{fontSize:20,color:'white',padding:20}}>No pending deposits</p>} 
               title={()=><h3 style={{}}>Pending deposits</h3>} rowClassName='table-row' 
               style={{color:'white'}} transformColumns className='depo-table' 
               tableLayout='auto' useFixedHeader={false} scroll={{y:false,x:false}} columns={columns}  data={info.investment} />
               </Paper>
            </Grid>
        )
       }
       else if(content=='Chart'){
         return (
           <Grid container justify='center' >
             <Grid className='chart-row' style={{marginTop:80,}} id='pair' container direction='row'>
                                               
                                               <Grid className='coin-sel' xs={3} md={3} container justify='center' alignItems='center'>
                                                       {chart=='BTC' ?  
                                                        <Grid  style={{display:'grid',placeItems:'center'}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                            <Image priority={true} width={50} height={50}  src={btcIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton  onClick={()=>{setChart('BTC')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'#ffab00'}} icon={faBtc} /> */}
                                                        <Image priority={true} width={50} height={50} responsive src={btcIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                   
                                                    
                                               <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {chart=='ETH' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                            {/* <FontAwesomeIcon  style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                            <Image priority={true} width={50} height={50} className='coin-icon' src={ethIcon}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setChart('ETH')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        {/* <FontAwesomeIcon style={{width:70,height:70,color:'white'}} icon={faEthereum} /> */}
                                                        <Image priority={true} responsive width={50} height={50} className='coin-icon' src={ethIcon}/>
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
                                                    
                                               <Grid className='coin-sel' style={{display:'grid',placeItems:'center'}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {chart=='USDT' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={50} height={50} src={tetherIcon}/>
                                                            </motion.div> 
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                       
                                                            <IconButton style={{}} onClick={()=>{setChart('USDT')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        

                                                        <Image priority={true} responsive width={50} height={50} src={tetherIcon}/>
                                                        
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                    
                                                     
                                                    }
                                                    </Grid>
                                                    <Grid className='coin-sel' style={{}} xs={3} md={3} container justify='center' alignItems='center'>
                                                       {chart=='LTC' ?  
                                                        <Grid  style={{}} justify='center' alignItems='center' container>
                                                      <div className='deposit-selector' >
                                                      <IconButton  style={{}}>
                                                           
                                                           <motion.div  style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}} an whileHover={{scale:1.2}}>
                                                           <Image priority={true} responsive width={50} height={50} src={litecoin}/>
                                                            </motion.div>
                                                           
                                                        </IconButton>
                                                      </div>
                                                        </Grid>
                                                                                                        :
                                                        <IconButton onClick={()=>{setChart('LTC')}}>
                                                        <motion.div style={{display:'grid',placeItems:'center'}} whileHover={{scale:1.2}}>
                                                        
                                                        <Image priority={true} responsive width={50} height={50} src={litecoin}/>
                                                            
                                                        
                                                        </motion.div>
                                                        </IconButton>
                                                     
                                                    }
                                                    </Grid>
    
                                                    </Grid>
             <Grid style={{height:750,marginTop:10}} justify='center' container>
             <Paper style={{}} elevation={20} className='chart-paper'>
               <AdvancedRealTimeChart style={{}} allow_symbol_change={true} symbol={chart}  isTransparent={true} theme="dark" width="100%" autosize></AdvancedRealTimeChart>
             </Paper>
           </Grid>
           </Grid>
         )
       }
    }










    

    return (
        <div>
          <Head>
            <title>
              Dashboard
            </title>
            <script type="text/javascript" dangerouslySetInnerHTML={{__html:`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/610087fa649e0a0a5cce3e11/1fbl16b6j';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}}/>
          </Head>

            <AppBar
                title='Inbox'
                color='primary'
                //style={{height:50}}
                className='app-bar'
            >
                     <Toolbar>
                       { phone ?
                          <IconButton style={{marginLeft:-20,marginRight:20}} onClick={toggleDrawer}>
                          <MenuIcon style={{height:30,width:30,color:"black"}} />
                          </IconButton>
                          : !phone ?
                          <IconButton>
                          <Image  className='dashboard-icon' layout='intrinsic' width={50} height={50} color='ffab00' src={black} />
                          </IconButton>
                          :
                          null
                       }
                 
                  <h5 style={{color:'black'}} >
                    Dashboard
                  </h5>


                 <Grid style={{}} justify='flex-end' spacing={2} container direction='row'>
              
                 <Grid justify='flex-end' container xs={3} md={1}>
                 <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{}}
      >
          <div style={{backgroundColor:"#131521",width:450,height:150,padding:30,}}>
            <h6 style={{textAlign:'center'}}>
              Your referal link is
            </h6>
          {
                gotten ?
                <a style={{color:'#ffab00',fontSize:20}}>
                 www.winstertrade<br/>investment.com/index/{info.username}
              </a>
              :
              <a style={{color:'#ffab00',fontSize:18}}>
              www.winstertradeinvestment.com/loading....
           </a>
              }
          </div>
      </Popover>

      <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
       <PeopleOutline style={{color:'black'}} />
      </IconButton>
                  
                   </Grid>

                   <Grid jusstify='flex-end' style={{}} container xs={3} md={1}>
                   <IconButton >
                    <ToolTip onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}} >
                    <NotificationsNone  style={{color:'black'}} />
                    </ToolTip>
                  </IconButton>
                   </Grid>

                   

                   <Grid justify='flex-end' container xs={3} md={1}>
                   <IconButton onClick={()=>{Router.push('/')}}>
                    <ToolTip  >
                    <ExitToAppIcon style={{color:'black'}} />
                    </ToolTip>
                  </IconButton>
                   </Grid>

                   
                   

                 </Grid>
              </Toolbar>

            </AppBar>
             
            

        <Drawer
          className='drawer-container'
          dismissible
          open={mobile}
          style={{backgroundColor:'black',height:'140vh'}}
          onOpen={scrollTop}
          
          //className='drawer'
        >
      
            <DrawerContent style={{}}>
         
                <List>
                <div>
        <DrawerHeader style={{marginTop:150}}>

              <div style={{textAlign:'center',color:'#ffab00'}}>
              {!loading && gotten ? <h3 style={{color:'#ffab00'}}>{info.username}</h3>  
    
    : <HashLoader color={'#ffab00'} loading={true}  size={50} /> }
                {/* <h3>{info.username}</h3> */}
              </div>
            </DrawerHeader>
        </div>
               
                  {drawer()}
                
                </List>

            </DrawerContent>
        </Drawer>
              {/* <Grid style={} container justify='center'>
                {appContent()}
              </Grid> */}
        <DrawerAppContent className='drawer-app-content'>
            <Grid container style={{}} >
            {appContent()}
         
            </Grid>
        </DrawerAppContent>
          
<div style={{backgroundColor:'black',marginTop:60}}>
<MyFooter />
</div>

        
        </div>
    )
}





//  export async function getServerSideProps({req,res}) {
  
//   let person=parseCookies(req)
//   let raw=JSON.parse(person.user)

//   const mail=raw.email

//   const uri="mongodb+srv://grey:Vermilion9%23@cluster0.tkbdb.mongodb.net/users?retryWrites=true&w=majority"

//   const data = await getData(mail)
//   console.log(data)

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//    return { props:{data}
//   }
// }

export default Dashboard;