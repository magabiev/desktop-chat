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

Avatar.propTypes = {
  size: PropTypes.string,
  online: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  name: "Name",
  size: "medium",
  online: false,
};

export default Avatar;
