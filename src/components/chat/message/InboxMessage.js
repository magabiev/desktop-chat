import React from "react";
import moment from "moment";
import CheckRead from "./CheckRead";
import MessageDropdown from "./MessageDropdown";
import { useDispatch } from "react-redux";
import { receivedMessageId } from "../../../redux/actions/application";

function InboxMessage({ inboxMessage }) {
  /**
   *  Хук редакса
   */
  const dispatch = useDispatch();
  /**
   * Для временного хранения id сооющения на который наведен курсор
   */
  const handleClick = () => {
    // todo исрпавить на аутсайдклик
    dispatch(receivedMessageId(inboxMessage._id));
  };

  //todo заменить момент на дай жс

  return (
    <div className="my-message-block margin" onClick={handleClick}>
      <div className="message">
        {inboxMessage.content}
        <div className="date">
          <div>{moment(inboxMessage.time).format("hh:mm")}</div>
          {inboxMessage.sending ? (
            <span className="timer">
              <i className="material-icons ">timer</i>
            </span>
          ) : (
            <CheckRead read={inboxMessage.read} />
          )}
        </div>
        <MessageDropdown messageId={inboxMessage._id} />
      </div>
    </div>
  );
}

export default InboxMessage;
