import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
    render(props) { 
        return (
        <div className="navbar bg-info">
            <h1 className="navbar-left mx-4 my-4">Shop to React</h1>
            <div className='navbar-right mx-4'>
            < FontAwesomeIcon icon={faShoppingCart} />
            <span>  {this.props.sum} Item(s)</span> 
            </div>
        </div>
        );
    }
}
 
export default Header;