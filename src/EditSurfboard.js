import React from "react";
import ReusableSurfboardForm from "./ReusableSurfboardForm";
import PropTypes from "prop-types";

function EditSurfboard (props) {
  const { surfboard } = props;

  function handleEditSurfboardSubmission(event) {
    event.preventDefault();
    props.onEditSurfboard({name: event.target.name.value, price: event.target.price.value, quantity: event.target.quantity.value, id: surfboard.id})
  }

  return (
    <React.Fragment>
      <ReusableSurfboardForm 
        formSubmissionHandler = {handleEditSurfboardSubmission}
        buttonText="Update Surfboard" />
    </React.Fragment>
  );
}

EditSurfboard.propTypes = {
  surfboard: PropTypes.object,
  onEditSurfboard: PropTypes.func
};

export default EditSurfboard;