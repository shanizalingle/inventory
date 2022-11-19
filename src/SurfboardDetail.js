import React from "react";
import PropTypes from "prop-types";

function SurfboardDetail(props){
  const { surfboard, onClickingDelete, onClickingSell } = props;

  return (
    <React.Fragment>
      <h1>Surfboard Detail</h1>
      <h5>{surfboard.name} - {surfboard.price}</h5>
      <p>{surfboard.quantity}</p>
      <button onClick={ props.onClickingEdit }>Update Surfboard</button> 
      <button onClick={()=> onClickingDelete(surfboard.id) }>Delete Surfboard</button>
      <button onClick={() => onClickingSell(surfboard.id)}>Sell Surfboard</button>
      <hr/>
    </React.Fragment>
  );
}

SurfboardDetail.propTypes = {
  surfboard: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default SurfboardDetail;