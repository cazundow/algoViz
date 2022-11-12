import {useState, useEffect} from 'react'; 
import './assets/main.css';
import Bubble from './components/bubble/bubble';
import Header from './components/header/header';
import Insertion from './components/insertion/insertion';
import Selection from './components/selection/selection';
import Merge from './components/merge/merge';
import {generateBars} from './utils/arrayHelpers'
const App = () =>{
  const [listSize, setlistSize] = useState(100);
  const [bars, setBars] = useState(generateBars(listSize));
  const [sortType, setSortType] = useState( { value: 'merge', label: 'Merge' }); 
  const [sort, setSort] = useState(false);
  const delay = Math.floor(500/listSize); 

  useEffect(() => {
    setBars(generateBars(listSize));
  }, [listSize, sortType])
  

  return (
    <div className="App pt-48">
      <Header sort={sort} setSort={setSort} listSize={listSize} setlistSize={setlistSize} setBars={setBars} setSortType={setSortType} sortType={sortType} />
      
      { sortType.value === 'selection' && <Selection delay={delay} sort={sort} setSort={setSort} listSize={listSize} bars={bars} setBars={setBars} />}
      { sortType.value === 'bubble' && <Bubble delay={delay} sort={sort} setSort={setSort} listSize={listSize} bars={bars} setBars={setBars}  />}
      { sortType.value === 'insertion' && <Insertion delay={delay} sort={sort} setSort={setSort} listSize={listSize} bars={bars} setBars={setBars}  />}
      { sortType.value === 'merge' && <Merge delay={delay} sort={sort} setSort={setSort} listSize={listSize} bars={bars} setBars={setBars}  />}

    </div>
  );
}

export default App;
