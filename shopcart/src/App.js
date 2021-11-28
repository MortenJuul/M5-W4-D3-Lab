import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import CartItem from './components/cartitem';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        image: './products/cologne.jpg',
        desc: 'Unisex Cologne',
        rating: 3.5,
        value: 0
      },
      {
        id: 2,
        image: './products/iwatch.jpg',
        desc: 'Apple iWatch',
        rating: 1.2,
        value: 0
      },
      {
        id: 3,
        image: './products/mug.jpg',
        desc: 'Unique Mug',
        rating: 5.0,
        value: 0
      },
      {
        id: 4,
        image: './products/wallet.jpg',
        desc: 'Mens Wallet',
        rating: 4.7,
        value: 0
      },
    ]
  };

  handleQuantityChange = (quantity, id, operator = 0) => {
    
    let products = this.state.products
    products.filter(item => item.id === id)[0].value = parseInt(quantity) + parseInt(operator)
    this.setState({ products })
    console.log()
  };

  render (){
    return (
      <div className="App container">
        <Header sum={this.state.products.map((product) => parseInt(product.value)).reduce((acc, value) => acc + value)} />
        {this.state.products.map(prod =>
          <CartItem key={prod.id} id={prod.id} image={prod.image} title={prod.desc} rating={prod.rating} value={prod.value} handleQuantityChange={this.handleQuantityChange}/>
          )}
      </div>
    );
  }
}

export default App;
