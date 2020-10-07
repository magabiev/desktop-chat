const initialState = {
  items: [],
  loading: true,
  requestId: 1,
  deleting: false,
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case "chat/load/started":
      return {
        ...state,
        open: true,
        loading: true,
      };
    case "chat/load/succeed":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case "messages/send/started":
      const tempMessage = {
        ...action.payload,
        sending: true,
      };
      return {
        ...state,
        requestId: state.requestId + 1,
        items: [...state.items, tempMessage],
      };
    case "messages/send/succeed":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.requestId === action.payload.requestId) {
            return {
              ...item,
              sending: false,
              _id: action.payload._id,
            };
          }
          return item;
        }),
      };
    case "message/delete/started":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
        deleting: true,
      };
    case "message/delete/succeed":
      return {
        ...state,
        items: action.payload,
        deleting: false,
      };
    default:
      return state;
  }
}
