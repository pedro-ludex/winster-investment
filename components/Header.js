import React,{useState,useEffect} from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "../js/headerStyle.js";
import Image from 'next/image'
import white from '../img/white.png'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import Close from '@material-ui/icons/CloseOutlined'
import ButtonIcon from '@material-ui/core/IconButton'



const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobile,setMobile]=useState(false)
  useEffect(()=>{
    let width=window.innerWidth

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent = (
    <Link href="/" as="/">
      <a className={classes.title}>{brand}</a>
    </Link>
  );

  
  return (
    <AppBar className='app-bar-main' style={{boxShadow:'none'}} >
      <Toolbar style={{color:'white'}} 
      //className={classes.container}
      className='appbar-container'
      >
       <Grid>
       {props.image}
       </Grid>
      {/* <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown>
              {leftLinks}
            </Hidden>
          ) : (
          <div style={{fontSize:20,color:'black',opacity:0,marginLeft:10,fontWeight:'bolder'}}>Winster trade investment</div>
          )}
        </div> */}
          {
            !mobile
            ?
            <Grid>
                <a
                style={{}}
        href="/"
        color="transparent"
        //target="_blank"
        className='nav-link'
      >
        Home
      </a>
      <a
      style={{}}
        href="/login"
        color="transparent"
        //target="_blank"
        className='nav-link'
      >
        Login
      </a>
      <a
      style={{}}
        href="../signup"
        color="transparent"
        //target="_blank"
        className='nav-link'
      >
        Sign Up
      </a>
     
        <a
        style={{}}
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          //target="_blank"
          className='nav-link'
          href='/landing/services'
          onClick={props.service,handleDrawerToggle}
        >
            Services
        </a>
      
      
        <a
        style={{}}
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          //target="_blank"
          className='nav-link'
          href='landing/about'
          onClick={props.about}
        >
            About Us
        </a>
      
      
        <a
        style={{}}
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          //target="_blank"
          className='nav-link'
          onClick={props.package}
          href='landing/plans'
        >
            Plans
        </a>
      
      
        <a
        style={{}}
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          //target="_blank"
          className='nav-link'
          onClick={props.testimonial}
          href='/landing/testimonials'
        >
            Testimonials
        </a>
      
      
        <a
        style={{}}
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          //target="_blank"
          className='nav-link'
          href='landing/contact'
          onClick={props.contact}
        >
            Contact Us
        </a>
      
            </Grid>
            :
            null
          }


        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            style={{marginLeft:'auto',marginRight:0}}
          >
           {props.menu}
          </IconButton>
        </Hidden>
      </Toolbar>
      <Drawer
          className='drawer-container'
          variant='temporary'
          anchor={"right"}
          open={mobileOpen}
          
          //onOpen={()=>{window.scrollTo({ top: 0, behavior: 'auto' })}}
          classes={{
            paper: classes.drawerPaper
          }}
          //className='drawer'
        >

          <Grid style={{backgroundColor:'#131519'}} container direction='column'>

            <Grid  container justify='center' style={{backgroundColor:'#ffab00'}}>
              <Grid style={{marginTop:6}}>
                {props.image}  
              </Grid>
              <ButtonIcon style={{marginRight:0,marginLeft:'auto'}} onClick={handleDrawerToggle}>
              <Close />
              </ButtonIcon>
            </Grid>
                <a
                style={{margin:30,borderBottom:'1px solid #ffab00',color:'white',fontSize:12,textDecoration:'none',marginTop:60}}
        href="/"
        color="transparent"
        //target="_blank"
        className='nav-link'
      >
        Home
      </a>
      <a
      style={{margin:30,borderBottom:'1px solid #ffab00',color:'white',fontSize:12,textDecoration:'none'}}
        href="/login"
        color="transparent"
        //target="_blank"
        className='nav-link'
      >
        Login
      </a>
      <a
      style={{margin:30,borderBottom:'1px solid #ffab00',color:'white',fontSize:12,textDecoration:'none'}}
        href="../signup"
        color="transparent"
        //target="_blank"
        className='nav-link'
      >
        Sign Up
      </a>
      <Tooltip
        id="Youtube-tooltip"
        title="products and services"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <a
        style={{margin:30,borderBottom:'1px solid #ffab00',color:'white',fontSize:12,textDecoration:'none'}}
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          //target="_blank"
          className='nav-link'
          onClick={props.service}
          onClickCapture={handleDrawerToggle}
        >
            Services
        </a>
      </Tooltip>
      <Tooltip
        id="Youtube-tooltip"
        title="about winster trade investment"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <a
        style={{margin:30,borderBottom:'1px solid #ffab00',color:'white',fontSize:12,textDecoration:'none'}}
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          //target="_blank"
          className='nav-link'
          onClick={props.about}
          onClickCapture={handleDrawerToggle}
        >
            About Us
        </a>
      </Tooltip>
      <Tooltip
        id="Youtube-tooltip"
        title="plans and packages "
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <a
        style={{margin:30,borderBottom:'1px solid #ffab00',color:'white',fontSize:12,textDecoration:'none'}}
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          //target="_blank"
          className='nav-link'
          onClick={props.package}
          onClickCapture={handleDrawerToggle}
        >
            Plans
        </a>
      </Tooltip>
      <Tooltip
        id="Youtube-tooltip"
        title="Testimonials from investors"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <a
        style={{margin:30,borderBottom:'1px solid #ffab00',color:'white',fontSize:12,textDecoration:'none'}}
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          //target="_blank"
          className='nav-link'
          onClick={props.testimonial}
          onClickCapture={handleDrawerToggle}
        >
            Testimonials
        </a>
      </Tooltip>
      <Tooltip
        id="Youtube-tooltip"
        title="contact us"
        placement={"top"}
        classes={{ tooltip: classes.tooltip }}
      >
        <a
        style={{margin:30,borderBottom:'1px solid #ffab00',color:'white',fontSize:12,textDecoration:'none'}}
          color="transparent"
          //href="https://youtube.com/channel/UCecLKqQRkiHT9kp5iKjSAmg"
          //target="_blank"
          className='nav-link'
          onClick={props.contact}
          onClickCapture={handleDrawerToggle}
        >
            Contact Us
        </a>
      </Tooltip>
            </Grid>

        </Drawer>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "transparent"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
