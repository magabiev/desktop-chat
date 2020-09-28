import { createLogger } from "redux-logger";
import { applyMiddleware, combineReducers, createStore } from "redux";
import chat from "./reducers/chat";
import profile from "./reducers/profile";
import contacts from "./reducers/contacts";
import thunk from "redux-thunk";
import application from "./reducers/application";

/**
 * Настройка логгера
 */
const logger = createLogger({
  collapsed: true,
  diff: true,
});

/**
 * Комбинирование редюсеров
 */
const reducers = combineReducers({ chat, profile, contacts, application });

/**
 *  Создание настройка и стора
 */
export const store = createStore(reducers, applyMiddleware(thunk, logger));
