import { STORE_USER_SEARCHES } from './types'

export const storeUserSearches = payload => ({
  type: STORE_USER_SEARCHES,
  payload
})