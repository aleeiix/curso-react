import Counter from './components/Counter'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <Counter initialCount={1} />

      <hr />

      <List />
    </div>
  );
}

export default App;
