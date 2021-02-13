import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class NewKegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleView: 0,
      masterKegList: [],
      selectedKeg: null
    };
  }

}