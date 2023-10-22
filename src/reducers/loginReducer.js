export function loginReducer(user, action) {
  switch (action.type) {
    case "login": {
      if (!localStorage.getItem("jwt")) {
        user.isLoggedIn = false;
        return;
      }
      user.isLoggedIn = localStorage.getItem("jwt") ? action.isLoggedIn : false;
      user.name = action.name;
      return user;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
