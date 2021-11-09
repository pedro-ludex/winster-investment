//import '../styles/globals.css'
import '../styles/styles.css'
import '../styles/blocks.min.css'
//import '../styles/plugins.min.css'
import '../styles/theme-styles.min.css'
import '../styles/widgets.min.css'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
//import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
//import { appWithTranslation } from 'next-i18next';
//import {NextIntlProvider} from 'next-intl';
import Head from 'next/head'
import fav from '../public/logo1.png'

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
      <link rel="shortcut icon" href={fav} type="image/x-icon" />
      <link sizes="180x180"  rel="icon" href={fav} />
          <link
            rel="apple-touch-icon"
            sizes="90x90"
            href={fav}
          />
      </Head>
    
     <ThemeProvider theme={theme}>
     
     <Component {...pageProps} />
     
      </ThemeProvider>
  
    </div>
  )
}

export default MyApp
