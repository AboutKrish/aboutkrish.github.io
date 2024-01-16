import React, { useState, useEffect } from 'react';
import ExpandOne from '../../../assets/Expand/One.png'
import ExpandTwo from '../../../assets/Expand/Two.png'
import ExpandThree from '../../../assets/Expand/Three.png'
import ExpandFour from '../../../assets/Expand/Four.png'
import ExpandFive from '../../../assets/Expand/Five.png'
import HeroImage from '../../../assets/hero.svg'
import { heroText } from '../content.js'

function Hero() {
    const [layout, setLayout] = useState(() => window.innerWidth / window.innerHeight > 1.75);
    const [navbarMargin, setNavbarMargin] = useState(() => window.innerHeight > 600 ? 'mt-[10svh]' : 'mt-[60px]')
    const [pageHeight, setPageHeight] = useState(() => window.innerHeight > 600 ? 'h-[90svh]' : 'h-[calc(100svh-60px)]')
    const [alternatingNumber, setAlternatingNumber] = useState(1)

    useEffect(() => {
        const handleResize = () => {
            setLayout(window.innerWidth / window.innerHeight > 1.75);
            setNavbarMargin(window.innerHeight > 600 ? 'mt-[10svh]' : 'mt-[60px]');
            setPageHeight(window.innerHeight > 600 ? 'h-[90svh]' : 'h-[calc(100svh-60px)]');
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const existingAlternatingItems = document.querySelectorAll('#alternating');
            existingAlternatingItems.forEach((item) => item.remove());

            const alternatingContainer = document.getElementById('alternatingContainer');
            const newAlternatingDiv = document.createElement('div');
            newAlternatingDiv.id = 'alternating';
            newAlternatingDiv.textContent = heroText[alternatingNumber].text;
            newAlternatingDiv.style.color = heroText[alternatingNumber].color;
            newAlternatingDiv.style.fontWeight = 500;
            if (alternatingNumber >= heroText.length-1) {
                setAlternatingNumber(0)
                console.log("hi")
            }
            else {
                setAlternatingNumber(alternatingNumber+1)
                console.log(alternatingNumber)
            }
            alternatingContainer.appendChild(newAlternatingDiv);
        }, 1750);

        return () => clearInterval(intervalId);
    }, [alternatingNumber, heroText]);

    return (
        <div className={`${navbarMargin} ${layout ? `${pageHeight}` : 'mb-10'} w-[100svw]`}>
            <div className='text-white relative w-[100svw] h-[100%] flex items-center'>
                <div className={`m-auto ${layout ? 'flex' : 'inline'} items-center`}>
                    <div className={`${layout ? 'mt-0' : 'mt-[15svh]'} flex items-center`}>
                        <div className={`m-auto ${layout ? 'text-[9svh]' : 'text-[8svw]'}`}>
                            <span className=''>For that one: ㅤ  ㅤ </span>
                            <br />
                            <div id='alternatingContainer' className={`m-auto ${layout ? 'text-[9svh]' : 'text-[8svw]'}`}>
                                <div id='alternating' styles={`color: ${heroText[0].color}, font-weight: 500`}>{heroText[0].text}</div>
                            </div>
                            <span>Idea</span>
                        </div>
                    </div>

                    <div className={`${layout ? 'ml-[-11svw] mt-0' : 'mt-[15vh]'} flex items-center`}>
                        <div className={`relative ${layout ? 'ml-[20svw] h-[35svh]' : 'h-[45svw] w-[76.8%] bg-black'}`}>
                            <img src={ExpandFive} className={"h-[100%] w-[100%] relative m-auto"}></img>
                            <img src={ExpandFour} className={"h-[100%] w-[100%] relative bottom-[35svh] m-auto"}></img>
                            <img src={ExpandThree} className={"h-[100%] w-[100%] relative bottom-[70svh m-auto]"}></img>
                            <img src={ExpandTwo} className={"h-[100%] w-[100%] relative bottom-[105svh] m-auto"}></img>
                            <img src={ExpandOne} className={"h-[100%] w-[100%] relative bottom-[140svh] m-auto"}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero