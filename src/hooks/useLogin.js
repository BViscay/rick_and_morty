import { useState } from "react";
import { useNavigate } from "react-router-dom";

const user = {
  email: "mail@gmail.com",
  password: "AAbb1234",
};

const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password === user.password && userData.email === user.email) {
      setIsLogin(true);
      navigate("/home");
    }
  };

  return { isLogin, login };
};

export default useLogin;
