import sha256 from 'sha256';

const keys = {
  token: 'chatpot-token',
  passphrase: 'chatpot-passphrase',
  session: 'chatpot-session'
};

const storeToken = (token: string): void =>
  localStorage.setItem(keys.token, token);

const fetchToken = (): string | null =>
  localStorage.getItem(keys.token);

const storePassphrase = (passphrase: string): void =>
  localStorage.setItem(keys.passphrase, passphrase);

const fetchPassphrase = (): string | null =>
  localStorage.getItem(keys.passphrase);

const storeSessionKey = (sessionKey: string): void =>
  localStorage.setItem(keys.session, sessionKey);

const fetchSessionKey = (): string | null =>
  localStorage.getItem(keys.session);

const generateRefreshToken = (): string =>
  sha256(`${fetchToken()}${fetchSessionKey()}${fetchPassphrase()}`);

export {
  storeToken,
  storePassphrase,
  storeSessionKey,
  fetchSessionKey,
  generateRefreshToken
};