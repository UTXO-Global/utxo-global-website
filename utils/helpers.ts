import { toast } from "react-toastify";

export const isValidEmail = (email: string) => {
  // Regular expression pattern for valid email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const comingSoonMsg = () => {
  toast.info("Coming Soon!");
};

export const formatNumber = (amount: number): string => {
  return new Intl.NumberFormat("en-US").format(amount);
};

export const formatEmail = (email: string): string => {
  return email.slice(0, 2) + "******" + email.slice(email.indexOf("@"));
};
