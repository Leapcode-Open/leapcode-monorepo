import '../styles/globals.css'
import { AuthProvider, AuthContext } from '../providers/AuthProvider';
import NProgress from 'nprogress'
import Head from 'next/head'
import Router from 'next/router';

// NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="App w-full min-h-screen font-jak flex flex-col justify-between">
        <Component {...pageProps} />
      </div>
    </AuthProvider>)
}

export default MyApp
