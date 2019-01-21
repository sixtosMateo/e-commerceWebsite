import React, { Component } from 'react';
import CartItem from "./CartItem";


// can user another consumer but this example is to deal with  props
class CartList extends Component {

  render() {
    const {cart} = this.props.value;

     return (
      <div className="container-fluid">
        {cart.map(item=>{
          return <CartItem key={item.id} item={item} value={this.props.value}/>
        })}
      </div>
    );
  }
}

export default CartList;
