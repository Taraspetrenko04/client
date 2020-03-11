import React, { Component } from 'react';
import './style.scss';
import logo from '../../img/Logo@1X.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// Ask about images

export default class HeaderPannel extends Component {
    render() {
        return(
            <div className='header-pannel'>
                <img src={ logo } alt='logo' className='header-logo'></img>
                <div className='cart-wrapper'>
                    <div className='cart-img'><FontAwesomeIcon icon={ faShoppingCart}/></div>
                    <div className='hello-user'>Hi Amigo</div>
                </div>
            </div>
        )
    }
}