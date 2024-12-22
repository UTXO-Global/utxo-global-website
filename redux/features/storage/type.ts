export type StorageReducerType = {
  token: string;
  addressLogged: string;
  tokenExpired: number;
};

export const defaultStorageReducer: StorageReducerType = {
  addressLogged: "",
  token: "",
  tokenExpired: 0,
};
