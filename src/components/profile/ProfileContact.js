import React from "react";
import Avatar from "./Avatar";
import Social from "./Social";
import Media from "./Media";
import { useDispatch, useSelector } from "react-redux";
import Communications from "./Communications";
import { useHotkeys } from "react-hotkeys-hook";
import { profileToggled } from "../../redux/actions/application";
import { useParams } from "react-router-dom";

function ProfileContact() {
  const dispatch = useDispatch();

  /**
   * Id кликнутого контакта
   */
  const opened = useParams().id;

  /**
   * Состояние открытия окна профиля
   */
  const openProfile = useSelector(
    (state) => state.application.openContactProfile
  );

  /**
   * Данные о профиле кликнутого контакта
   */
  const profile = useSelector((state) =>
    state.contacts.items.find((item) => {
      return opened === item._id;
    })
  );

  /**
   * Данные о загрузке профиля
   */
  const loading = useSelector((state) => state.contacts.loading);

  /**
   * Вызов функции открытия окна профиля при нажатии горячих клавиш
   */
  useHotkeys(
    "shift+p",
    () => {
      dispatch(profileToggled());
    },
    {
      filter: () => true,
    }
  );

  /**
   * Вывод информации о профиле контакта если открыт чат и загрузка завершена
   */
  if (loading || !opened) {
    return null;
  }

  return (
    <div className={openProfile ? "profile-parent-open" : "profile-parent"}>
      <div className="profile-info">
        <Avatar size={"large"} name={profile.fullname} />
        <div className="profile-name">{profile.fullname}</div>
        <div className="nickname">@{profile.username}</div>
        <Communications />
      </div>
      <Social socials={profile.socials} />
      <Media fileName={"filename.pdf"} />
    </div>
  );
}

export default ProfileContact;
