export const validateUsername = (username: string): string => {
  const usernameRegex = /^[a-zA-Z0-9_\.]+$/;
  if (!username) return "Please choose a username";
  if (!usernameRegex.test(username)) return "Usernames can only use Roman letters (a-z, A-Z), numbers, underscores, and periods";
  return "";
};
