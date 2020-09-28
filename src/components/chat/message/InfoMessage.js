import React from "react";
import PropTypes from "prop-types";

function InfoMessage({ content }) {
  return <div className="type-info margin">{content}</div>;
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 * @type {{content: Requireable<string>}}
 */
InfoMessage.propTypes = {
  content: PropTypes.string,
};

export default InfoMessage;
