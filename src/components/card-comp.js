import React from "react";

const CardComp = (props) => (
  <div>
    gegegee
    {props.e.value}
    vals Search string: {props.e.value}
    Search Id {props.e.id}
    <button
      onClick={() => {
        props.deleteSearch(props.e.id);
      }}
    >
      Delete Search
    </button>
  </div>
);

export default CardComp;
