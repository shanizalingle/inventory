import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableSurfboardForm from "./ReusableSurfboardForm";

function NewSurfboard(props){

  function handleNewSurfboardSubmission(event) {
    event.preventDefault();
    props.onNewSurfboardCreation({
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <ReusableSurfboardForm
        formSubmissionHandler={handleNewSurfboardSubmission}
        buttonText="Add New Surfboard" />
    </React.Fragment>
  );
}

NewSurfboard.propTypes = {
  onNewSurfboard: PropTypes.func
};

export default NewSurfboard;