/**
 * Загрузка данных о профиле
 * @returns {Promise<{payload: *, type: string}>}
 */
export function loadMyId() {
  return (dispatch) => {
    dispatch({ type: "myProfile/load/started" });
    fetch("https://api.intocode.ru:8001/api/profile")
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: "myProfile/load/succeed",
          payload: json,
        })
      );
  };
}
