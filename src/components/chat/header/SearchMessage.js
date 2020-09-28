import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMessages, searchOpened } from "../../../redux/actions/chat";

function SearchMessage() {
  /**
   * Хук редакса
   */
  const dispatch = useDispatch();
  /**
   * Открытие и закрытие поисковика сообщений
   */
  const searchOpenToggle = () => {
    dispatch(searchOpened());
  };
  /**
   * Значение поля ввода
   */
  const searchValue = useSelector((state) => state.application.searchValue);
  /**
   * Передача данных из поля ввода
   * @param e
   */
  const handleChange = (e) => {
    dispatch(searchMessages(e.target.value));
  };
  /**
   * Очистка поля ввода
   */
  const clearSearch = () => {
    dispatch(searchMessages(""));
  };
  /**
   * Состояние открытия поисковика
   */
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
