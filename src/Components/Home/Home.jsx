
import './Home.css'

// Import Images 

import mainImage from '../../assets/girl2.png'

import aeroplane from '../../assets/plane6.png'

// Import Icons
import { FaPlay } from "react-icons/fa";

const Home = () => {
    return (
        <div className='Home container section'>
            <div className="textDiv grid">
                <span className='redText'>
                    Best Destinations around the world
                </span>
                <h2>Travel, enjoy and live a new and full life</h2>
                <p>
                    Build Wicket longer admire do barton vanity itself do in it.
                    Preferrend to sportsmen it engrossed listening. Park gate sell
                    they went hard for the season.
                </p>
                <div className="buttons flex">
                    <button className="btn">
                        Find More
                    </button>
                    <div className="playBtn flex">
                        <FaPlay className='icon' />
                        <span>Play Demo</span>
                    </div>
                </div>
            </div>

            <div className="imgDiv flex">
                <img src={mainImage} alt="mainImage" />
            </div>
            <img src={aeroplane} alt="aeroplane Image" className='aeroplane' />
        </div>
    )
}

export default Home