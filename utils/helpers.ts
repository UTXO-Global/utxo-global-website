import { toast } from "react-toastify";

export const isValidEmail = (email: string) => {
  // Regular expression pattern for valid email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const comingSoonMsg = () => {
  toast.info("Coming Soon!");
};

export function shortAddress(address?: string, len = 5) {
  if (!address) return "";
  if (address.length <= len * 2) return address;
  return address.slice(0, len) + "..." + address.slice(address.length - len);
}

export const isAddressEqual = (address01: string, address02: string) => {
  return address01.trim().toLowerCase() === address02.trim().toLowerCase();
};

export const formatNumber = (number: number, minPrecision = 0, maxPrecision = 8) => {
  const options = {
    minimumFractionDigits: minPrecision,
    maximumFractionDigits: maxPrecision,
  };
  return number.toLocaleString(undefined, options);
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
