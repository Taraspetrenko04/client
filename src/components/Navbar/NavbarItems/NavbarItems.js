import React, { Component } from 'react';
import './style.scss'


export default class NavbarItems extends Component {
    render() {
        return(
            <div className='navbar-items'>
                <ul className='navbar-list'>
                    <li>Breakfast</li>
                    <li>Snacks</li>
                    <li>Combos</li>
                    <li>Meal</li>
                    <li>Desserts</li>
                </ul>
            </div>
        )
    }
}