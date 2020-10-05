const initialState = {
  myId: "",
  loadingMyId: true,
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "myProfile/load/started":
      return {
        ...state,
        loadingMyId: true,
      };
    case "myProfile/load/succeed":
      return {
        ...state,
        myId: action.payload._id,
        loadingMyId: false,
      };
    default:
      return state;
  }
}
