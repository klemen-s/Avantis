import axios from "axios";

export function useLogin() {
  const url = "http://localhost:8000/login";

  async function sendLoginRequest(email, password) {
    try {
      const response = await axios.post(url, {
        email: email,
        password: password,
      });
      localStorage.setItem("jwt", response.data.jwt);
      localStorage.setItem("name", response.data.name);

      return { name: response.data.name };
    } catch (err) {
      if (err.response.data.emailError) {
        return {
          isEmailCorrect: false,
          emailErrorMessage: err.response.data.emailError,
        };
      }

      if (err.response.data.passwordError) {
        return {
          isPasswordCorrect: false,
          passwordErrorMessage: err.response.data.passwordError,
        };
      }
    }
  }

  return sendLoginRequest;
}
