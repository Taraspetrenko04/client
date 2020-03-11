import React, { Component } from 'react';
import './style.scss';
import NavbarItems from './NavbarItems/NavbarItems';
import NavbarSearch from './NavbarSearch/NavbarSearch';


export default class Navbar extends Component {
    render() {
        return(
            <div className='navbar'>
                <NavbarItems />
                <NavbarSearch />
            </div>
        )
    }
}