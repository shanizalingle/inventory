import React from "react";
import PropTypes from "prop-types";

function ReusableSurfboardForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Surfboard Name' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='number'
          name='quantity'
          placeholder='# of surfboards in stock' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableSurfboardForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableSurfboardForm;