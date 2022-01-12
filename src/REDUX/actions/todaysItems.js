import axios from "axios";

export const fetchTodaysItems = () => async (dispatch) => {
  dispatch({ type: "ITEMS_LOADING" });
  try {
    let result = await axios.get("/https://fortnite-api.com/v2/shop/br", {});
    if (result.status === 200) {
      dispatch({
        type: "FETCH_ITEMS",
        payload: result.data,
      });
    }
  } catch (error) {
    dispatch({ type: "ITEMS_ERROR", payload: error.response.status });
  }
};
