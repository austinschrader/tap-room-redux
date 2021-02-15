import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props;
  let restockMessage;

  if (keg.quantity > 0) {
    restockMessage = keg.quantity;
  } else {
    restockMessage = 'Sorry, this keg is empty!';
  }

  return (
    <>
      <h2>Keg Information Page</h2>
      <h4>{keg.name}</h4>
      <h4>{keg.brand}</h4>
      <h4>{keg.price}</h4>
      <h4>{keg.alcoholContent}</h4>
      <h4>{keg.quantity}</h4>
      <h4>{keg.id}</h4>
      <button type='button' onClick={props.onRestock}>
        Restock
      </button>
      <button hidden={keg.quantity === 0} type='button' onClick={props.onBuy}>
        Buy a Bottle
      </button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onRestock: PropTypes.func,
  onBuy: PropTypes.func,
};

export default KegDetail;
