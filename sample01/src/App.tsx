import React from 'react';

import Contador from './Contador';
import Issues from './Issues';
import IssuesOld from './Issues.old';

function App() {
  return (
    <>
      <h2>React Concatel</h2>
      <Contador />

      <hr />

      <h2>Issues (Componente tipo funcion)</h2>
      <Issues />

      <hr />

      <h2>Issues (Componente tipo clase)</h2>
      <IssuesOld />
    </>
  );
}

export default App;