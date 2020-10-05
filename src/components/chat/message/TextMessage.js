import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import OutboxMessage from "./OutboxMessage";
import InboxMessage from "./InboxMessage";

function TextMessage({ message }) {
  /**
   * Данные о моем id
   */
  const myId = useSelector((state) => state.profile.myId);

  /**
   * Проверка исходящее ли сообщение сообщение
   * @type {boolean}
   */
  const outgoing = myId === message.toUserId;

  if (!outgoing) {
    return <OutboxMessage message={message} />;
  }
  return <InboxMessage message={message} />;
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 */
TextMessage.propType = { message: PropTypes.object };

export default TextMessage;
