import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useLogin = (userData) => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const login = (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";

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
