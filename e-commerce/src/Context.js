import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();
// when create createContext object comes with two Components
// Provider - provide all the information
// Consumer -


class ProductProvider extends Component {
  state={
    products: [],
    detailProduct: detailProduct
  }

  componentDidMount(){
    this.setProducts();
  }

  setProducts=()=>{

    // we are copying the values not referencing storeProducts
    // getting a new set of values rather than copying them
    let products =[];

    storeProducts.forEach(item=>{
      const singleItem = {...item}
      products = [...products, singleItem]
    })

    this.setState(()=>{
      return {products}
    })
  }


  handleDetail=()=>{
    console.log("hello from detail")

  }

  addToCart =()=>{
    console.log("hello from cart")
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart

      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}



const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer};
