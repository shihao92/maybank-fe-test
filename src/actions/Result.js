import { STORE_RESULTS } from './types'

export const storeResults = payload => ({
  type: STORE_RESULTS,
  payload
})