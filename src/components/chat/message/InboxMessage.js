import React from "react";
import Avatar from "../../profile/Avatar";
import MessageDropdown from "./MessageDropdown";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

function InboxMessage({ message }) {
  const opened = useParams().id;
  /**
   * Данные о профиле кликнутого контакта
   */
  const { fullname } = useSelector((state) =>
    state.contacts.items.find((item) => {
      return opened === item._id;
    })
  );

  return (
    <div className="message-block margin">
      <Avatar size="small" name={fullname && fullname} />
      <div className="message">
        {message.content}
        <div className="date">
          <div>{dayjs(message.time).format("hh:mm")}</div>
        </div>
        <MessageDropdown messageId={message._id} />
      </div>
    </div>
  );
}

export default InboxMessage;
