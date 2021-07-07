import IssueProvider from './contexts/Issue'
import Issues from './components/Issues'

function App() {
  const url = 'https://api.github.com/repos/ContentPI/ContentPI/issues';

  return (
    <>
      <IssueProvider url={url}>
        <h1>Issues from Context</h1>
        <Issues />
      </IssueProvider>
    </>
  );
}

export default App;
