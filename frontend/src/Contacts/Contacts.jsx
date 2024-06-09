import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function contacts() {
  return (
    <>
    <div>
        <Navbar />
        <Contact />
        <hr className='text-slate-700'/>
        <Footer />
    </div>
    </>
  )
}

export default contacts
