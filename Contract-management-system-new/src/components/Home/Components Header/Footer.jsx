

import React, { useRef } from 'react';
import '../style/footer.css';
import Logo from '../Components Header/UI/img/lunges.png';


const Footer = () => {

    const year = new Date().getFullYear

    return <footer className="footer">
        <div className="container_footer">
            <div className="footer__wrapper">
                <div className="footer__box">
                <div className="logo">
                    <div className="logo__img">
                        <img src={Logo} alt="" />
                        </div>
                    <h2>FitBody</h2>
                </div>
                <p>Exercise offers numerous benefits, including 
                    well-being and enhancing overall mood and cognition.
                    </p>
                </div>

                <div className="footer__box">
                    <h4 className="footer__title">Company</h4>

                    <ul className="footer__links">
                        <li><a href="#">Our program</a></li>
                        <li><a href="#">Our plan</a></li>
                        <li><a href="#">Become a member</a></li>
                      
                    </ul>
                </div>

                <div className="footer__box">
                    <h4 className="footer__title">Quick Links</h4>

                    <ul className="footer__links">
                        <li><a href="#">About us </a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                      
                    </ul>
                </div>

                <div className="footer__box">
                    <h4 className="footer__title">Company</h4>

                    <ul className="footer__links">
                        <li><a href="#">Our program</a></li>
                        <li><a href="#">Our plan</a></li>
                        <li><a href="#">Become a member</a></li>
                      
                    </ul>
                </div>

            </div>

            <p className="copyright">Copyright - {year} developed by our team. All rights reserved.</p>
        </div>
    </footer>
    
};

export default Footer