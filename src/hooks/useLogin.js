import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const user = {
  email: "brunoviscay@gmail.com",
  password: "AAbb1234",
};

const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const login = (userData) => {
    if (userData.password === user.password && userData.email === user.email) {
      setIsLogin(true);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/home");
    }
  }, [isLogin, navigate]);

  return { isLogin, login };
};

export default useLogin;
