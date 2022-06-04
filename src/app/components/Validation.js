export const validation = (user) => {
  const errors = {};

  if (!user.name) {
    errors.name = 'Name is required';
  }
  if (!user.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
    errors.email = 'Invalid email address';
  }
  if (!user.password) {
    errors.password = 'Password is required';
  }
  if (!user.password_confirmation) {
    errors.password_confirmation = 'Confirm Password is required';
  } else if (user.password !== user.password_confirmation) {
    errors.password_confirmation = 'Passwords must match';
  }

  return errors;
};

export const validationLogin = (user) => {
  const errors = {};

  if (!user.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
    errors.email = 'Invalid email address';
  }
  if (!user.password) {
    errors.password = 'Password is required';
  }

  return errors;
};
