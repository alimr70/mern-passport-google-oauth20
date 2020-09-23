export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: action.data.isAuthenticated,
        user: action.data.user,
      };

    default:
      return state;
  }
};
