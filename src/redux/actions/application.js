/**
 * Открытие и закрытие окна профиля
 * @returns {{type: string}}
 */
export function profileToggled() {
  return { type: "profile/open/toggle" };
}

/**
 * Открытие и закрытие поисковика сообщений
 * @returns {{type: string}}
 */
export function searchOpened() {
  return { type: "search/show/hide/toggle" };
}

/**
 * Поиск сообщений
 */
export function searchMessages(inputValue) {
  return { type: "messages/searchRequest/start", payload: inputValue };
}
/**
 * Поиск контактов
 */
export function searchContacts(inputValue) {
  return { type: "contacts/searchRequest/start", payload: inputValue };
}
