import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import OutboxMessage from "./OutboxMessage";
import InboxMessage from "./InboxMessage";

function TextMessage({ message }) {
  const myId = useSelector((state) => state.profile.myId);

  /**
   * Проверка исходящее ли сообщение сообщение
   * @type {boolean}
   */
  const isOutgoing = myId === message.toUserId;

  if (!isOutgoing) {
    return <OutboxMessage message={message} />;
  }
  return <InboxMessage message={message} />;
}

TextMessage.propType = { message: PropTypes.object };

export default TextMessage;
