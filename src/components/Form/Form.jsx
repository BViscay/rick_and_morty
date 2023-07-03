import styles from "./Form.module.css";
import { useSignupForm } from "../../hooks/useSingUpForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FormIMG from "../../img/imgform.png";

const openEye = <FontAwesomeIcon icon={faEye} />;
const closedEye = <FontAwesomeIcon icon={faEyeSlash} />;

const Signup = ({ login, isLoginForm }) => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
  } = useSignupForm(login);

  return (
    <div className={styles.overlay}>
      <div className={styles.loginCard}>
        <img src={FormIMG} alt="imgForm" />
        <h2>{isLoginForm ? "Log In" : "Sign Up"}</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.username}>
            <input
              className={styles.controlMail}
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
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
              type={formData.showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
              {formData.showPassword ? openEye : closedEye}
            </span>
          </div>
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}

          <button className={styles.button} type="submit">
            {isLoginForm ? "Log In" : "Sign Up"}
          </button>
        </form>
        {!isLoginForm && errors.login && (
          <div className={styles.invalidPasswordPopUp}>
            <p>{errors.login}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
