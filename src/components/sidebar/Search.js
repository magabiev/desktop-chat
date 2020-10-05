import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchContacts } from "../../redux/actions/application";

function Search() {
  /**
   * Хук редакса
   */
  const dispatch = useDispatch();
  /**
   * Значение поля ввода
   */
  const searchValue = useSelector(
    (state) => state.application.contactSearchValue
  );
  /**
   * Передача данных из поля ввода
   * @param e
   */
  const handleChange = (e) => {
    dispatch(searchContacts(e.target.value));
  };
  /**
   * Очистка поля ввода
   */
  const clearSearch = () => {
    dispatch(searchContacts(""));
  };

  return (
    <div className="search-contact">
      <i className="material-icons">search</i>
      <input
        placeholder="Search Contact"
        value={searchValue}
        onChange={handleChange}
      />
      {searchValue.length !== 0 && (
        <i onClick={clearSearch} className="material-icons click">
          clear
        </i>
      )}
    </div>
  );
}

export default Search;
