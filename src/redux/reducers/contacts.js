const initialState = {
  items: [],
  contactSearchValue: "",
  loading: true,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case "contacts/load/started":
      return {
        ...state,
        loading: true,
      };
    case "contacts/load/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
