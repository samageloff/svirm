import { put } from 'redux-saga/effects'

export function* handleError() {
  return false
}

export default [
  fork(handleError)
]