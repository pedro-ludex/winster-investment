//import '../styles/globals.css'
import '../styles/styles.css'
import '../styles/blocks.min.css'
//import '../styles/plugins.min.css'
import '../styles/theme-styles.min.css'
import '../styles/widgets.min.css'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
//import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
//import { appWithTranslation } from 'next-i18next';
import {NextIntlProvider} from 'next-intl';
import Head from 'next/head'
//import fav from '../public/logo1.png'

const theme = createMuiTheme({
  palette: {
     primary: {
        main: "#ffab00" // This is an orange looking color
               },
    //  secondary: {
    //     main: "#ffffff"
    //             }
           },
        

});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
      </Head>
    
     <ThemeProvider theme={theme}>
     <NextIntlProvider messages={pageProps.messages}>
     <Component {...pageProps} />
     </NextIntlProvider>
      </ThemeProvider>
  
    </div>
  )
}

export default MyApp
