import { useState } from 'react'
import Logo from '../../../../public/favicon.svg'
import Hamburger from '../../../assets/hamburger.svg'
import { navigationItems } from '../content.js'

function Navbar() {
    const [toggle, setToggle] = useState(false)

    const toggleMenu = () => {
        setToggle(!toggle);
    };

    const isGreaterThan65px = window.innerHeight > 65;
    const navbarhHeight = isGreaterThan65px ? 'mt-[13svh] ml-5' : 'mt-[65px] ml-5';

    const homePageRedirect = () => {
        window.location.href = '/';
    };

    return (
        <div className={`text-white`}>
            <div id='background' className={`gradient-glass shadow w-[100svw] h-[10svh] fixed top-0 right-0 min-h-[60px] flex items-center`}>
                <img src={Logo} alt="Logo" onClick={homePageRedirect} className='glow ml-5 h-[50%]' />
                <div className="ml-auto items-center hidden sm:flex">
                    {navigationItems.map((item) => (
                        <a href={item.link} className="mr-5 text-white">
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className='sm:hidden'>
                <div className={`h-[10svh] fixed top-0 right-0 min-h-[60px] flex items-center z-50`}>
                    <div className='ml-auto items-center flex sm:hidden h-[80%]'>
                        <img src={Hamburger} alt="Menu Links" className='h-[40%] mr-5' onClick={toggleMenu} />
                    </div>
                </div>

                <div className={`${!toggle ? 'hidden' : 'flex'} fixed top-0 right-0 w-[60vw] min-w-[275px] h-[100vh] gradient-glass-strong`}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        {navigationItems.map((item, index) => (
                            <div key={item.link} className={navbarhHeight}>
                                <a href={item.link} className="text-white relative text-xl">
                                    {item.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar