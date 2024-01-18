import './Header.css'

const Header = () => {
    return (
        <div className='Navbar'>
            <div className="logoDiv">
                <h2 className='logo'>Yago</h2>
            </div>

            <div className="menu">
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


        </div>
    )
}

export default Header