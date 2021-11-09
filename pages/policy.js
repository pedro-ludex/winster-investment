import React,{useEffect,useState} from 'react'
import {Grid } from '@material-ui/core'
import MyFooter from '../components/myFooter'
import Header from '../components/Header'
import HeaderLinks from '../components/HeaderLinks'
import {useRouter} from 'next/router'
import Menu from "@material-ui/icons/Menu";
import white from '../img/black.png'
import Image from 'next/image'
//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {useTranslations} from 'next-intl';




const Policy = () => {
const Router=useRouter()
const t = useTranslations('Policy');

// useEffect(()=>{
//     console.log(Router.locale)
// })


    return (
        <div>
            <Header
          
          fixed
          color="primary"
          //routes={dashboardRoutes}
          // changeColorOnScroll={{
          //   color:'transparent',
          //   height:50,
          // }}
          
          // rightLinks={(
          //       <div>
          //         <div>
          //         name
          //       </div>
          //         <div>
          //         name
          //       </div>
          //       </div>
          // )}
          menu={ <Menu style={{color:'black'}} />}
          image={<Image src={white} width={50} height={40} layout='intrinsic' />}
        rightLinks={<HeaderLinks />}   
/>

            <Grid container justify='center'>
                <h3 style={{textAlign:'center',marginTop:100}}>
                  {t('pol-header')}
                </h3>
                <p style={{textAlign:'center',fontSize:18,padding:30}}>
                {t('policy')}
                </p>

                <Grid container justify='center'>
                    <h3 style={{textAlign:'center'}}>
                    {t('info-header')}
                    </h3>
                    <p style={{textAlign:'center',fontSize:18,padding:30}}>
                    {t('info')}
                    </p>
                </Grid>

                <Grid container justify='center'>
                    <h3 style={{textAlign:'center'}}>
                    {t('cookie-header')}

                    </h3>
                    <p style={{textAlign:'center',fontSize:18,padding:30}}>
                        {t('cookie')}
                    </p>
                </Grid>

                <Grid container justify='center'>
                    <h3 style={{textAlign:'center'}}>
                    {t('changes-header')}
                    </h3>
                    <p style={{textAlign:'center',fontSize:18,padding:30}}>
                    {t('changes')}
                    </p>
                </Grid>

            </Grid>
            <MyFooter />
        </div>
    )
}

// export async function getStaticProps({ locale }) {
//     return {
//       props: {
//         ...(await serverSideTranslations(locale, ['common', 'footer'])),
//         // Will be passed to the page component as props
//       },
//     };
//   }

export function getStaticProps({locale}) {

    console.log(locale)
    return {
      props: {
        // You can get the messages from anywhere you like, but the recommended
        // pattern is to put them in JSON files separated by language and read 
        // the desired one based on the `locale` received from Next.js. 
        messages: require(`../public/locales/${locale}.json`),
      }
    };
  }

 export default Policy
