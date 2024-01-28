import './Categories.css'

// Import Images 
import satelight from '../../assets/antena.png'
import aeroplane from '../../assets/plane6.png'
import microphone from '../../assets/micro4.png'
import settings from '../../assets/settings.png'


import rec from '../../assets/rec2.png'

// Import Icons



const Categories = () => {
    return (
        <div className='Categories container section'>
            <div className="secHeader">
                <span>
                    Category
                </span>
                <h2>
                    We Offer best services
                </h2>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={satelight} alt="" className='mainImage' />
                        <img src={rec} alt="" className='design' />
                    </div>
                    <span>
                        Calculated Weather
                    </span>

                    <p>
                        Built Wicket longer admire do barton vanity itself do in it.
                    </p>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={aeroplane} alt="" className='mainImage' style={{ width: 90 }} />
                        <img src={rec} alt="" className='design' />
                    </div>
                    <span>
                        Best Flights
                    </span>

                    <p>
                        Built Wicket longer admire do barton vanity itself do in it.
                    </p>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={microphone} alt="" className='mainImage' />
                        <img src={rec} alt="" className='design' />
                    </div>
                    <span>
                        Calculated Weather
                    </span>

                    <p>
                        Built Wicket longer admire do barton vanity itself do in it.
                    </p>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={settings} alt="" className='mainImage' />
                        <img src={rec} alt="" className='design' />
                    </div>
                    <span>
                        Calculated Weather
                    </span>

                    <p>
                        Built Wicket longer admire do barton vanity itself do in it.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Categories