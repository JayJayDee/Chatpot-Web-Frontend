const storeToken = async (token: string) => 0;
const fetchToken = async (): Promise<string> => '';

const storePassphrase = async (token: string) => 0;
const fetchPassphrase = async (): Promise<string> => '';

const createRefreshToken = async (): Promise<string> => '';

export {
  storeToken,
  fetchToken,
  storePassphrase,
  fetchPassphrase,
  createRefreshToken
};