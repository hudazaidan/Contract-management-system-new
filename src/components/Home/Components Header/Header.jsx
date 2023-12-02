
import  "../style/header.css" ;
import React, { useRef } from 'react';


const nav__links = [
    {
        path:'#',
        display: "Home"
    },
    {
        path:'#schedule',
        display: "Schedule"
    },
    {
        path:'#',
        display: "Classes"
    },
    {
        path:'#pricing',
        display: "Pricing"
    },

];

const Header = () => {


    return ( 
    <header className="header">
        <div className="container">
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
                        {
                            nav__links.map(item=>(
                                <li className="nav__item"><a href={item.path}>
                                    {item.display}</a></li>
                                
                                ))
                        }

                    </ul>

                </div>
              {/* nav right */}

              <div className="nav__right">
                <button className="register__btn">Login</button>
                <span className="mobile__menu">
                    <i class="ri-menu-line"></i></span>
              </div>

            </div>
        </div>
    </header>
    );
};

export default Header ;
