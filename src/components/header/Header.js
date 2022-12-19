import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <i class="fa-solid fa-arrow-left"></i>
            <div className='text-box'>
                <h4> Add new thing</h4>
                <span>
                <i class="fa-solid fa-pen"></i>
                </span>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    );
};

export default Header;