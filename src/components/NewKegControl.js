import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class NewKegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleView: 0,
      masterKegList: [],
      selectedKeg: null,
    };
  }

  listClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        visibleView: 1,
      });
    } else {
      this.setState({
        visibleView: 1,
      });
    }
  };

  newKegClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        visibleView: 2,
      });
    } else {
      this.setState({
        visibleView: 2,
      });
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
      buttonText = 'Return to Keg List';
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} />;
      buttonText = 'Add Keg';
    }
    return (
      <>
        <button onClick={this.listClick}>Keg List</button>
        <button onClick={this.newKegClick}>Add new Keg</button>
        {currentlyVisibleState}
      </>
    );
  }
}

export default NewKegControl;
