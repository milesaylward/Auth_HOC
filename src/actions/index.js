import { CHANGE_AUTH } from './types'

export const Authenticate = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
