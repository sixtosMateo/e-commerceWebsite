import React, { Component } from 'react';

export default function CartItem({item, value}){
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;

  return(
    <div className="row mt-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{width:'5rem', height:"5rem"}} className="img-fluid" alt="image item"/>
      </div>

    </div>
  )
}
