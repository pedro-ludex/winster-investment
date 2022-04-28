import React,{useRef,useState,useEffect} from 'react'
import Head from 'next/head';
import Image from 'next/image'
// import jsplug from '../js/theme-plugins'
// import jsmain from '../js/main'
// import jsmenu from '../js/js-plugins/crum-mega-menu'
// import jsstock from '../js/js-plugins/highstock'
import Products from '../components/products'
import Carousel from '../components/carousel'
import Plans from '../components/plans'
import Counter from '../components/counter'
import Overview from '../components/marketoverview'
import Testimonials from '../components/testimonial'
import Payments from '../components/payments'
import Cryptos from '../components/cryptos'
import Steps from '../components/steps'
import Faqs from '../components/faqs'
import Security from '../components/security'
import {motion} from 'framer-motion'
import Grid from '@material-ui/core/Grid'
import {useRouter} from 'next/router'
import Filter1Icon from '@material-ui/icons/Filter1'
import Filter2Icon from '@material-ui/icons/Filter2'
import Filter3Icon from '@material-ui/icons/Filter3'
import FilterIcon from '@material-ui/icons/Filter'
import Divider from '@material-ui/core/Divider'
import MyContainer from '../components/myContainer'
//import affili from '../img/affili.jpg'
import Contact from '../components/contact'
import logo1 from'../img/logo1.png'
import logo2 from'../img/logo2.png'
import white from '../img/white.png'
import logo3 from '../img/logo3.png'
import MyFooter from '../components/myFooter'
import Clock from 'react-digital-clock';
import { TickerTape } from "react-ts-tradingview-widgets";
import dots from '../img/dots.png'
import Menu from "@material-ui/icons/Menu";
import Mining from '../components/mining'
import Fade from 'react-reveal/Fade'
import CookieConsent, { Cookies } from "react-cookie-consent";

import Signup from '../components/signup'
import Login from './login'


//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter
  
} from 'reactstrap'
import { faPiggyBank, faMoneyCheck, faMoneyCheckAlt, faCoins, } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/appbar'
import IndexLinks from '../components/indexlinks'
import bg from '../img/bg-2.png'
import Affiliate from '../components/Affiliate'
//import white from '../img/white.png'
import moon from '../img/safemoon.svg'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import AddressIcon from '@material-ui/icons/LocationOnOutlined'
import About from '../components/about'
import Particle from '../components/particles'
import Modal from '@material-ui/core/Modal'



const dashboardRoutes=[]

const Home = () => {

  //const { t } = useTranslation('footer');

  const Router=useRouter()
  const {slug}=Router.query || ''
  
  const [mobile,setMobile]=useState(false)
  const [login,setLogin]=useState(false)
  const [signup,setSignup]=useState(false)

  const aboutRef = useRef(null)
  const serviceRef=useRef(null)
  const packageRef=useRef(null)
  const contactRef=useRef(null)
  const testimonialRef=useRef(null)
  const startRef=useRef(null)
  const faqsRef=useRef(null)


  const [count,setCount]=useState()

  const aboutScroll = () => aboutRef.current.scrollIntoView()  
  const serviceScroll = () => serviceRef.current.scrollIntoView()  
  const packageScroll = () => packageRef.current.scrollIntoView()  
  const testimonialScroll = () => testimonialRef.current.scrollIntoView() 
  const contactScroll = () => contactRef.current.scrollIntoView()
  const startScroll=()=>startRef.current.scrollIntoView()  
  const faqsScroll=()=>faqsRef.current.scrollIntoView()  

  useEffect(()=>{
    let width=window.innerWidth
    //let user=Cookie.getJSON('user')
    //console.log(JSON.stringify(slug))
    //console.log(name)
    if(width<500){
      setMobile(true)
      console.log('mobile view')
     
    }
    else if(width>500){
        setMobile(false)
        console.log('desktop view')

    }
    // if(slug=='services'){
    //     serviceScroll
    // }
  },[])

  const toggleLogin=()=>{
    login ? setLogin(false):setLogin(true)
  }

  const toggleSignup=()=>{
    signup ? setSignup(false):setSignup(true)
  }

  const getday=()=>{
    let day=new Date()
    return (
      <span style={{color:'#ffab00'}}>
        {60-day.getDay()}
      </span>
    )
  }

  
  const stopCount=()=>{
    setCount(true)
    console.log('stopped count')
  }


    return (
        <div>
   <Head>
  
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no maximum-scale=1" />
  <title>Winster trade investment</title>
  
    
  <div>
  <link rel="stylesheet" type="text/css" href="css/plugins.min.css" />
  <link rel="stylesheet" type="text/css" href="css/theme-styles.min.css" />
  <link rel="stylesheet" type="text/css" href="css/blocks.min.css" />
  <link rel="stylesheet" type="text/css" href="css/widgets.min.css" />
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700i,900," rel="stylesheet" />
</div>

{/* <script type="text/javascript" src=""/>

<script type="text/javascript" src="../js/jquery-3.3.1.min.js"/>

<script type="text/javascript" src="../js/map-shortcode.js"/>

<script type="text/javascript" src="../js/js-plugins/crum-mega-menu.js"/>
<script type="text/javascript" src='../js/theme-plugins'/>
<script type="text/javascript" src="../js/js-plugins/isotope.pkgd.min.js"/>
<script type="text/javascrip src="../js/js-plugins/ajax-pagination.js"/>
<script type="text/javascript" src="../js/js-plugins/swiper.min.js"/>
<script type="text/javascript" src="../js/js-plugins/material.min.js"/>
<script type="text/javascript" src="../js/js-plugins/orbitlist.js"/>

<script type="text/javascript" src="../js/js-plugins/bootstrap-datepicker.js"/> */}

<script type="text/javascript" src="../../js/jquery-3.3.1.min.js"></script>

<script defer src="fonts/fontawesome-all.js"/>

<script type="text/javascript" src='../../js/main.js'/>


<script type="text/javascript" dangerouslySetInnerHTML={{__html:`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/610087fa649e0a0a5cce3e11/1fbl16b6j';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}}/>

<script type="module" defer src="https://cdn.jsdelivr.net/npm/@covemarkets/web-widgets@0.0.36/dist/market-ticker-tape/index.js"></script>



   </Head>
   <Header
          
          fixed
          color="transparent"
          //routes={dashboardRoutes}
          // changeColorOnScroll={{
          //   color:'transparent',
          //   height:40,
          // }}
          login={toggleLogin}
          signup={toggleSignup}
         style={{color:'white'}}
          //headersty='Winster trade investment'
          menu={ <Menu />}
          image={<Image src={white} width={50} height={40} layout='intrinsic' />}
          faqs={faqsScroll} start={startScroll} contact={contactScroll} testimonial={testimonialScroll} package={packageScroll} service={serviceScroll} about={aboutScroll}
/>
<div>
  
<Grid container >
  <Particle />
</Grid>


  {/* cookie dialogue */}

  <CookieConsent
  location="bottom"
  buttonText="I accept"
  cookieName="user-acceptance"
  style={{ background: "#131519" }}
  //buttonStyle={{color: "#4e503b", fontSize: "13px" }}
  buttonClasses='cookie-button'
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  
</CookieConsent>

  
  {/* ... end Header */}
  <div className="main-content-wrappr">
      <Fade>
        {
          mobile ?

          
          <div>
              <section style={{}}  data-settings="particles-1" style={{}} className="main-sectio alpha-heading crumina-flying-balls particles-j bg-  responsive-align-center">
      <div style={{}} className="container top-container">
        <div className="row winster-top">
          <div style={{}} className="col-lg-6 col-md-12 col-sm-12 col-xs-6 logo-grid">
            <div className='winster-main-logo' style={{}}>
            <Image priority={true}  src={logo1} layout='fill' />
            </div>
          </div>
          <div style={{}} className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
            <header style={{}} className="heading-talk crumina-module crumina-heading heading--h1  heading--with-decoration winster-header">
              <h2 className=" heading-title f-size-90 weight-normal no-margin">Winster<br/>
                <span className="weight-bold">Trade</span></h2>
              <h3 className="c-primary">Investment</h3>
            </header>
        
          </div>

          
      
        </div>
       
      </div>

    </section>
    <Grid style={{marginTop:30,marginBottom:10,zIndex:1500}} container justify='center'>
          <a data-scroll href="#" onClick={toggleSignup} className="btn btn--large btn--transparent btn--secondary">Get started</a>
          
          </Grid>
          </div>
      :

      
      <section style={{}}  data-settings="particles-1" style={{marginTop:-2}} className="main-section alpha-heading crumina-flying-ball particles-j bg-  responsive-align-center">
      <div style={{}} className="container top-container">
        <div className="row winster-top">
          <div style={{}} className="col-lg-6 col-md-12 col-sm-12 col-xs-6 logo-grid">
            <div className='winster-main-logo' style={{}}>
            <Image priority={true}  src={logo1} layout='fill' />
            </div>
          </div>
          <div style={{}} className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
            <header style={{}} className="heading-talk crumina-module crumina-heading heading--h1  heading--with-decoration winster-header">
              <h2 className=" heading-title f-size-90 weight-normal no-margin">Winster<br/>
                <span style={{}} className="weight-bold">Trade</span></h2>
              <h3 className="c-primary">Investment</h3>
            </header>
        
          </div>

          <Grid style={{marginTop:30,marginBottom:10,zIndex:1500}} container justify='center'>
          <a data-scroll href="/signup" className="btn btn--large btn--transparent btn--secondary">Get started</a>
          
          </Grid>
      
        </div>
       
      </div>
     
    </section>
      
        }
      </Fade>
   
       <div style={{margin:20}}>

       </div>
       <Grid className='tickertape' container>
         {/* <TickerTape colorTheme='dark' /> */}
         <cove-markets-market-ticker-tape
         instrumentSelection="BTC-USD,ETH-USD,SOL-USD,ADA-USD,LTC-USD,USDT-USD"position="center"width="100%" maxWidth="900px" border="1px solid #ffab00"showBorder="true" backgroundColor='black'
         >

         </cove-markets-market-ticker-tape>
       </Grid>
            <Grid className='index-head' container justify='center' alignItems='center' style={{marginTop:20}}>
            
            <h3 style={{}} className=''>Bringing the Revolution</h3>
          
           <Fade bottom >
           <p className={'talk'}  style={{fontSize:18,padding:10}}>
           Winster Trade Investment is a Crypto Trading and Mining Company focused on offering global financial solutions and benefits for millions of investors. Our mission is to help our investors and clients invest their
            money and resources in our crypto Trading and Mining solutions.
            {/* and we offer them risk free return with the support of our highly experienced team and well equipped facilities, With a robust trading portfolio we provide
             risk free profits to our investors. */}
          </p>
           </Fade>
       

            </Grid>
           
            <div ref={serviceRef} style={{marginTop:10,marginBottom:60}}>
           
            <Products mobile={mobile} />
         
            </div>
            <hr className="divider" />
           
            
            {/* <Divider style={{height:0.2,backgroundColor:'grey',marginTop:30,width:'90%'}} variant="middle" /> */}
            {/* <div style={{}}>
            <Carousel />
            </div>
            <hr className="divider" /> */}
            <div>
                <Fade bottom>
                <Cryptos />
                </Fade>
            </div>
            <hr className="divider" />
            
              <div>
               <Fade bottom>
               <Mining />
               </Fade>
              </div>

              <div style={{marginTop:110}}>
              <hr style={{}} className="divider" />
              </div>
             
            <div ref={packageRef} style={{marginTop:10}}>
             <Fade bottom>
             <Plans />
             </Fade>
            </div>
            <div>
             <Fade bottom>
             <Carousel toggle={toggleSignup} />
             </Fade>
            </div>
           
            {/* <div>
              <Payments />
            </div> */}
            <hr className="divider" />

           <div className=''>
            <Fade bottom>
            <Overview />
            </Fade>
           </div>
           <hr className="divider" />

            <div style={{marginTop:60}} ref={startRef}>
            <Fade bottom>
            <Steps bomber={slug} />
            </Fade>
            </div>
         
           <div ref={faqsRef}>
             <Fade bottom>
             <Faqs />
             </Fade>
           </div>
           <hr className="divider" />
           <div>
            <Fade bottom>
            <Security />
            </Fade>
           </div>

   
            <div>
             <Fade bottom>
             <Counter count={count} end={stopCount} />
             </Fade>
            </div>

            <div ref={testimonialRef}>
              <Fade bottom>
              <Testimonials />
              </Fade>
            </div>
            
            <div style={{display:'grid',placeItems:'center'}}>
             
             <Affiliate />
          
            </div>



    
    <section style={{marginTop:100}} className="medium-padding120 responsive-align-center">
      <div className="container">
        <div className="row bg-2">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb30">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
             
              <h4 style={{textAlign:'center',marginBottom:40}} className="heading-titl weight-normal">Introducing Safemoon tokens
              </h4>
              <Grid container justify='center'>
                <motion.div style={{display:'grid',placeItems:'center'}} transition={{duration:40}} animate={{rotateY:[360,0,360,0,360,360,0,360,0,360,360,0,360,0,360,360,0,360,0,360]}}>
                <Image priority={true} src={moon} height={150} width={150} layout='intrinsic' />
                </motion.div>
              </Grid>
              <div style={{fontSize:18}} className="heading-text">Flexible decentralized currency which scales on every transaction and referal you make
              You can accumulate Safemoon tokens by making deposits and making referals, and as your balance increases so do your tokens.
              </div>
              <Grid style={{marginTop:30,}} container justify='center' direction='row'>
                <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:18}}>level 1</p>
                </Grid>

                <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:18}}><span style={{color:'#ffab00'}}>100</span> tokens</p>
                </Grid>
              </Grid>

              <Grid container justify='center' direction='row'>
              <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:18}}>level 2</p>
                </Grid>

                <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:18}}><span style={{color:'#ffab00'}}>150</span> tokens</p>
                </Grid>
              </Grid>

              <Grid container justify='center' direction='row'>
              <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:18}}>level 3</p>
                </Grid>

                <Grid container justify='center' xs={6} md={6}>
                    <p style={{fontSize:18}}><span style={{color:'#ffab00'}}>300</span> tokens</p>
                </Grid>
              </Grid>
            </header>

            <div className="crumina-module crumina-counter-item counter--icon-left mt60">
              <svg className="woox-icon">
                <use xlinkHref="svg-icons/sprites/icons.svg#icon-group" />
              </svg>
              <div className="counter-content">
                <div className="counter-numbers counter">
                  <span data-speed={2000} data-refresh-interval={3} data-to={68000} data-from={2}>68000</span>
                  <div className="units">+</div>
                </div>
                <h4 className="counter-title">ICO Participants</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-lg-offset-0 col-sm-12 col-xs-12">
            <div className="widget w-distribution-ends countdown-bg1">
              <h5 className="title">Distribution
                <br />Ends In:</h5>
              <div className="crumina-countdown-item">
              <h3 style={{fontSize:45}}>
                {
                  getday()
                } days
              </h3>
              </div>


              <a href="006_events.html" className="btn btn--large btn--pink-light">
                Get started
              </a>


              <div className="crumina-module crumina-skills-item skills-item--bordered">
                <div className="skills-item-info">
                  <span className="skills-item-title">$6M<span className="skills-item-count c-primary"><span className="count-animate" data-speed={1000} data-refresh-interval={50} data-to={50} data-from={0} /><span className="units">$30m</span></span></span>
                </div>
                <div className="skills-item-meter">
                  <span className="skills-item-meter-active bg-primary-color" style={{width: '65%'}} />
                </div>
                <span className="add-info">
                  <span><span className="c-link-color">Softcap</span> in 92 days</span>
                  <span className="c-link-color">Hardcap</span>
                </span>
              </div>
              <div className="price-wrap">
                <div className="token-price">
                  Token Price:
                  <div className="price-value">$0.0023</div>
                </div>
                <div className="token-total">
                  Safemoon tokens:
                  <div className="price-value">6803.0122</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Grid container justify='center' ref={contactRef}>
      <Contact />
    </Grid>
  </div>

  {/* //*Login modal */}
  <Grid style={{marginTop:-60}}>
    <Modal 
    //onClose={()=>{setLogin(false)}}
    open={login}>
      <Login login={toggleLogin} />
    </Modal>
  </Grid>

  {/* //*Signup modal */}
  <Grid style={{marginTop:-60}}>
    <Modal 
    //onClose={()=>{setLogin(false)}}
    style={{}}
    open={signup}>
      <Signup signup={toggleSignup} />
    </Modal>
  </Grid>

  {/* Footer */}
  <div id="site-footer" className="footer ">

  <MyFooter />
    {/* <canvas id="can" />
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
          <div className="widget w-info">
            <a href="index-2.html" className="site-logo">
              <img src="img/logo-primary.png" alt="Woox" />
              <svg className="woox-icon" viewBox="0 0 481.448 101.996">
                <path d="M152.514 14.926c0 2.1-1.339 4.593-2.1 7.081L126.3 89.366c-2.487 7.654-8.229 11.673-14.543 11.673-6.889 0-12.056-4.019-15.309-11.673L76.162 43.822 55.877 89.366c-3.253 7.654-8.994 11.673-15.309 11.673-6.7 0-12.056-4.019-14.543-11.673L2.1 22.007C1.148 19.519 0 17.031 0 14.926A14.213 14.213 0 0 1 14.352.574c5.358 0 11.1 3.062 12.821 8.037l15.5 49.18L62.575 9.76C65.063 3.827 69.655.574 76.162.574c6.7 0 11.29 3.253 13.778 9.186l19.71 48.031 15.692-49.18c1.531-4.593 7.271-8.037 12.821-8.037a14.212 14.212 0 0 1 14.351 14.352zM263.69 51.285c0 34.253-29.853 50.711-51.667 50.711-22.006 0-51.859-16.458-51.859-50.711C160.164 17.223 190.016 0 212.022 0c21.815 0 51.668 17.223 51.668 51.285zm-73.292 0c0 14.352 9.568 24.3 21.624 24.3 11.864 0 21.624-9.951 21.624-24.3 0-14.926-9.759-24.877-21.624-24.877-12.055 0-21.622 9.951-21.622 24.877zm190.974 0c0 34.253-29.853 50.715-51.672 50.715-22.006 0-51.858-16.458-51.858-50.711C277.845 17.223 307.7 0 329.7 0c21.819 0 51.672 17.223 51.672 51.285zm-73.291 0c0 14.352 9.567 24.3 21.623 24.3 11.865 0 21.624-9.951 21.624-24.3 0-14.926-9.759-24.877-21.624-24.877-12.056 0-21.623 9.951-21.623 24.877zm173.367 36.932c0 7.271-6.7 13.4-13.97 13.4-4.4 0-7.846-2.3-10.716-5.55l-21.05-24.686-21.05 24.686c-2.87 3.253-6.123 5.55-10.716 5.55-7.08 0-13.97-6.124-13.97-13.4a12.074 12.074 0 0 1 3.254-8.229l25.45-28.9-25.45-28.9a12.348 12.348 0 0 1-3.062-8.037c0-7.463 6.89-13.586 13.97-13.586a13.062 13.062 0 0 1 10.716 5.549L435.712 30.8l20.859-24.676c2.87-3.444 6.315-5.549 10.907-5.549 6.89 0 13.778 6.124 13.778 13.586a12.352 12.352 0 0 1-3.062 8.037l-25.451 28.9 25.451 28.9a11.252 11.252 0 0 1 3.254 8.219z" data-name="Слой 2" />
              </svg>
            </a>
            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra vulputate sapien nec sagittis aliquam bibendum.</p>
          </div>
          <div className="widget w-contacts">
            <ul className="socials socials--white">
              <li className="social-item">
                <a href="#">
                  <i className="fab fa-twitter woox-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#">
                  <i className="fab fa-dribbble woox-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#">
                  <i className="fab fa-instagram woox-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#">
                  <i className="fab fa-linkedin-in woox-icon" />
                </a>
              </li>
              <li className="social-item">
                <a href="#">
                  <i className="fab fa-facebook-square woox-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
            <span> 2018.</span>
            <span><a href="index-2.html">The Woox</a> - ICO and Cryptocurrency Website Template.</span>
            <div className="logo-design">
              <img src="img/logo-fire.png" alt="ThemeFire" />
              <div className="design-wrap">
                <div className="sup-title">love </div>
                <a href="templatespoint.net" className="logo-title">Templates Point</a>
              </div>
            </div>
            <div className="logo-design logo-design-crumina">
              <img src="img/crumina-logo.png" alt="Crumina" />
              <div className="design-wrap">
                <div className="sup-title" />
                <a target="_blank" href="https://www.templateshub.net">Templates Hub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <a className="back-to-top" href="#">
    
        <Image layout='intrinsic' width={50} height={50} src={logo2} />
    
    </a> */}
  </div>
</div>
</div>
    )
}

export default Home

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common', 'footer'])),
//       // Will be passed to the page component as props
//     },
//   };
// }