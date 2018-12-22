export const arrayFromNumber = num => Array.apply(null, {length: num}).map(Number.call, Number)

export const sliceArrayFrom = arr => {
  if (arr.length <= 4) {
    return [
      arr.slice(arr[0], arr[4])
    ]
  }
  if (arr.length >= 4 && arr.length <= 8) {
    return [
      arr.slice(arr[0], arr[4]),
      arr.slice(arr[4], arr[8])
    ]
  }
  if (arr.length >= 8 && arr.length <= 12) {
    return [
      arr.slice(arr[0], arr[4]),
      arr.slice(arr[4], arr[8]),
      arr.slice(arr[8], arr[12])
    ]
  }
  if (arr.length >= 12 && arr.length <= 16) {
    return [
      arr.slice(arr[0], arr[4]), 
      arr.slice(arr[4], arr[8]), 
      arr.slice(arr[8], arr[12]), 
      arr.slice(arr[12], arr[16])
    ]
  }
}

export const nodeListToArray = arr => [].slice.call(arr)
