import React, { Component } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faList, faSearch } from '@fortawesome/free-solid-svg-icons';


export default class NavbarSearch extends Component{
    // loupe = <FontAwesomeIcon icon={ faFilter }/>
    render() {
        return(
            <div className='navbar-search'>
                <form>
                    <input className='navbar-input' type="text" placeholder='Search dishes' />
                </form>
                <div className='navbar-icon' ><FontAwesomeIcon icon={ faFilter }/></div>
                <div className='navbar-icon' ><FontAwesomeIcon icon={ faList }/></div>
            </div>
        )
    }
}