const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  loggedIn: localStorage.getItem("token") ? true : false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddAuth":
      // console.log("payload");
      // console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case "SET_AUTH_USER":
      // console.log("Ruser");
      // console.log(action.user);
      return {
        // ...state,
        user: action.user,
        loggedIn: true,
      };
    case "RemoveAuth":
      return initialState;
    default:
      return state;
  }
};
export default authReducer;