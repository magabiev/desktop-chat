import React, { useEffect } from "react";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { loadContacts } from "../../redux/actions/contacts";
import Contact from "./Contact";
import SkeletonContact from "./SkeletonContact";

function Sidebar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);
  /**
   * Получение данных о контактах и Фильтрация массива по запросу поиска
   */
  const items = useSelector((state) => {
    const { contactSearchValue } = state.application;

    return state.contacts.items.filter((item) => {
      return (
        item.fullname
          .toUpperCase()
          .indexOf(contactSearchValue.toUpperCase()) !== -1
      );
    });
  });

  const loading = useSelector((state) => state.contacts.loading);

  return (
    <div className="sidebar">
      <div className="search-parent">
        <Search />
      </div>
      <div className="contacts-block">
        {loading ? (
          <SkeletonContact />
        ) : (
          items.map((item) => {
            return <Contact key={item._id} contact={item} />;
          })
        )}
      </div>
    </div>
  );
}

export default Sidebar;
