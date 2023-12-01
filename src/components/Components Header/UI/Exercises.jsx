


import React from "react";

import '../../style/exercises.css';
import Lunges from '../../../assets/img/lunges.png';
import Yoga from '../../../assets/img/yoga-pose.png';
import Extended from '../../../assets/img/extended.png';

const Exercises = () => {
    return (
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
    );
};

export default Exercises