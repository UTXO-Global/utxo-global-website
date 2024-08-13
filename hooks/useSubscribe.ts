import { useState } from "react";
import { useTranslation } from "next-export-i18n";

import { isValidEmail } from "@/utils/helpers";
import { toast } from "react-toastify";

const useSubscribe = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const subscribe = async (email: string, cb?: () => void) => {
    setIsLoading(true);
    try {
      if (!isValidEmail(email))
        return toast.info(t("subscribe.emailIsNotValid"));

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
      toast.success(t("subscribe.subscribed"));
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
