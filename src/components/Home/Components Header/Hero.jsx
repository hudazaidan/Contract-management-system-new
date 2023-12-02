

import React, { useRef } from 'react';
/* import heroImg from '../Components Header/UI/img/avatar01.png';*/
 import Yoga from '../Components Header/UI/img/lunges.png';
 import Lunges from '../Components Header/UI/img/lunges.png';
 import  Extended from '../Components Header/UI/img/extended.png';
import dumbleIcon from '../Components Header/UI/img/dumble.png';
import '../style/hero.css';

 


const Hero = () => {
    return (
        <>
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
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                    </div>

                    
                </div>
            </div>
        </div>
    </section>


{/*Exersise */}


<section id="scedule">
        <div className="container exercise__container">
            <div className="exercise__top">
                <h2 className="section__title">
                    Benifits of <span className="highlights">Exercices</span>
                    </h2>
                    <p>Exercise offers numerous benefits, including improved physical health and mental  <br />
                    well-being,boosting energy levels, and enhancing overall mood and cognition.
                     </p>
            </div>

            {/* exercises list */}
            <div className="exercises__wrapper">
                 <div className="exercise__item">
                    <span className="exercise__icon">
                        <img src={Yoga} alt="" />
                        </span>

                        <div className="exercise__content">
                            <h4>Incresed flexibility</h4>
                            <p>improved physical health and mental 
                                well-being,boosting energy levels.
                                 </p>
                        </div>
                 </div>


                 <div className="exercise__item">
                    <span className="exercise__icon">
                        <img src={Lunges} alt="" />
                        </span>

                        <div className="exercise__content">
                            <h4>Healthy life</h4>
                            <p>improved physical health and mental 
                                well-being,boosting energy levels.
                                 </p>
                        </div>
                 </div>


                 <div className="exercise__item">
                    <span className="exercise__icon">
                        <img src={Extended} alt="" />
                        </span>

                        <div className="exercise__content">
                            <h4>Reducing blood pressure</h4>
                            <p>improved physical health and mental 
                                well-being,boosting energy levels.
                                 </p>
                        </div>
                 </div>

            </div>
        </div>
    </section>

    {/* /*Princing page  */ }
    <section id="pricing-plan">
        <div className="container">
            <div className="pricing__top">
              <h2 className="section__title">Gym <span
               className="highlights">Pricing</span> Plan</h2>
               <p>Gym pricing plans vary, typically ranging from monthly memberships to annual  <br /> 
               subscriptions, with costs influenced by amenities, location, and additional services. 
               </p>
            </div>

            {/*pricing wrapper */}
            <div className="pricing__wrapper">
                <div className="pricing__item">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Regular Member</h2>
                        <h2 className="pricing section__title">$50<span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span>*</span> Unlimited access to the gym </li>
                            <li><span>*</span> Customer support</li>
                            <li><span>*</span> Personal trainer</li>
                            <li><span>*</span> Standered options</li>
                            <li><span>*</span> 5 classes per week</li>
                        </ul>

                        <button className="register__btn">Join Now</button>
                    </div>
                </div>





                <div className="pricing__item pricing__item-02">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Premium Member</h2>
                        <h2 className="pricing section__title">$70<span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span>*</span> Unlimited access to the gym </li>
                            <li><span>*</span> Customer support</li>
                            <li><span>*</span> Personal trainer</li>
                            <li><span>*</span> Standered options</li>
                            <li><span>*</span> 5 classes per week</li>
                        </ul>

                        <button className="register__btn">Join Now</button>
                    </div>
                </div>


                <div className="pricing__item">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Standered Member</h2>
                        <h2 className="pricing section__title">$100<span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span>*</span> Unlimited access to the gym </li>
                            <li><span>*</span> Customer support</li>
                            <li><span>*</span> Personal trainer</li>
                            <li><span>*</span> Standered options</li>
                            <li><span>*</span> 5 classes per week</li>
                        </ul>

                       <button className="register__btn"><a href="/form"> Join now</a></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
);
};

export default Hero