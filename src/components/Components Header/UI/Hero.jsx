

import React  from "react";
import heroImg from '../../../assets/img/gym-02.png'
import dumbleIcon from '../../../assets/img/dumble.png'
import "../../style/hero.css" ;


const Hero = () => {
    return (
    <section>
        <div className="container">
            <div className="hero__wrapper">

                {/*hero content */}
                <div className="hero__content">
                    <h2 className="section__title">Exercise is the key to a 
                        <span className="highlights"> healthy </span> lifestyle
                        </h2>
                    <p>Explore our comprehensive gym , offering tailored fitness programs and state-of-the-art <br /> equipment.
                     Designed to elevate your wellness journey to new heights.</p>

                     <div className="hero__btns">
                <button className="register__btn">Register Now</button>
                    <button className="watch__btn">
                        <span>
                           <i class="fa-solid fa-play"></i>
                            </span>
                            Watch Video
                            </button>
                    </div>  
                </div>
                
                 {/*hero img */}
                <div className="hero__img">
                    <div className="hero__img-wrapper">

                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box__img">
                                        <img src={heroImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
);
};

export default Hero