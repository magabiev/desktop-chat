import React, { useState } from "react";
import { useSelector } from "react-redux";
import Dropdown from "../../dropdown/Dropdown";
import DropdownItem from "../../dropdown/DropdownItem";
import classNames from "classnames";
import PropTypes from "prop-types";

function MessageDropdown({ messageId }) {
  /**
   * Состояние открытия или закрытия меню
   */
  const [show, setShow] = useState();
  /**
   * Открытие и закрытие выпадающего меню
   */
  const handleClickDropIcon = () => {
    setShow(!show);
  };

  /**
   * id текущего сообщения
   */
  const messageTempId = useSelector((state) => state.application.messageTempId);
  /**
   * Смена классов иконки при открытии  меню и закрытии
   * @type {string}
   */
  const openClasses = classNames("dropdown-icon-close", {
    "dropdown-icon": show && messageTempId === messageId,
  });

  return (
    <>
      <div className={openClasses} onClick={handleClickDropIcon}>
        <i className="material-icons">keyboard_arrow_down</i>
      </div>
      {messageTempId === messageId && (
        <Dropdown type="message" isShow={show}>
          <DropdownItem>Delete</DropdownItem>
        </Dropdown>
      )}
    </>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 * @type {{messageId: Requireable<string>}}
 */
MessageDropdown.propTypes = {
  messageId: PropTypes.string,
};

export default MessageDropdown;
