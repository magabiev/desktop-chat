import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/DropdownItem";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";

function DropdownContact() {
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

  const hideDropdown = () => {
    setShow(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={hideDropdown}>
      <span className="option">
        <i className="material-icons" onClick={handleClickDropIcon}>
          more_horiz
        </i>
      </span>
      <Dropdown type="contact" isShow={show}>
        <DropdownItem>Delete</DropdownItem>
        <DropdownItem>Archive</DropdownItem>
      </Dropdown>
    </OutsideClickHandler>
  );
}

DropdownContact.propTypes = {
  contactId: PropTypes.string,
};

export default DropdownContact;
