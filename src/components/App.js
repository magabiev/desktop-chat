import React, { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import Chat from "./chat/Chat";
import ProfileContact from "./profile/ProfileContact";
import { loadMyId } from "../redux/actions/application";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  /**
   * Хук редакса
   */
  const dispatch = useDispatch();

  /**
   * Загрузка id вместе с загрузкой компонента
   */
  //todo добавить тернарный для лоадинга
  useEffect(() => {
    dispatch(loadMyId());
  }, [dispatch]);
  /**
   *
   */
  const loadingMyId = useSelector((state) => state.application.loadingMyId);

  return (
    !loadingMyId && (
      <BrowserRouter>
        <Route path="/:id?">
          <>
            <Sidebar />
            <Chat />
            <ProfileContact />
          </>
        </Route>
      </BrowserRouter>
    )
  );
}

export default App;
