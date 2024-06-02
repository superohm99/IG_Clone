export const validateUsername = (username: string): string => {
  const usernameRegex = /^[a-zA-Z0-9_\.]+$/;
  if (!username) return "Please choose a username.";
  if (!usernameRegex.test(username)) return "Usernames can only use Roman letters (a-z, A-Z), numbers, underscores, and periods";

  // check if username is already taken

  return "";
};

export const validatePassword = (password: string): string => {
  if (!password) return "Please choose a password.";
  if (password.length < 6) return "Password must be at least 6 characters long.";

  return "";
}

export const validatePhone = (phone: string): string => {
  const phoneRegex = /^[0-9]+$/;
  if (!phone) return "Please enter your phone number.";
  if (!phoneRegex.test(phone) || phone.length !== 10) return "Looks like your phone number may be incorrect. Please try entering your full number, including the country code.";

  return "";
}

export const validateEmail = (email: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Please enter your email.";
  if (!emailRegex.test(email)) return "Please enter a valid email.";

  return "";
}

export const validatePhoneOrUsernameOrEmail = (phoneOrUsernameOrEmail: string): string => {
  if (!phoneOrUsernameOrEmail) return "Please enter your phone number, username or email.";

  return "";
}

export const validateField = (title: string, value: string): string => {
  switch (title) {
    case "Username":
      return validateUsername(value);
    case "Password":
      return validatePassword(value);
    case "Phone":
      return validatePhone(value);
    case "Email":
      return validateEmail(value);
    case "Phone_or_Username_or_Email":
      return validatePhoneOrUsernameOrEmail(value);
    default:
      return "";
  }
};