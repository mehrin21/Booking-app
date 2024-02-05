import React from 'react'
import Hearder from '../components/Header/Hearder'
import Hero from '../components/hero/Hero'
import Companies from '../components/campanies/Companies'
import Residencies from '../components/Residencies/Residencies'
import Value from '../components/value/Value'
import Contact from '../components/contact/Contact'
import GetStart from '../components/getStarted/GetStart'
import Footer from '../components/Footer/Footer'

const WedSite = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        {/* <Hearder /> */}
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact/>
      <GetStart />
      {/* <Footer/> */}
    </div>
  )
}

export default WedSite
