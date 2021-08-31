import React from "react";
import { useDispatch } from "react-redux";
import { markSearchDel } from "../store/actions";

const CardComp = (props) => {
  const dispatch = useDispatch();
  const onButtonClick = () =>{
    dispatch(markSearchDel(props.e))
    window.location.reload();
  }
  return (
    <div>
      <b>Search string:</b> "{props.e.value}" <b>ID:</b> "{props.e.id}"
      <button
        onClick={onButtonClick} 
        className="btn btn-primary"
      >
        Delete Search
      </button>
    </div>
  );
};

export default CardComp;
