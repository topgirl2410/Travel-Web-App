
import './Destinations.css'

// Import Icon
import { FaLocationArrow } from "react-icons/fa";

// Import Images 
import imageOne from '../../assets/roma.jpg'

const Destinations = () => {
    return (
        <div className='Destinations container section'>
            <div className="secHeader">
                <span>Top Selling</span>
                <h2>Top Destinations</h2>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={imageOne} alt="destination one" />
                    </div>

                    <div className="infoDiv">
                        <div className="upperSpan flex">
                            <span className='location'>Rome, Italy</span>
                            <span className='amount'>1500€</span>
                        </div>
                        <div className="lowerSpan flex">
                            <FaLocationArrow className='icon' />

                            <span className="distance">
                                10 Days Trip
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations