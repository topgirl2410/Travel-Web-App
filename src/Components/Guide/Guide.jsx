
import './Guide.css'

// Import icon
import icon1 from '../../assets/pensar.png'
import icon2 from '../../assets/coche.svg'
import icon3 from '../../assets/tarjeta.png'
import image from '../../assets/viaje.jpg'


const Guide = () => {
    return (
        <div className='Guide container section'>
            <div className="secContainer flex">
                <div className="textDiv grid">

                    <div className="secHeader">
                        <span>Easy and Fast</span>
                        <h2>Book Your Next Trip</h2>
                    </div>

                    <div className="secContent grid">
                        <div className="singleSection flex">
                            <img src={icon1} alt="" />
                            <div className="text">
                                <span>Make a Choice</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="singleSection flex">
                            <img src={icon3} alt="" />
                            <div className="text">
                                <span>Make Payment</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="singleSection flex">
                            <img src={icon2} alt="" />
                            <div className="text">
                                <span>Reach Airport on Select Date</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="imgDiv">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Guide