/**
 * Получене списка контактов
 * @returns {function(*): void}
 */
export function loadContacts() {
  return (dispatch) => {
    dispatch({ type: "contacts/load/started" });
    fetch("https://api.intocode.ru:8001/api/contacts")
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: "contacts/load/succeed",
          payload: json,
        })
      );
  };
}
