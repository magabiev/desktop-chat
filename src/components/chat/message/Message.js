import React from "react";
import TextMessage from "./TextMessage";
import InfoMessage from "./InfoMessage";
import PropTypes from "prop-types";

function Message({ message }) {
  if (message.type === "text") {
    return <TextMessage message={message} />;
  }
  return <InfoMessage content={message.content} />;
}

Message.propTypes = {
  message: PropTypes.object,
};

export default Message;
