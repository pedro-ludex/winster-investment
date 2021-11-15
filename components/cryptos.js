import React from 'react'
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import {Grid} from '@material-ui/core'
import Image from 'next/image'

const Cryptos = () => {
    return (
        <Grid container justify='center' className='crypto-marke' style={{marginTop:60}} >
           <Grid container justify='center'>
           <h4 style={{textAlign:'center'}} className='crypto-heading'>
                    Live Cryptocurrency Market Data
                </h4>
           </Grid>
                   <div>
                   <p style={{textAlign:'center'}}>
                        Gain assess to historical data gathered accross various coins
                    </p>
                   </div>
                
              
              <Grid style={{padding:10}}  justify='center' container>
                  <div className='market-table' style={{height:430}}>
                  <CryptoCurrencyMarket colorTheme="dark" width='100%' height={430} isTransparent={true}></CryptoCurrencyMarket>
                  </div>
                    </Grid>
            

           
        </Grid>
    )
}

export default Cryptos
