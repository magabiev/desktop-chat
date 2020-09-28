/**
 * Получение узла окна чата и прокрутка чата до конца
 */
export const scrollChatDown = () => {
  const chatWindow = document.getElementById("chat-window");
  if (chatWindow) {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
};
