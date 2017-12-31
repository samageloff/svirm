import Immutable from 'immutable'

// For "plucking" Immutable properties as noted here:
// https://github.com/facebook/immutable-js/wiki/Predicates#pick--omit
export const keyIn = (...keys) => {
  let keySet = Immutable.Set(keys)

  return function (v, k) {
    return keySet.has(k)
  }
}

// usage: array.filter(keyIn(1, 2))
