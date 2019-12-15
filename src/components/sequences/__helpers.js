const generateArray = (length, start) => {
  const arr = Array.from(Array(length), (x, index) => index + start)
  
  return arr
}

generateArray(4, 0)
generateArray(4, 1)
generateArray(4, 2)
generateArray(4, 3)

generateArray(4, -1).reverse()
generateArray(4, 0).reverse()
generateArray(4, 1).reverse()
generateArray(4, 2).reverse()
