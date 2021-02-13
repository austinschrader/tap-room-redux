import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return ( 
    <>
      <hr/>
    </>
  )
}

KegList.propsTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList;