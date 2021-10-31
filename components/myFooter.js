/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem,Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from '@material-ui/icons/PhoneOutlined'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import AddressIcon from '@material-ui/icons/LocationOnOutlined'
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import white from '../img/white.png'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

// @material-ui/icons

//import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

//const useStyles = makeStyles(styles);

function MyFooter(props) {

  return (
   <Grid style={{marginBottom:-180, zIndex:1000}} className='footer-background countdown-bg1'>
     <Footer
  className='main-footer'
    columns={[
      {
       items:[
         {
          icon: (
            <PhoneIcon style={{color:'#9a7801',width:25,height:25,}} />
          ),
         title:' Phone: +48732121453',
         
          openExternal:false,
          className:'main-footer',
         },
         {
          icon: (
            <EmailIcon style={{color:'#9a7801',width:25,height:25}} />
          ),
         title:' E-mail: winsterinvest@winster.com',
          
          openExternal: false,
          className:'main-footer',
        },
        {
          icon: (
            <AddressIcon style={{color:'#9a7801',width:25,height:25}} />
          ),
         title:'Address: 63 kenton Road, Yorkshire, England',
         
          openExternal: false,
          className:'main-footer',
        },
       ]
      },

      {
       items:[
         {
          title:(
            <div>
              Sign up
            </div>
          ),
          url: '/signup',
          //description:'register for an account',
          openExternal: true,
          className:'main-footer',
         },
         {
          title:(
            <div>
              Login 
            </div>
          ),
          url: '/login',
          //description:'Login to your account',
          openExternal: true,
          className:'main-footer',
         },
         {
          title:(
            <div >
              Contact us
            </div>
          ),
          url: '/landing/contact',
          //description:' +48732121453',
          openExternal: true,
          className:'main-footer',
          LinkComponent:'a'
         },
        
       ]
      },



      {
        items:[
          {
           title:(
             <div>
               Services
             </div>
           ),
           url: '/landing/services',
           //description:'register for an account',
           openExternal: true,
           className:'main-footer',
          },
          {
           title:(
             <div>
               Plans
             </div>
           ),
           url: '/landing/plans',
           //description:'Login to your account',
           openExternal: true,
           className:'main-footer',
          },
          {
           title:(
             <div>
               Privacy policy
             </div>
           ),
           url: '/policy',
           //description:' +48732121453',
           openExternal: true,
           className:'main-footer',
           LinkComponent:'a'
          },
         
        ]
       }
    ]}
    bottom="Winster trade investment"
    
    backgroundColor='#ffab0000'
  />
   </Grid>
    
  );
}

MyFooter.propTypes = {
  whiteFont: PropTypes.bool
};
export default MyFooter