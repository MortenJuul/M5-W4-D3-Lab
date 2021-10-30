import React, { Component } from 'react';

function CartItem(props) {
        return (
        <div className='border px-4 py-2'>
            <p className='d-flex'>{ props.title }</p>
            <img src={props.image} alt={props.title} className='col-md-2 d-inline-flex' />
            <input type="number" value={props.value} onChange={(event) => props.handleQuantityChange(event.target.value, props.id)} className='col-md-1 mx-4'></input>
            <span className="">quantity</span>
        </div>
        );
}
 
export default CartItem;