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
    case "logout": {
      localStorage.removeItem("jwt");
      localStorage.removeItem("name");
      localStorage.removeItem("userId");

      user.isLoggedIn = false;
      user.name = "";
      user.userId = "";
      return user;
    }
    case "checkLogin": {
      if (localStorage.getItem("jwt") && localStorage.getItem("name")) {
        user.isLoggedIn = true;
        user.name = localStorage.getItem("name");
      }
      return user;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
