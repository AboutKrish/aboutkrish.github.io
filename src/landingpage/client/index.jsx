import { Navbar, Hero, Copy } from './components/index.js'
import React from 'react';
import './client.css'

const landingPage = () => {
  return (
    <div>
      <Hero />
      <Copy />
      <Navbar />
    </div>
  )
}

export default landingPage