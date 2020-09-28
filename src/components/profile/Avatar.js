import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function Avatar({ size, name, online }) {
  /**
   * Смена классов с определенным размером
   * @returns {string}
   */
  const switchClass = classNames(
    "avatar",
    { small: size === "small" },
    { medium: size === "medium" },
    { large: size === "large" }
  );

  return (
    <div className={switchClass}>
      {online && <div className="online" />}
      <div className="m-auto">{name[0]}</div>
    </div>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 * @type {{size: Requireable<string>, name: Requireable<string>, online: Requireable<boolean>}}
 */
Avatar.propTypes = {
  size: PropTypes.string,
  online: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

/**
 * Задание значений по умолчанию для пропсов
 */
Avatar.defaultProps = {
  name: "Name",
  size: "medium",
  online: false,
};

export default Avatar;
