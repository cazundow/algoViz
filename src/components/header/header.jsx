import React,  {useState} from 'react';
import Select from 'react-select';
import {generateBars} from '../../utils/arrayHelpers'
const Header = ({sortType, setSortType, setBars, listSize, setlistSize, setSort, sort}) => {
  return (
    <header className={`${sort && 'pointer-events-none'} z-10 header flex w-full fixed items-center top-0 h-24 p-4 justify-center align-middle space-x-24`}>
        <button onClick={() => setBars(generateBars(listSize))} type='button' className='bg-secondary reset px-5 py-2 rounded-full text-white text-md h-fit'>
            Reset bars
        </button>
        <button onClick={() => setSort(true)} type='button' className='bg-primary reset px-5 py-2 rounded-full text-white h-fit'>
           Begin Sort
        </button>
        <div>
          <p className='text-xs'>Size/Speed</p>
          <input type="range" onChange={(e) => setlistSize(e.target.value * 10)} className='' min="1" max="10" value={listSize/10} className="slider align-middle h-fit bg-primary" id="myRange" />
        </div>
        
        <Select value={sortType} className='w-48 z-10' onChange={(e) => setSortType(e)} options={options} />
      </header>
  )
}

export default Header
const options = [
    { value: 'selection', label: 'Selection' },
    { value: 'bubble', label: 'Bubble' },
    { value: 'insertion', label: 'Insertion' },
    { value: 'merge', label: 'Merge' }
  ]