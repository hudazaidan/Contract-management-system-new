

import React from "react";
import '../../../components/style/pricing.css';

const Pricing = () => {
    return (
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

                        <button className="register__btn">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Pricing 