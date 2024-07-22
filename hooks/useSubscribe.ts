import { useState } from "react";

import { isValidEmail } from "@/utils/helpers";
import { toast } from "react-toastify";

const useSubscribe = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const subscribe = async (email: string, cb?: () => void) => {
    setIsLoading(true);
    try {
      if (!isValidEmail(email)) return toast.info("Email is not valid.");

      const form = new FormData();
      form.append("email", email);
      form.append("app", "utxoglobal");

      const options = {
        method: "POST",
      };

      (options as any).body = form;

      await fetch(
        "https://script.google.com/macros/s/AKfycbxzEuWYH0T1Wes0Vf-EbzIKU84IrcVXUOVs0aTPJhwM1_h7xJi0IEgZFvqGSBAgIjw/exec",
        options
      );
      cb?.();
      toast.success("Subscribed");
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    subscribe,
  };
};

export default useSubscribe;
