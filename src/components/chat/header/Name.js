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

Name.propTypes = {
  name: PropTypes.string,
  online: PropTypes.bool,
};

Name.defaultProps = {
  name: "Name Lastname",
  online: false,
};
export default Name;
