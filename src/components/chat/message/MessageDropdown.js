import React, { useState } from "react";
import Dropdown from "../../dropdown/Dropdown";
import DropdownItem from "../../dropdown/DropdownItem";
import classNames from "classnames";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
import { useDispatch } from "react-redux";
import { deletedMessage } from "../../../redux/actions/chat";

function MessageDropdown({ messageId }) {
  const dispatch = useDispatch();
  /**
   * Состояние открытия или закрытия меню
   */
  const [show, setShow] = useState(false);
  /**
   * Открытие и закрытие выпадающего меню
   */
  const handleClickDropIcon = () => {
    setShow(!show);
  };
  /**
   * Удаление сообщения
   */
  const deleteMessage = () => {
    dispatch(deletedMessage(messageId));
  };
  /**
   * Смена классов иконки при открытии  меню и закрытии
   * @type {string}
   */
  const openClasses = classNames("dropdown-icon-close", {
    "dropdown-icon": show,
  });

  /**
   * Скрытие всплывающего меню
   */
  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={hideDropdown}>
      <div className={openClasses} onClick={handleClickDropIcon}>
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
      <Dropdown type="message" isShow={show}>
        <DropdownItem action={deleteMessage}>Delete</DropdownItem>
      </Dropdown>
    </OutsideClickHandler>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 * @type {{messageId: <string>}}
 */
MessageDropdown.propTypes = {
  messageId: PropTypes.string,
};

export default MessageDropdown;
