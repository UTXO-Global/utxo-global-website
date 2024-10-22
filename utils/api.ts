import Axios from "axios";
import { toast } from "react-toastify";
import { reset } from "@/redux/features/storage/action";
import { isAddressEqual } from "./helpers";
import { DEFAULT_NETWORK } from "@/configs/common";
import { NETWORK_API_URL } from "@/configs/network";

let store: any;
export const injectStore = (_store: any) => {
  store = _store;
};

let api = Axios.create({ baseURL: DEFAULT_NETWORK === "nervos" ? NETWORK_API_URL.Mainnet : NETWORK_API_URL.Testnet });

api.interceptors.request.use(
  async (config) => {
    const token = store.getState().storage.token;
    const addressLogged = store.getState().storage.addressLogged;
    const currentAddresses = await (window as any).utxoGlobal.ckbSigner.getAccount();
    const currentAddress = currentAddresses ? currentAddresses[0] : "";
    if (!!addressLogged && !currentAddress) {
      store.dispatch(reset());
      return Promise.reject({
        response: {
          data: "Your account has been changed. Please reconnect your wallet.",
        },
      });
    }
    if (!!addressLogged && !!currentAddress) {
      if (isAddressEqual(addressLogged, currentAddress)) {
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      } else {
        store.dispatch(reset());
        return Promise.reject({
          response: {
            data: "Your account has been changed. Please reconnect your wallet.",
          },
        });
      }
    }
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error): any => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const response = error?.response;
    const status = response?.status;
    const handleAuthorization = () => {
      // toast("Unauthorization. Please login again!", {
      //   type: "error",
      //   autoClose: 3000,
      // });
      store.dispatch(reset());
    };
    switch (status) {
      case 401:
        handleAuthorization();
        break;
      default:
        toast(response.data, {
          type: "error",
          autoClose: 3000,
        });
        break;
    }
    return Promise.reject(error);
  }
);

export default api;
