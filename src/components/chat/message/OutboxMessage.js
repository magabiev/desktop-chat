import React from "react";
import Avatar from "../../profile/Avatar";
import moment from "moment";
import MessageDropdown from "./MessageDropdown";
import { receivedMessageId } from "../../../redux/actions/application";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function OutboxMessage({ outboxMessage }) {
  /**
   *  Хук редакса
   */
  const dispatch = useDispatch();
  /**
   * Для временного хранения id сооющения на который наведен курсор
   */
  const handleClick = () => {
    dispatch(receivedMessageId(outboxMessage._id));
  };
  /**
   * Id кликнутого контакта
   */
  const opened = useParams().id;
  /**
   * Данные о профиле кликнутого контакта
   */
  const profile = useSelector((state) =>
    state.contacts.items.find((item) => {
      return opened === item._id;
    })
  );

  return (
    <div className="message-block margin" onClick={handleClick}>
      <Avatar size="small" name={profile.fullname} />
      <div className="message">
        {outboxMessage.content}
        <div className="date">
          <div>{moment(outboxMessage.time).format("hh:mm")}</div>
        </div>
        <MessageDropdown messageId={outboxMessage._id} />
      </div>
    </div>
  );
}

export default OutboxMessage;
