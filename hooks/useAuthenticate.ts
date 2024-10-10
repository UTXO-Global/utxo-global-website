import { useContext, useMemo } from "react";
import { useAppSelector } from "@/redux/hook";
import { selectStorage } from "@/redux/features/storage/reducer";
import { isAddressEqual } from "@/utils/helpers";
import { AppContext } from "@/providers/app-provider";

const useAuthenticate = () => {
  const { address } = useContext(AppContext);

  const { addressLogged, token } = useAppSelector(selectStorage);

  const isLoggedIn = useMemo(() => {
    return !!token && isAddressEqual(address, addressLogged);
  }, [address, addressLogged, token]);

  return { isLoggedIn };
};

export default useAuthenticate;
