import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

function SendButtons({ hasMessage, onSend }) {
  return (
    <button className="send click">
      {hasMessage ? (
        <CSSTransition in={hasMessage} timeout={500} classNames="sendIcon">
          <i className="material-icons" onClick={onSend}>
            send
          </i>
        </CSSTransition>
      ) : (
        <CSSTransition in={hasMessage} timeout={500} classNames="mic">
          <i className="material-icons">mic</i>
        </CSSTransition>
      )}
    </button>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 */
SendButtons.propTypes = {
  hasMessage: PropTypes.bool,
  onSend: PropTypes.func.isRequired,
};

export default SendButtons;
