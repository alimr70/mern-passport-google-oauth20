import axios from "axios";

export const authReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      axios({
        method: "GET",
        url: "/api",
      }).then((res) => console.log(res));
      return state;

    default:
      return state;
  }
};
