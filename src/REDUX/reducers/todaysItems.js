const initialState = {
  loading: false,
  items: [],
  error: null,
};

// pure function=> (state, {type,payload})=>
export const todaysItems = (state = initialState, action) => {
  switch (action.type) {
    case "ITEMS_LOADING":
      return { ...state, loading: true };
    case "FETCH_ITEMS":
      let items = [];
      return { ...state, items: action.payload, loading: false };
    case "ITEMS_ERROR":
      return { ...state, loading: false };
    default:
      return state;
  }
};
