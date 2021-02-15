import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
}

return (
  <>
    <h2>Keg Information Page</h2>
    <h4>{keg.name}</h4>
    <h4>{keg.brand}</h4>
    <h4>{keg.price}</h4>
    <h4>{keg.alcoholContent}</h4>
    <h4>{keg.stock}</h4>
    <h4>{keg.id}</h4>
  </>
)

KegDetail.propTypes = {
  keg: PropTypes.object,
  onRestock: PropTypes.func,
  onBuy: PropTypes.func
};

export default KegDetail;