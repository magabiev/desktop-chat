import React, { useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import Chat from "./chat/Chat";
import ProfileContact from "./profile/ProfileContact";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { loadMyId } from "../redux/actions/profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMyId());
  }, [dispatch]);

  const loadingMyId = useSelector((state) => state.profile.loadingMyId);

  return (
    !loadingMyId && (
      <BrowserRouter>
        <Route path="/:id?">
          <Sidebar />
          <Chat />
          <ProfileContact />
        </Route>
      </BrowserRouter>
    )
  );
}

export default App;
