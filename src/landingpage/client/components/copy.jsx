import React, { useState, useEffect } from 'react';
import HeroImage from '../../../assets/hero.svg'
import { heroText } from '../content.js'

const isGreaterThan60px = window.innerHeight > 600;
const navbarMargin = isGreaterThan60px ? 'mt-[10svh]' : 'mt-[60px]';
const pageHeight = isGreaterThan60px ? 'h-[90svh]' : 'h-[calc(100vh - 60px)]'

function Hero() {
    return (
        <div className='bg-primary'>
            hi
            <br/>
            hi
            <br/>
            hi
            <br/>
            hi
            <br/>
            hi
            <br/>
            hi
            <br/>
        </div>
    )
}

export default Hero