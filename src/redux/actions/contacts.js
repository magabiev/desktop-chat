/**
 * Получене списка контактов
 * @returns {function(*): void}
 */
export function loadContacts() {
  return (dispatch) => {
    dispatch({ type: "load/sidebar/started" });
    fetch("http://151.248.117.7:8001/api/contacts")
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: "load/sidebar/succeed",
          payload: json,
        })
      );
  };
}

/**
 * Поиск контактов
 */
export function searchContacts(inputValue) {
  return { type: "searchRequest/contacts/start", payload: inputValue };
}
