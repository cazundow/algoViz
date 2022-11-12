export const swap = (array, index1, index2) => {
  const temp = array[index1]

  array[index1] = array[index2]
  array[index2] = temp
  return array
}

export const generateBars = (listSize) => {

  let bars = []
  for (let i = 0; i < listSize; i++) {
  const b =Math.floor(Math.random() * (window.innerHeight - 350)) + 1 
  bars = [...bars, b]
}

return bars

}