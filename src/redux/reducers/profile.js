const initialState = {
  profile: [],
};

//TODO изменить названия  тайпов экшенов

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "get/item/succeed":
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}
