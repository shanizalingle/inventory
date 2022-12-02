import React from "react";
import PropTypes from "prop-types";

function Surfboard(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSurfboardClicked(props.id)}>
        <h3>{props.name} - ${props.price}</h3>
        <h5>{props.quantity}</h5>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Surfboard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenSurfboardClicked: PropTypes.func 
};

export default Surfboard;