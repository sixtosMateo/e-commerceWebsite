import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context';

class ProductList extends Component {
  state={
    products: []
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
                  {(product)=>{
                    return product.products.map(product=>{
                      return <Product key={product.id} product={product}/>
                    })
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
