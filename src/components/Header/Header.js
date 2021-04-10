import React from 'react';
import bannerImage from '../../resources/banner2.jpg'
import './Header.css'

const Header = ({ children, bannerImageForLeague, badgeImage }) => {
    let myStyle = { 
        backgroundImage: `url(${bannerImageForLeague ? bannerImageForLeague : bannerImage})`,
    };
    return (
        <div className='header d-flex justify-content-center align-items-end' style={myStyle}>
            <img className="rounded-circle border border-warning border-4 bg-light" src={badgeImage} alt=""/>
            {children}
        </div>
    );
};

export default Header;