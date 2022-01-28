import React from 'react';
import logo from './images/logo.svg';
import style from './Header.module.css';


const Header = (props) => {

    return (
        <header className={style.header}>
            <div className={style.div}>
                <a href="#">
                    <img className='item' src={logo} alt={props.imgName} />
                </a>
            </div>
        </header>
    );
};

export default Header;
