import React, {useState, useEffect, useRef} from 'react'
import { swap } from '../../utils/arrayHelpers';

const Bubble = ({bars,setBars,listSize, sort, setSort, delay}) => {
    const [toSwap, settoSwap] = useState([0, 0, 0])
    const container = useRef(null);

     const bubbleSort = async () => {
        var t0 = performance.now();
        let list = bars
        for (let i = 0; i < list.length -1; i++) {
            for (let j = 0; j < list.length -1; j++) {
                if(i !== list.length && list[j] > list[j+1]){
                  setBars(list);
                    list = swap(list, j, j+1);
                    settoSwap([i, j, j+1]); 
                }
                await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay));
            }
        }
        setSort(false);
        var t1 = performance.now();
        console.log("bubble sort took " + (t1 - t0) + " milliseconds.");
        return
     }

     useEffect(() => {
       if(sort){
          bubbleSort();
       }
     }, [sort])
     
  return (
    <>
    <div className='wrapper'>
        <div className='header'>
        {/* <ul className='list'>
          {bars.map((b,i) => (<li key={i} className={`${toSwap.includes(i) ? 'red': null}`}>{b}</li>) )}
        </ul> */}
        
          
        </div>
      <div className='w-full flex h-4/5 justify-center pt-8 flex items-baseline'  ref={container}>
          {
              bars.map((b, i)=> (
         <div key={i} className={`bar w-1 mr-1 relative bg-pink-100 ${toSwap[0] === i || toSwap[2] === i ? 'bg-red-500': ''} ${toSwap[1] === i ? 'bg-green-500': ''}`} style={{height: `${ b + 1 }px`, width:((container.current?.offsetWidth - 500)/listSize) | '1px'}}><p className='label absolute hidden -top-8 text-2xs '>{b}</p></div>))
          }
      </div>
      
    </div>
    
    </>
  )
}

export default Bubble