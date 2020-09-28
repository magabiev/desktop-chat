const initialState = {
  items: [],
  contactSearchValue: "",
  loading: true,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case "load/sidebar/started":
      return {
        ...state,
        loading: true,
      };
    case "load/sidebar/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
