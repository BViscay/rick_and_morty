import styles from "./Form.module.css";
import { useState } from "react";
import { validation } from "./validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FormIMG from "../../img/imgform.png";

const openEye = <FontAwesomeIcon icon={faEye} />;
const closedEye = <FontAwesomeIcon icon={faEyeSlash} />;

const Signup = ({ login, isLogin }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }));
  };

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validation(userData);

    if (!Object.keys(errors).length > 0) {
      login(userData);
      setIsLogged(true);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.loginCard}>
        <img src={FormIMG} alt="imgForm" />
        <h2>Sign Up</h2>
        <form className={styles.loginForm}>
          <div className={styles.username}>
            <input
              className={styles.controlMail}
              type="text"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
            <div className={styles.spinner}></div>
          </div>
          <div className={styles.passwordContainer}>
            <input
              className={styles.controlPassword}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
            />
            <span className={styles.eyeIcon} onClick={passwordVisibility}>
              {showPassword ? openEye : closedEye}
            </span>
          </div>
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}

          <button
            onClick={handleSubmit}
            className={styles.button}
            type="button"
          >
            Submit
          </button>
        </form>
        {!isLogin && isLogged && (
          <div className={styles.invalidPasswordPopUp}>
            <p>La contraseña es inválida, intenta nuevamente.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
