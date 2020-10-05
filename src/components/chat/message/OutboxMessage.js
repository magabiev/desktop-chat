import React from "react";
import CheckRead from "./CheckRead";
import MessageDropdown from "./MessageDropdown";
import dayjs from "dayjs";

function OutboxMessage({ message }) {
  return (
    <div className="my-message-block margin">
      <div className="message">
        {message.content.split("\n").map((part, index) => {
          return (
            <div key={index}>
              {part}
              <br />
            </div>
          );
        })}
        <div className="date">
          <div>{dayjs(message.time).format("hh:mm")}</div>
          {message.sending ? (
            <span className="timer">
              <i className="material-icons ">timer</i>
            </span>
          ) : (
            <CheckRead read={message.read} />
          )}
        </div>
        <MessageDropdown messageId={message._id} />
      </div>
    </div>
  );
}

export default OutboxMessage;
