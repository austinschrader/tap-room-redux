import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class ComponentViewControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayView: 0,
      masterKegList: [],
      selectedKeg: null
    };
  }

  kegClick = () => {

  }

  render() {
    
  }
}

expot default ComponentViewControl;