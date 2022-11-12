import React, {useState, useEffect, useRef} from 'react';
import { swap } from '../../utils/arrayHelpers';
const Selection = ({bars,setBars,listSize, sort, setSort, delay}) => {
const [toSwap, settoSwap] = useState([0, 0])
const container = useRef(null);
const selectionSort = async () => {
  let list = bars
  const t0 = performance.now();
  for (let i = 0; i < list.length; i++) {
    let min = i;
    for (let j = min + 1; j < list.length; j++) {
      if(list[j] < list[min]) {
        list = swap(list, j, i)
        setBars(list)
        settoSwap([i, j])
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
      }
    }
  }
  setSort(false)
  const t1 = performance.now();
  console.log("selection sort took " + (t1 - t0) + " milliseconds.");
}

useEffect(() => {
  console.log(delay)
}, [delay])

useEffect(() => {
  if(sort){
    selectionSort();
  }
}, [sort])

  return (
    <>
    <div className='wrapper'>
      <div className='w-full flex h-4/5 justify-center pt-8 flex items-baseline' ref={container}>
          {
              bars.map((b, i)=> (
              <div key={i} className={`bar w-1 mr-1 relative bg-pink-100 ${toSwap[0] === i ? 'bg-red-500': ''} ${toSwap[1] === i ? 'bg-green-500': ''}`} style={{height: `${ b + 1 }px`, width:((container?.current?.offsetWidth - 500)/listSize) | '1px'}}><p className='label absolute hidden -top-8 text-2xs '>{b}</p></div>))
          }
      </div>
      
    </div>
    
    </>
  );
};

export default Selection;
