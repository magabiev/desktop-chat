import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMessages,
  searchOpened,
} from "../../../redux/actions/application";

function SearchMessage() {
  const dispatch = useDispatch();

  const searchOpenToggle = () => {
    dispatch(searchOpened());
  };

  const searchValue = useSelector((state) => state.application.searchValue);

  const handleChange = (e) => {
    dispatch(searchMessages(e.target.value));
  };

  const clearSearch = () => {
    dispatch(searchMessages(""));
  };

  const searchOpen = useSelector((state) => state.application.searchOpen);

  return (
    <div className={searchOpen ? "search-message" : "search-message-close"}>
      <div className="icon click" onClick={searchOpenToggle}>
        <i className="material-icons">search</i>
      </div>
      <input value={searchValue} onChange={handleChange} />
      {searchValue.length !== 0 && (
        <i onClick={clearSearch} className="material-icons click">
          clear
        </i>
      )}
    </div>
  );
}

export default SearchMessage;
