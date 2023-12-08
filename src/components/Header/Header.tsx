import React from 'react';
import bannerImg from './logo.png';
import './Header';
//import styles from './Header.modules.css';

const styles = require('./Header.modules.css');

const Header = () => {
return (   
    <div className ='root'>
        <div className ='header'>
            <div className ='headerRow'>
                <div className='logo'>
                    <img className='shyLogoImg' src={bannerImg}/>
                    <a className='logoWrapper' data-navigationcomponent='SiteHeader'> Teste Ímpar
                </a>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Header;