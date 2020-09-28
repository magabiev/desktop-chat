import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function Dropdown({ children, type, isShow }) {
  /**
   * Смена классов относительно типа меню
   * @type {string}
   */
  const typeClasses = classNames(
    "dropdown-menu",
    {
      "dropdown-contact": type === "contact",
    },
    { "dropdown-message": type === "message" }
  );

  if (isShow) {
    return <div className={typeClasses}>{children}</div>;
  }
  return <div></div>;
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 * @type {{type: Requireable<string>}}
 */
Dropdown.propTypes = {
  type: PropTypes.string,
  isShow: PropTypes.bool,
};

export default Dropdown;
