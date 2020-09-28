const initialState = {
  myId: "",
  loadingMyId: true,
  messageTempId: "",
  searchOpen: false,
  searchValue: "",
  contactSearchValue: "",
  openProfile: false,
};

// TODO то что относится к "мой профиль" перенести в профайл

export default function application(state = initialState, action) {
  switch (action.type) {
    case "load/myId/started":
      return {
        ...state,
        loadingMyId: true,
      };
    case "load/myId/succeed":
      return {
        ...state,
        myId: action.payload,
        loadingMyId: false,
      };
    case "open/profile/toggle":
      return {
        ...state,
        openProfile: !state.openProfile,
      };
    case "open/search/toggle":
      //todo show/hide instead open
      return {
        ...state,
        searchOpen: !state.searchOpen,
      };
    case "searchRequest/messages/start":
      return {
        ...state,
        searchValue: action.payload,
      };
    case "searchRequest/contacts/start":
      return {
        ...state,
        contactSearchValue: action.payload,
      };
    case "get/messageId/started":
      return {
        ...state,
        messageTempId: action.payload,
      };
    default:
      return state;
  }
}
