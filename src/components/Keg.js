import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  let stock = props.stock;

    <>
      return (
        <div onClick = {() => props.kegClicked(props.id)}>
          <h4>{props.name}</h4>
          <h4>{props.brand}</h4>
          <h4>{props.price}</h4>
          <h4>{props.alcoholContent}</h4>
          <h4>{props.stock}</h4>
          <h4>{props.id}</h4>
        </div>
      )
    </>
}


Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  id: PropTypes.string
};