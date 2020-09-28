/**
 * Загрузка данных о профиле
 * @returns {Promise<{payload: *, type: string}>}
 */
export function loadMyId() {
  return (dispatch) => {
    dispatch({ type: "load/myId/started" });
    fetch("http://151.248.117.7:8001/api/profile")
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: "load/myId/succeed",
          payload: json._id,
        })
      );

    //todo выше сохрванить весь профайл а не один айди
  };
}
/**
 * Полчение id сообщения
 * @param id
 * @returns {{payload: *, type: string}}
 */
export function receivedMessageId(id) {
  return { type: "get/messageId/started", payload: id };
}

/**
 * Открытие и закрытие окна профиля
 * @returns {{type: string}}
 */
export function profileToggled() {
  return { type: "open/profile/toggle" };
}
