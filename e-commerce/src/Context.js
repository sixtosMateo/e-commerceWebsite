import React, { Component } from 'react';

const ProductContext = React.createContext();
// when create createContext object comes with two Components
// Provider - provide all the information
// Consumer -


class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="Hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}



const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer};
