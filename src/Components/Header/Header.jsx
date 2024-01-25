import { useState } from 'react';

import './Header.css'

// Import icons
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";



const Header = () => {
    // Code statement to toggle the navbar in and out
    const [active, setActive] = useState('menu');
    const showNavbar = () => {
        setActive('menu showMenu');
    }

    // Remove navbar 
    const removeShowNavbar = () => {
        setActive('menu');
    }

    // Code statement to add Background color to the menu at a certain heigh scrolling down
    const [transparent, setTransparent] = useState('Navbar');
    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent('Navbar activeHeader')
        } else {
            setTransparent('Navbar')
        }
    }
    window.addEventListener('scroll', addBg)


    return (
        <div className={transparent}>
            <div className="logoDiv">
                <h1 className='logo'>Yago</h1>
            </div>

            <div className={active}>
                <div className="lists flex">
                    <li>
                        <a href="#">Destination</a>
                    </li>

                    <li>
                        <a href="#">Hotels</a>
                    </li>

                    <li>
                        <a href="#">Flights</a>
                    </li>

                    <li>
                        <a href="#">Booking</a>
                    </li>
                </div>


                <div className="btns flex">
                    <button className='btn'>Login</button>
                    <button className='btn'>SingUp</button>
                    <select className='lang'>
                        <option value="">EN</option>
                        <option value="">FR</option>
                        <option value="">SP</option>
                    </select>
                </div>

                <div className="closeIcon" >
                    <AiFillCloseCircle className='icon' onClick={removeShowNavbar} />
                </div>
            </div>

            <div className="toggleIcon" onClick={showNavbar}>
                <TbGridDots className='icon' />
            </div>

        </div>
    )
}

export default Header