import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor:'transparent',
    borderRadius:10,
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Faqs=()=> {
  const classes = useStyles();

  return (
    <Grid container justify='center' style={{marginBottom:80}} >
       <Paper style={{backgroundColor:'rgba(0,0,0,0.3)'}} elevation={20} className=' faqs-paper'>
       <h4 style={{textAlign:'center',marginBottom:30,marginTop:10}}>
            Faqs
        </h4>
      <Accordion className='faqs-accordion countdown-bg1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography variant='p' style={{color:'white'}} className={classes.heading}>What is winster trade investment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='p' style={{color:'white'}}>
          The winstertradeinvestment.com is modern investment program where you are able to make deposit and get the profit. Our Corporate Headquarters is located here: 63 kenton Road, Yorkshire, England 43-19. winstertradeinvestment.com LTD registration number is №12908756. Our goal is to achieve the highest return from the activity on the foreign currency exchange (Forex) and Cryptocurrency exchange markets. Our company is constantly evolving, it improves its marketing components and creates new investment proposals. All this makes the winstertradeinvestment.com an industry leader and to be able to adapt to the constantly changing market conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faqs-accordion countdown-bg1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='p' style={{color:'white'}} className={classes.heading}>Who controls the Investment portfolio?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='p' style={{color:'white'}}>
          The investment portfolio is managed by a team of experienced financial specialists and professional trade analysts who have been working on the currency exchange market for more than 10 years on average. Our experience and contacts ensure access for us to a wide range of local and global resources and bring about benefit from the world's best and most effective technologies of trading on the Forex and Cryptocurrency market.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faqs-accordion countdown-bg1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='p' style={{color:'white'}} className={classes.heading}>Do you accept investors from different countries?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='p' style={{color:'white'}}>
          Any person or company can participate in winstertradeinvestment.com We have no restrictions on any country. The only condition is accepting our terms of service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faqs-accordion countdown-bg1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='p' style={{color:'white'}} className={classes.heading}>What do I need to start investing?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='p' style={{color:'white'}}>
          First of all, you need to register a new account, select an investment plan and make a deposit at least $200 through the available payment systems. For details check the link: Get Started
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faqs-accordion countdown-bg1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='p' style={{color:'white'}} className={classes.heading}>What is the minimum amount allowed to deposit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='p' style={{color:'white'}}>
          Currently we have an introductory low deposit minimum amount of $200 and going up to $Unlimited which is the maximum allowed for a single deposit and depends on your investment plan. You are able to check min. and max. amount for each plan in our main page and your account menu.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faqs-accordion countdown-bg1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:'#ffba00'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='p' style={{color:'white'}} className={classes.heading}>What is the minimum amount for withdrawal ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='p' style={{color:'white'}}>
          the minimum amount for withdrawal is $10
          </Typography>
        </AccordionDetails>
      </Accordion>
       </Paper>

    </Grid>
  );
}
export default Faqs