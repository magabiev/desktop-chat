import React from "react";
import PropTypes from "prop-types";

function Social({ socials }) {
  return (
    <div className="profile-social">
      <span className="header-profile">Social</span>
      <div className="social-block">
        {socials &&
          Object.keys(socials).map((social, index) => {
            return (
              <div key={index} className="icons-social click">
                <i className={`fab fa-${social}`} /> {socials[social]}
              </div>
            );
          })}
      </div>
    </div>
  );
}

Social.propTypes = {
  socials: PropTypes.object,
};

export default Social;
