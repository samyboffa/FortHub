import axios from "axios";

export const fetchTodaysItems = () => async (dispatch) => {
  dispatch({ type: "ITEMS_LOADING" });
  try {
    let result = await axios.get("https://fortnite-api.com/v2/shop/br");
    // console.log("*************************************");

    // console.log(result.data.data.featured.entries.length);
    dispatch({
      type: "FETCH_ITEMS",
      payload: [
        ...result.data.data.daily.entries,
        ...result.data.data.featured.entries,
      ],
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ITEMS_ERROR", payload: error });
  }
};
