import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  let quantity = props.quantity;

  if (quantity <= 0) {
    return (
      <>
        <div onClick={() => props.whenKegClicked(props.id)}>
          <img src="{props.image}" alt="Keg" width="150"/>
          <h4> {props.name} </h4> 
          <h4> {props.brand} </h4>
          <h4> {props.price} </h4> 
          <h4> {props.alcoholContent} </h4>
          <h4> {props.stock} </h4> 
          <h4> {props.id} </h4>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div onClick ={() => props.whenKegClicked(props.id)}>
        <img src="{props.image}" alt="Keg" width="150"/>
          <h4> {props.name} </h4> 
          <h4> {props.brand} </h4>
          <h4> {props.price} </h4> 
          <h4> {props.alcoholContent} </h4>
          <h4> {props.stock} </h4> 
          <h4> {props.id} </h4>
        </div>
      </>
    )
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  id: PropTypes.string,
};

export default Keg;
