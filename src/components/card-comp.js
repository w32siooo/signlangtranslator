import React from "react";
import { useDispatch } from "react-redux";
import { markSearchDel } from "../store/actions";

const CardComp = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <b>Search string:</b> "{props.e.value}" <b>ID:</b> "{props.e.id}"
      <button
        onClick={() => {
          dispatch(markSearchDel(props.e));
        }}
        className="btn btn-primary"
      >
        Delete Search
      </button>
    </div>
  );
};

export default CardComp;
