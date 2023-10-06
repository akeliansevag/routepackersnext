import { FC, ReactNode, Suspense } from 'react'
import { Header } from '../components/Navigation'
import './globals.css'
import { Rubik } from 'next/font/google'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Loading from './loading'
import Head from 'next/head'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'RoutePackers',
  description: 'RoutePackers Website',
}

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className='font-display'>
      <body className={rubik.className}>
        {/* <div className="bg-yellow-600 px-4 py-3 text-black">
          <p className="text-center text-lg font-medium">
          💶 Get $25 discount untill july 5 💶 <a href={'tel: +17144223193'} className="inline-block underline">Call us now!</a>
          </p>
        </div> */}
        <Head>
          <link
            rel="canonical"
            href="https://routepackers.com"
            key="canonical"
          />
        </Head>
        <Header />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GTYS7H5C8V"
          strategy="afterInteractive"
        />
        <Script
          async
          defer
          id='hs-script-loader'
          src="//js-na1.hs-scripts.com/42024830.js"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-GTYS7H5C8V');
        `}
        </Script>
        <Script id='trustpilot'>
          {`
            (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
            a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
            f.parentNode.insertBefore(a,f)})(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
            tp('register', 'fml1J2RikKxnWUEG'); `}
        </Script>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout