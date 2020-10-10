import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import PropTypes from "prop-types";

function SendButtons({ hasMessage, onSend }) {
  return (
    <button className="send click">
      <SwitchTransition>
        <CSSTransition key={hasMessage} timeout={100} classNames="sendIcon">
          <i className="material-icons" onClick={onSend}>
            {hasMessage ? "send" : "mic"}
          </i>
        </CSSTransition>
      </SwitchTransition>
    </button>
  );
}

SendButtons.propTypes = {
  hasMessage: PropTypes.bool,
  onSend: PropTypes.func.isRequired,
};

export default SendButtons;
