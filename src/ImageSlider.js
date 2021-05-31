import React, { useState }from 'react';
import { ImageData } from './ImageData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { ImForward2 } from 'react-icons/im';




const ImageSlider = ({ slides }) => {
    const [current, setcurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setcurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setcurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }




    return (

        <section>
            <div>
                <h2 className="heading">Sketches</h2>
            </div>
            <div className="container">

                <div className="bowl"></div>
                <div className="water">
                    <div className="body">
                        <div className="eye"></div>
                        <div className="fin-center"></div>
                        <div className="fin top"></div>
                        <div className="fin bottom"></div>
                        <div className="tail"></div>
                    </div>
                </div><span></span>

                <a href="https://www.facebook.com/profile.php?id=100001471122279" target="_blank" rel="noopener noreferrer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
        FACEBOOK
    </a>
                <a href="https://www.instagram.com/rakeshkumar_26/" target="_blank" rel="noopener noreferrer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
        INSTAGRAM
    </a>
                <a href="mailto:rakeshkumar2608.1997@gmail.com" target="_blank" rel="noopener noreferrer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
        E-MAIL
    </a>
            </div>
                
            
            
            <section className="slider">


                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {ImageData.map((slide, index) => {
                    return (

                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <img src={slide.image} className="image" alt='sketches' />
                            )}

                        </div>

                    )

                })}
            </section>
            <div>
                <p className="heading">R  A  K  E  S  H . K  U  M  A  R</p>
                <p className="contact">Contact : +91 9159162255</p>
            </div>
        </section>
    );

    
};
export default ImageSlider;