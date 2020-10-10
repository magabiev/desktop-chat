/**
 * Загрузка сообщений
 * @param myId
 * @param contactId
 * @returns {function(*): void}
 */
import { scrollChatDown } from "../../utils/dom";

export function loadMessages(myId, contactId) {
  return (dispatch) => {
    dispatch({ type: "chat/load/started", payload: contactId });
    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${contactId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "chat/load/succeed",
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

    fetch("https://api.intocode.ru:8001/api/messages", {
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
      type: "message/delete/started",
      payload: messageId,
    });
    fetch("https://api.intocode.ru:8001/api/messages", {
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
          type: "message/delete/succeed",
          payload: json,
        })
      );
  };
}
