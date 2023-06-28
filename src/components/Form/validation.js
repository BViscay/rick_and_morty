const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i;

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;

export const validation = (userData) => {
  const errors = {};
  if (!userData.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!regexEmail.test(userData.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!regexPassword.test(userData.password)) {
    errors.password = "Debe ingresar una constraseña correcta";
  }
  return errors;
};
