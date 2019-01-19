import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();
// when create createContext object comes with two Components
// Provider - provide all the information
// Consumer -


class ProductProvider extends Component {
  state={
    products: [],
    // not destructuring because we are not changing the values here
    detailProduct: detailProduct,
    cart:[]
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
    });
  }

  getItem =(id)=>{
    const product =this.state.products.find(item=>item.id===id);
    return product;
  }

  handleDetail=(id)=>{
    const product = this.getItem(id);
    this.setState(()=>{
      return {detailProduct:product}
    })

  }

  addToCart =(id)=>{
    // dont what to use the find method because if change the values in cart Link
    // we can change it in our product link as well
    const tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true;
    product.count =1;
    const price = product.price;
    product.total = price;
    this.setState(()=>{
      return { products:tempProducts, cart:[...this.state.cart, product] }
    }, ()=>{
      console.log(this.state);
    });
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
