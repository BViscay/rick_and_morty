import { useState } from "react";
import { validation } from "../components/Form/validation";

export const useSignupForm = (login) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [property]: value });
    setErrors(validation({ ...formData, [property]: value }));
  };

  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validation(formData);

    if (!Object.keys(errors).length > 0) {
      login(formData);
    }
    setErrors({
      ...errors,
      login: "Invalid email or password pista: AAbb1234",
    });
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
  };
};
