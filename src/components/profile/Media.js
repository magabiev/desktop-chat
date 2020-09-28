import React from "react";
import PropTypes from "prop-types";

function Media({ fileName }) {
  return (
    <div className="profile-media">
      <span className="header-profile">Media</span>
      <div className="mediafiles">
        <div className="file click">
          <div className="media-img"></div>
          <div className="media-info">{fileName}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 * @type {{fileName: Requireable<string>}}
 */
Media.propTypes = {
  fileName: PropTypes.string,
};

/**
 * Задание значений по умолчанию для пропсов
 */
Media.defaultProps = {
  fileName: "fileName",
};

export default Media;
