
import  "../style/header.css" ;
import React, { useRef } from 'react';


 

const Header = () => {


    return ( 
    <header className="header">
        <div className="container_header">
            <div className="nav__wrapper">
                <div className="logo">
                    <div className="logo__img">
                        <img src="" alt="" />
                        </div>
                    <h2>FitBody</h2>
                </div>

                {/* navigation menu */}

                <div className="navigation">
                    <ul className="menu">
                
                                <li><a href="/">Home</a></li>
                                <li><a href="">Contract</a></li>
                                <li><a href="/profile">Profile</a></li>
                                <li><a href="/profile">Login</a></li>
                        

                                
                                
                         
                        

                    </ul>

                </div>
              {/* nav right */}

              <div className="nav__right">
                <button className="register__btn"></button>
                <span className="mobile__menu">
                    <i class="ri-menu-line"></i></span>
              </div>

            </div>
        </div>
    </header>
    );
};

export default Header ;
