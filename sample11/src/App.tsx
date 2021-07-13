import './App.css';
import Travel from './components/Travel';
import Vote from './components/Vote';
import ShowInformation from './components/ShowInformation';

function App() {
  return (
    <div className="App">
      <Travel />
      <hr />
      <Vote totalGlobalLikes={20} />
      <hr />
      <ShowInformation />
    </div>
  );
}

export default App;
