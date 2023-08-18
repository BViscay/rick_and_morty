import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL_LOGIN } from "../Config/api";

const useLogin = (userData) => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const login = (userData) => {
    const { email, password } = userData;
    const URL = API_URL_LOGIN;

    axios
      .get(URL, {
        params: {
          email: email,
          password: password,
        },
      })
      .then(({ data }) => {
        const { access } = data;
        if (access) {
          setIsLogin(true);
          navigate("/home");
        }
      });
  };

  return { isLogin, login };
};

export default useLogin;
