import './App.css';

import useObservable from './hooks';
import getData from './api';
import List from './components/List';

function App() {
  const [names, dispatch] = useObservable(getData)

  const handlePrev = () => {
    dispatch('back');
  }

  const handleNext = () => {
    dispatch('forward');
  }

  return (
    <div className="App">
      <h2>Integracion RxJS en React</h2>
      <List items={names} />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
