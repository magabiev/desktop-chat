import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useDispatch, useSelector } from "react-redux";
import { sentMessage } from "../../redux/actions/chat";
import SendButtons from "./SendButtons";
import FileButton from "./FileButton";
import { useParams } from "react-router-dom";

function SendForm() {
  /**
   * Хук редакса
   */
  const dispatch = useDispatch();
  /**
   * Данные о myId
   */
  const myId = useSelector((state) => state.application.myId);
  /**
   * Id кликнутого контакта
   */
  const opened = useParams().id;
  /**
   * Отправка сообщения
   */
  const sendMessage = () => {
    dispatch(sentMessage(myId, opened, content));
    clear();
  };
  /**
   * Значение поля ввода
   */
  const [content, setContent] = useState("");
  /**
   * Передача значения поля ввода в редакс
   */
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  /**
   * Очистка поля ввода
   */
  const clear = () => {
    setContent("");
  };

  //todo при нажатии на интер отправить сообщ, принажатии шифт+интер сделать перенос строки

  return (
    <div className="form-block">
      <TextareaAutosize
        onChange={handleChange}
        value={content}
        className="send-form"
        placeholder="Write a message..."
        maxRows="5"
      />
      <FileButton />
      <SendButtons hasMessage={content.length > 0} onSend={sendMessage} />
    </div>
  );
}

export default SendForm;
