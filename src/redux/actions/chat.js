/**
 * Загрузка сообщений
 * @param myId
 * @param contactId
 * @returns {function(*): void}
 */
import { scrollChatDown } from "../../utils/dom";

export function loadMessages(myId, contactId) {
  return (dispatch) => {
    dispatch({ type: "load/chat/started", payload: contactId });
    fetch(`http://151.248.117.7:8001/api/messages/${myId}/${contactId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/chat/succeed",
          payload: json,
        });
        scrollChatDown();
      });
  };
}

function sentMessageBegin(messageObject) {
  return async (dispatch) => {
    await dispatch({ type: "messages/send/started", payload: messageObject });
    scrollChatDown();
  };
}
/**
 * Добавление сообщения
 */
export function sentMessage(myId, contactId, content) {
  return (dispatch, getState) => {
    const requestId = getState().chat.requestId;

    dispatch(
      sentMessageBegin({
        myId,
        requestId,
        content,
        toUserId: contactId,
        type: "text",
      })
    );

    fetch("http://151.248.117.7:8001/api/messages", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myId,
        contactId,
        content,
        type: "text",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "messages/send/succeed",
          payload: {
            requestId,
            ...json,
          },
        });
        scrollChatDown();
      });
  };
}

/**
 * Удаление сообщения
 */
export function deletedMessage(messageId) {
  return (dispatch) => {
    dispatch({
      type: "delete/message/started",
    });
    fetch("http://151.248.117.7:8001/api/messages", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageId),
    })
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: "delete/message/succeed",
          payload: json,
        })
      );
  };
}

/**
 * Открытие и закрытие поисковика сообщений
 * @returns {{type: string}}
 */
export function searchOpened() {
  return { type: "open/search/toggle" };
}

/**
 * Поиск сообщений
 */
export function searchMessages(inputValue) {
  return { type: "searchRequest/messages/start", payload: inputValue };
}
