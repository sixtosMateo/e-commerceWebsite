import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context';
import {storeProducts} from '../data';
class ProductList extends Component {
  state={
    products: storeProducts
  }

  render() {
    console.log(this.state.products)
    return (
      <div>

        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="Products"/>
              <div className="row">
                <ProductConsumer>
                  {(msg)=>{
                    return <h1>{msg}</h1>
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default ProductList;
