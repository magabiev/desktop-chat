import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/DropdownItem";
import PropTypes from "prop-types";

function DropdownContact({ contactId }) {
  /**
   * Состояние открытия или закрытия меню
   */
  const [show, setShow] = useState(false);
  /**
   * Открытие и закрытие выпадающего меню
   */
  const handleClickDropIcon = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  //event loop
  //всплытие/погружение событий

  return (
    <>
      <span className="option">
        <i className="material-icons" onClick={handleClickDropIcon}>
          more_horiz
        </i>
      </span>
      {
        <Dropdown type="contact" isShow={show}>
          <DropdownItem>Delete</DropdownItem>
          <DropdownItem>Archive</DropdownItem>
        </Dropdown>
      }
    </>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 * @type {{contactId: Requireable<string>}}
 */
DropdownContact.propTypes = {
  contactId: PropTypes.string,
};

export default DropdownContact;
