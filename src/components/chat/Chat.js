import React, { useEffect } from "react";
import SendForm from "./SendForm";
import Header from "./header/Header";
import Message from "./message/Message";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./Preloader";
import { useParams } from "react-router-dom";
import { loadMessages } from "../../redux/actions/chat";

function Chat() {
  const dispatch = useDispatch();

  /**
   * Массив с сообщениями и его фильтрация  по запросу поиска
   */
  const items = useSelector((state) => {
    return state.chat.items.filter((item) => {
      return (
        item.content
          .toUpperCase()
          .indexOf(state.application.searchValue.toUpperCase()) !== -1
      );
    });
  });
  /**
   * Данные о myId
   */
  const myId = useSelector((state) => state.profile.myId);
  /**
   * Состояние загрузки сообщений
   */
  const loading = useSelector((state) => state.chat.loading);
  /**
   * Id кликнутого контакта
   */
  const opened = useParams().id;
  /**
   * Загрузка чата открытого контакта
   */
  useEffect(() => {
    if (opened) {
      dispatch(loadMessages(myId, opened));
    }
  }, [dispatch, opened, myId]);

  if (!opened) {
    return <Preloader />;
  }

  return (
    <div className="chat-parent">
      <Header />
      <div className="chat-block" id="chat-window">
        {!loading &&
          items.map((message) => {
            return <Message key={message._id} message={message} />;
          })}
      </div>
      <div className="parent-form">
        <SendForm />
      </div>
    </div>
  );
}

export default Chat;
