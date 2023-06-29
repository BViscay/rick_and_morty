import { useState } from "react";

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

  return { isLogin, login };
};

export default useLogin;
