import React from "react";
import PropTypes from "prop-types";

function CheckRead({ read }) {
  return (
    <span className="read">
      {read ? (
        <i className="material-icons">done_all</i>
      ) : (
        <i className="material-icons">done</i>
      )}
    </span>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 * @type {{read: Requireable<boolean>}}
 */
CheckRead.propTypes = {
  read: PropTypes.bool,
};

export default CheckRead;
