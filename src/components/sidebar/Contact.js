import React from "react";
import Avatar from "../profile/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../../redux/actions/chat";
import CheckRead from "../chat/message/CheckRead";
import classNames from "classnames";
import PropTypes from "prop-types";
import DropdownContact from "./DropdownContact";
import { useParams, useHistory } from "react-router-dom";
import dayjs from "dayjs";

function Contact({ contact: { _id, fullname, lastMessage, online } }) {
  const history = useHistory();

  const dispatch = useDispatch();
  /**
   * Id кликнутого контакта
   */
  const opened = useParams().id;

  /**
   * Данные о myId
   */
  const myId = useSelector((state) => state.profile.myId);

  /**
   * Передача нужного id  и получение его сообщений и получение профиля контакта
   */
  const handleClickContact = () => {
    if (_id !== opened) {
      dispatch(loadMessages(myId, _id));
      history.push(_id);
    }
  };

  /**
   * Проверка активного чата и применение соответствующего класса
   * @returns {string}
   *
   */
  const classes = classNames("contact", {
    "active-contact": opened === _id,
  });

  return (
    <div className={classes} onClick={handleClickContact}>
      <Avatar name={fullname} online={online} />
      <div className="info">
        <div className="name">{fullname}</div>
        <div className="last-message">
          {_id === lastMessage?.toUserId && (
            <CheckRead read={lastMessage.read} />
          )}
          <div className="contact-content">{lastMessage?.content}</div>
        </div>
      </div>
      <div className="options">
        <span className="date-contact">
          {dayjs(lastMessage?.time).format("hh:mm")}
        </span>
        <DropdownContact contactId={_id} />
      </div>
    </div>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 */
Contact.propTypes = { contact: PropTypes.object };

export default Contact;
