import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../Context';
import ButtonContainer from './Button';
import {Link} from 'react-router-dom';



class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
         {(value)=>{
           const {modelOpen, closeModel} = value;
           const {img, title, price} =  value.modelProduct;

           if(!modelOpen){
             return null;
           }
           else{
             return(
               <ModelContainer>
               
               </ModelContainer>
             )

           }


         }}
      </ProductConsumer>
    );
  }
}

export default Modal;
