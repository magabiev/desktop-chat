import React from "react";
import SearchMessage from "./SearchMessage";
import { useDispatch, useSelector } from "react-redux";
import Updating from "./Updating";
import Name from "./Name";
import PropTypes from "prop-types";
import { profileToggled } from "../../../redux/actions/application";
import { useParams } from "react-router-dom";

function Header() {
  /**
   * Id кликнутого контакта
   */
  const opened = useParams().id;
  /**
   * Хук редакса
   */
  const dispatch = useDispatch();
  /**
   * Состояние загрузки сообщений
   */
  const loading = useSelector((state) => state.chat.loading);
  /**
   * Функция открытия и закрытия окна профиля
   */
  const handleClick = () => {
    dispatch(profileToggled());
  };

  /**
   * Данные о профиле кликнутого контакта
   */
  const profile = useSelector((state) =>
    state.contacts.items.find((item) => {
      return opened === item._id;
    })
  );

  return (
    <div className="header-parent">
      <div className="header-search">
        <SearchMessage />
      </div>
      {loading ? (
        <Updating />
      ) : (
        <Name name={profile.fullname} online={profile.online} />
      )}
      <div className="profile-open">
        <i className="material-icons click" onClick={handleClick}>
          person
        </i>
      </div>
    </div>
  );
}

/**
 * Объявление пропса на соответствие определённому JS-типу.
 */
Header.propTypes = {
  loading: PropTypes.bool,
};

export default Header;
