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
    cart: [],
    modelOpen: false,
    modelProduct: detailProduct,
    cartSubtotal:0,
    cartTax:0,
    cartTotal:0
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
      // this is a callback method that iterates/map through cart and change the subtotal, tax, total
      this.addTotal()
    });
  }

  openModel=(id)=>{
    const product = this.getItem(id);
    this.setState(()=>{
      return { modelProduct:product, modelOpen:true}
    })
  }

  closeModel=()=>{
    this.setState(()=>{
      return {modelOpen:false}
    })
  }

  // increment and decrement can be one method and check the status of button
  // two functions is bad programming practice
  increment=(id)=>{
    let tempCart = [...this.state.cart]
    const selectedItem = tempCart.find(item=>item.id===id);

    const index = tempCart.indexOf(selectedItem)

    const item  = tempCart[index]

    item.count = item.count + 1
    item.total = item.count * item.price

    this.setState(()=>{
      return {cart:[...tempCart]}},

      ()=>{this.addTotal()})

  }

  decrement=(id)=>{
    let tempCart = [...this.state.cart]
    const selectedItem = tempCart.find(item=>item.id===id);

    const index = tempCart.indexOf(selectedItem)

    const item  = tempCart[index]

    item.count = item.count-1;

    if(item.count ==0){
      this.removeItem(id)
    }
    else{
      item.total = item.count * item.price

      this.setState(()=>{
        return {cart:[...tempCart]}},
        ()=>{this.addTotal()})
    }


  }

  removeItem = id =>{
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id)
    // looking for indexOf id item
    const index =  tempProducts.indexOf(this.getItem(id))
    // remove item based on the index
    let removedItem = tempProducts[index]

    // this the overall products and setting the values to defaut
    removedItem.inCart = false
    removedItem.count = 0
    removedItem.total = 0

    this.setState(()=>{
      return {
        cart:[...tempCart],
        product:[...tempProducts]
      }
    },()=> {this.addTotal()}
  )
  }

  clearCart=()=>{
    this.setState(()=>{
      return {cart:[]}
    },()=>{
      //callback function
      // new originalfresh copy of all the items rather than referencing
      // all the modify object are set to default
      this.setProducts();
      this.addTotal();
    });
  }

  addTotal=()=>{
    let subTotal = 0
    this.state.cart.map(item=>(subTotal += item.total));
    const tempTax = subTotal * .0975;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(()=>{
      return{
      cartSubtotal:subTotal,
      cartTax:tax,
      cartTotal:total
    }
    })

  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        closeModel:this.closeModel,
        openModel:this.openModel,
        increment:this.increment,
        decrement:this.decrement,
        removeItem:this.removeItem,
        clearCart:this.clearCart

      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}



const ProductConsumer = ProductContext.Consumer;


export {ProductProvider, ProductConsumer};
