import React from "react";
import PropTypes from "prop-types";

function DropdownItem({ action, children }) {
  return (
    <div onClick={action} className="dropdown-item click">
      {children}
    </div>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 * @type {{action: Requireable<(...args: any[]) => any>}}
 */
DropdownItem.propTypes = {
  action: PropTypes.func,
};

export default DropdownItem;
