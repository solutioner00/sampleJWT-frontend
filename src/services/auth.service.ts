import HttpClient from "./http-client";

export const AuthService = (function () {
  const login = async (email: any, password: any) => {
    return await HttpClient.post("/auth/login", {
      email,
      password
    });
  };

  return {
    login,
  };
})();
