export const isValidEmail = (email: string) => {
  // Regular expression pattern for valid email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};