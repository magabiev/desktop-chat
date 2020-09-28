import React from "react";
import PropTypes from "prop-types";

function Name({ name, online }) {
  return (
    <div className="header-name">
      <div className="name-info">
        {name}
        {online && <div className="online"></div>}
      </div>
    </div>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 * @type {name: Requireable<string>, online: Requireable<boolean>}}
 */
Name.propTypes = {
  name: PropTypes.string,
  online: PropTypes.bool,
};

/**
 * Задание значений по умолчанию для пропсов
 */
Name.defaultProps = {
  name: "Name Lastname",
  online: false,
};
export default Name;
