import React, { useCallback, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useDispatch, useSelector } from "react-redux";
import { sentMessage } from "../../redux/actions/chat";
import SendButtons from "./SendButtons";
import FileButton from "./FileButton";
import { useParams } from "react-router-dom";
import { useHotkeys } from "react-hotkeys-hook";

function SendForm() {
  /**
   * Значение поля ввода
   */
  const [content, setContent] = useState("");
  /**
   * Хук редакса
   */
  const dispatch = useDispatch();
  /**
   * Данные о myId
   */
  const myId = useSelector((state) => state.profile.myId);
  /**
   * Id кликнутого контакта
   */
  const opened = useParams().id;
  /**
   * Отправка сообщения
   */
  const sendMessage = useCallback(() => {
    if (content.length !== 0) {
      dispatch(sentMessage(myId, opened, content));
      clear();
    }
  }, [content, opened, myId]);
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

  /**
   * Перенос строки при клике на shift+enter
   */
  useHotkeys("shift+enter", (event) => {
    event.preventDefault();
    setContent((content) => content + "\n");
  });

  /**
   * Отправка сообщения при клике на Enter
   */
  useHotkeys(
    "enter",
    (e) => {
      e.preventDefault();
      sendMessage();
    },
    [content]
  );

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
