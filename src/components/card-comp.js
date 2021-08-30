import React from "react";
import { useDispatch } from "react-redux";
import { markSearchDel } from "../store/actions";

const CardComp = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      Search string: {props.e.value} Search Id {props.e.id}
      <button
        onClick={() => {
          dispatch(markSearchDel(props.e.id))
        }}
      >
        Delete Search
      </button>
    </div>
  );
};

export default CardComp;
