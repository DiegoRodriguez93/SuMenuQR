import Head from 'next/head'
import Header from './components/Header'

import Banner from './Banner'
import About from './About'
import Features from './Features'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  return (
      <>
    <div className="banner">
      <Head>
        <title>SuMenuQr.net</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
      </Head>

      <Header/>

      <banner>
        <Banner/>
      </banner>
    </div>

    <About/>
    <Features/>
    <Menu/>
    <Contact/>
    <Footer/>
    </>
  
  )
}
