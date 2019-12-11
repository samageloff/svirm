const genArray = (length, start) => {
  const arr = Array.from(Array(length), (x, index) => index + start)
  
  return arr
}

const splitStart = (arr, index) => (arr.length / 2) + 1 <= index

const decrementFrom = r => r - 1

const generated = genArray(10, 2)

const split = splitStart(generated, 6)

console.log(decrementFrom(10))