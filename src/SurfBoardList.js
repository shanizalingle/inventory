import React from "react";
import Surfboard from "./Surfboard";
import PropTypes from "prop-types";

function SurfboardList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.surfboardList.map((surfboard) =>
        <Surfboard
          whenSurfboardClicked = { props.onSurfboardSelection }
          name={surfboard.name}
          price={surfboard.price}
          quantity={surfboard.quantity}
          id={surfboard.id}
          key={surfboard.id}/>
      )}
    </React.Fragment>
  );
}

SurfboardList.propTypes = {
  surfboardList: PropTypes.array,
  onSurfboardSelection: PropTypes.func
};

export default SurfboardList;