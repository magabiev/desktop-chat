import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import InboxMessage from "./InboxMessage";
import OutboxMessage from "./OutboxMessage";

function TextMessage({ message }) {
  /**
   * Данные о моем id
   */
  const myId = useSelector((state) => state.application.myId);

  /**
   * Проверка исходящее ли сообщение сообщение
   * @type {boolean}
   */
  const outgoing = myId === message.toUserId;

  if (!outgoing) {
    return <InboxMessage inboxMessage={message} />;
  }
  return <OutboxMessage outboxMessage={message} />;
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 */
TextMessage.propType = { message: PropTypes.object };

export default TextMessage;
