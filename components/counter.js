import React, {useState,useRef} from 'react'
import Head from 'next/head'
//import CountUp from 'react-countup'
import {Waypoint} from 'react-waypoint'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import AccountBalance from '@material-ui/icons/AccountBalance'
import {Button} from '@material-ui/core'
import { CountUp } from 'use-count-up'
import {Grid} from '@material-ui/core'
import Image from 'next/image'
import assets from '../img/assets.png'
import trans from '../img/transactions.png'
import clients from '../img/clients.png'
import dist from '../img/distribution.png'


const Counter = (props) => {
    const [counted,setCounted]=useState(false)
    const [count,setCount]=useState(false)

    const endCount=()=>{
      setCounted(true)
      console.log('finished')
    }

    const startCount=()=>{
      //counted==false ? setCount(true) : null
      //setCount(true)
      console.log('started count')
    }
   
    return (
        <div>
           


    <div className="main-content-wrapper medium-padding120">
    {/* <Waypoint
        onEnter={setCounted(false)}
        //onLeave={props.end}
        /> */}
  <section className="bg-dotted-map pt-mobile-80">
    <div className="container">
      <div className="row medium-padding300">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="counters">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb30">
            <Grid container justify='center'>
                    <Image src={clients} width={150} height={150} layout='intrinsic'  />
                  </Grid>
              <div className="crumina-module crumina-counter-item">


                <div style={{fontSize:60}} className="counter-numbers counter">

                <Waypoint
        onEnter={()=>setCount(true)}
        //onLeave={endCount}
        //onLeave={props.end}
        />
                <CountUp

  start={1}
  end={87486}
  duration={1.7}
  //separator=" "
  decimalsPlaces={0}
  //redraw={false}
  //preserveValue={true}
  isCounting={count}
  onEndComplete={endCount}
  //onStart={startCount}
/>
  

  
                 
                    
                  <span data-speed={2000} data-refresh-interval={200} data-to={6386} data-from={2} />
                </div>
                <h4 className="counter-title">Investors</h4>
                
                <div className="counter-line" />
              </div>
            </div>



            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <Grid container justify='center'>
                    <Image src={dist} width={150} height={150} layout='intrinsic'  />
                  </Grid>
              <div className="crumina-module crumina-counter-item">
                <div style={{fontSize:60}} className="counter-numbers counter">
                  <span data-speed={2000} data-refresh-interval={3} data-to={16} data-from={2}>16</span>
                  <div className="units">mb</div>
                </div>
                <h4 className="counter-title">Distribution Chain</h4>
                
                <div className="counter-line" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <Grid container justify='center'>
                    <Image src={assets} width={150} height={150} layout='intrinsic'  />
                  </Grid>
              <div className="crumina-module crumina-counter-item">
                <div style={{fontSize:60}} className="counter-numbers counter">
                  <span data-speed={2000} data-refresh-interval={3} data-to={8327} data-from={2} />
                  <div className="units" />

                  <Waypoint
        onEnter={()=>setCount(true)}
        //onLeave={endCount}
        //onLeave={props.end}
        />
                  <CountUp
  start={1}
  end={3277}
  duration={1.7}
  //separator=" "
  decimals={0}
  isCounting={count}
  
  
  onEndComplete={() => setCounted(true)}
  //onStart={() => console.log('Started! 💨')}
>


  
</CountUp>


                </div>
                <h4 className="counter-title">Worth of assets</h4>
                
                <div className="counter-line" />
                {/* <Button onClick={()=>{setCount(true)}}>

                  click
                </Button> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <Grid container justify='center'>
                    <Image src={trans} width={150} height={150} layout='intrinsic'  />
                  </Grid>
              <div className="crumina-module crumina-counter-item">
                <div style={{fontSize:60}} className="counter-numbers counter">
                  <span data-speed={2000} data-refresh-interval={3} data-to={2000} data-from={2} />
                  <Waypoint
        onEnter={()=>setCount(true)}
        //onLeave={endCount}
        //onLeave={props.end}
        />
                  <CountUp
  start={1}
  end={5000}
  duration={1.7}
  //separator=" "
  decimals={0}
  isCounting={count}
  
  
  onEnd={() => setCounted(true)}
  //onStart={() => console.log('Started! 💨')}
>

    

</CountUp>
<div className="units">

                 +
                  </div>
                </div>
                <h4 className="counter-title">Transactions</h4>
                
                <div className="counter-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>

            
        </div>
    )
}

export default Counter
