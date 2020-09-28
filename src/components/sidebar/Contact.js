import React from "react";
import Avatar from "../profile/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../../redux/actions/chat";
import CheckRead from "../chat/message/CheckRead";
import moment from "moment";
import classNames from "classnames";
import PropTypes from "prop-types";
import DropdownContact from "./DropdownContact";
import { useParams, useHistory } from "react-router-dom";

function Contact({ contact }) {
  const history = useHistory();

  const dispatch = useDispatch();
  /**
   * Id кликнутого контакта
   */
  const opened = useParams().id;

  /**
   * Данные о myId
   */
  const myId = useSelector((state) => state.application.myId);

  /**
   * Передача нужного id  и получение его сообщений и получение профиля контакта
   */
  const handleClickContact = () => {
    if (contact._id !== opened) {
      dispatch(loadMessages(myId, contact._id));
      history.push(contact._id);
    }
  };

  /**
   * Проверка активного чата и применение соответствующего класса
   * @returns {string}
   *
   */
  const classes = classNames("contact", {
    "active-contact": opened === contact._id,
  });

  return (
    <div className={classes} onClick={handleClickContact}>
      <Avatar name={contact.fullname} online={contact.online} />
      <div className="info">
        <div className="name">{contact.fullname}</div>
        <div className="last-message">
          {contact._id === contact.lastMessage?.toUserId && (
            <CheckRead read={contact.lastMessage.read} />
          )}
          <div className="contact-content">{contact.lastMessage?.content}</div>
        </div>
      </div>
      <div className="options">
        <span className="date-contact">
          {moment(contact.lastMessage?.time).format("hh:mm")}
        </span>
        <DropdownContact contactId={contact._id} />
      </div>
    </div>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 */
Contact.propTypes = { contact: PropTypes.object };

export default Contact;
