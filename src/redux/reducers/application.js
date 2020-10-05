const initialState = {
  searchOpen: false,
  searchValue: "",
  contactSearchValue: "",
  openContactProfile: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "profile/open/toggle":
      return {
        ...state,
        openContactProfile: !state.openContactProfile,
      };
    case "search/show/hide/toggle":
      return {
        ...state,
        searchOpen: !state.searchOpen,
      };
    case "messages/searchRequest/start":
      return {
        ...state,
        searchValue: action.payload,
      };
    case "contacts/searchRequest/start":
      return {
        ...state,
        contactSearchValue: action.payload,
      };
    default:
      return state;
  }
}
