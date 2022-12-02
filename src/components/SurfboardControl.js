import React from "react";
import NewSurfboard from "./NewSurfboard";
import SurfboardList from "./SurfboardList";
import SurfboardDetail from "./SurfboardDetail";
import EditSurfboard from './EditSurfboard';

class SurfboardControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSurfboardList: [],
      selectedSurfboard: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedSurfboard != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSurfboard: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewSurfboardToList = (newSurfboard) => {
    const newMainSurfboardList = this.state.mainSurfboardList.concat(newSurfboard);
    this.setState({mainSurfboardList: newMainSurfboardList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedSurfboard = (id) => {
    const selectedSurfboard = this.state.mainSurfboardList.filter(surfboard => surfboard.id === id)[0];
    this.setState({selectedSurfboard: selectedSurfboard});
  }

  handleDeletingSurfboard = (id) => {
    const newMainSurfboardList = this.state.mainSurfboardList.filter(surfboard => surfboard.id !== id);
    this.setState({
      mainSurfboardList: newMainSurfboardList,
      selectedSurfboard: null
    });
  }

  handleSellingSurfboard = (id) => {
    const surfboardToEdit = this.state.mainSurfboardList.filter(surfboard => surfboard.id === id)[0];
    if (surfboardToEdit.quantity === 1){
      surfboardToEdit.quantity = "Out Of Stock";
    } else {
      surfboardToEdit.quantity = surfboardToEdit.quantity-1;
    }
    const editedMainSurfboardList = this.state.mainSurfboardList
      .filter(surfboard => surfboard.id !== this.state.selectedSurfboard.id)
      .concat(surfboardToEdit);
    this.setState({
      mainSurfboardList: editedMainSurfboardList
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingSurfboardInList = (surfboardToEdit) => {
    const editedMainSurfboardList = this.state.mainSurfboardList
      .filter(surfboard => surfboard.id !== this.state.selectedSurfboard.id)
      .concat(surfboardToEdit);
    this.setState({
        mainSurfboardList: editedMainSurfboardList,
        editing: false,
        selectedSurfboard: null
      });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = 
      <EditSurfboard
        surfboard = {this.state.selectedSurfboard} 
        onEditSurfboard = {this.handleEditingSurfboardInList}/>
      buttonText = "Return to Surfboard List";
    } else if (this.state.selectedSurfboard != null) {
      currentlyVisibleState = 
      <SurfboardDetail 
        surfboard = {this.state.selectedSurfboard} 
        onClickingDelete = {this.handleDeletingSurfboard} 
        onClickingEdit = {this.handleEditClick}
        onClickingSell = {this.handleSellingSurfboard} />
      buttonText="Return to Surfboard List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewSurfboard 
        onNewSurfboardCreation={this.handleAddingNewSurfboardToList} />
      buttonText= "Return to Surfboard List";
    } else {
      currentlyVisibleState = 
      <SurfboardList 
        surfboardList = {this.state.mainSurfboardList} 
        onSurfboardSelection = {this.handleChangingSelectedSurfboard}
        onSoldSurfboard = {this.handleSellingSurfboard} />
      buttonText= 'Add Surfboard';
    }
    return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  }
}

export default SurfboardControl;