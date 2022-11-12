import React, {useState, useEffect, useRef} from 'react'
import { swap } from '../../utils/arrayHelpers';
const Insertion = ({bars,setBars,listSize, sort, setSort, delay}) => {
    const container = useRef(null);
    const [toSwap, settoSwap] = useState([0,1])
    
     const insertionSort = async() => {
         let list = bars;
         var t0 = performance.now(); 
         for (let i = 1; i < list.length; i++) {
             for (let j = i; j >= 0 ; j--) {
                if(j >= 1 && list[j] < list[j-1]){
                  list = swap(list, j, j-1);
                  setBars(list)
                  settoSwap([i, j-1])
                  await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, delay)
                  );
                 }
             }
           
                
             
         }
         setSort(false);
         var t1 = performance.now();
        console.log("insertion sort took " + (t1 - t0) + " milliseconds.");
         return setBars(list)
     }

     useEffect(() => {
       if(sort){
        insertionSort();
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
  )
}

export default Insertion