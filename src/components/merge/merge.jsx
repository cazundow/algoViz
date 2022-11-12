import React, {useEffect,useState, useRef} from 'react'

const Merge = ({bars,setBars,listSize, sort, setSort, delay}) => {
    const container = useRef(null);
    const [toSwap, settoSwap] = useState([0,1])
    const [array, setArray] = useState(bars)
    const cBars = bars; 
    let full = bars;

    useEffect(() => {
      setArray(bars)
    }, [])
    

    const mergeSort = (array) => {
      const half = array.length / 2
      
      // Base case or terminating case
      if(array.length < 2){
        return array 
      }
     
      
      const left = array.splice(0, half)
      return merge(mergeSort(left),mergeSort(array))
    }

    const merge = (left, right) => {
      let arr = []
      // Break out of loop if any one of the array gets empty
      while (left.length && right.length) {
        
          setTimeout(() => {
            console.log('timer done')
            setBars([ ...arr, ...left, ...right ])
          }, delay)
          
          // Pick the smaller among the smallest element of left and right sub arrays 
          if (left[0] < right[0]) {
              arr.push(left.shift())  
          } else {
              arr.push(right.shift()) 
          }
      }
      
      // Concatenating the leftover elements
      // (in case we didn't go through the entire left or right array)
      return [ ...arr, ...left, ...right ]
  }
    let arr = [...bars];    
useEffect(() => {
  if(sort){
   
    // setBars(sorted)
    setBars(mergeSort(arr))
    setSort(false)
  
  }
}, [sort])




  return (
    <>
    <div className='wrapper'>
      <div className='w-full flex h-4/5 justify-center pt-8 flex items-baseline' ref={container}>
          {
             bars && bars.map((b, i)=> (
               <div key={i} className={`bar w-1 mr-1 relative bg-pink-100 ${toSwap[0] === i ? 'bg-red-500': ''} ${toSwap[1] === i ? 'bg-green-500': ''}`} style={{height: `${ b + 1 }px`, width:((container?.current?.offsetWidth - 500)/listSize) | '1px'}}><p className='label absolute hidden -top-8 text-2xs '>{b}</p></div>))
          }
      </div>
      
    </div>
    
    </>
  )
}

export default Merge