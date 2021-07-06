import GeolocationContainer from './components/GeolocationContainer';
import GeolocationMiamiContainer from './components/GeolocationMiamiContainer';
import MyComponent from './hoc';

function App() {
  return (
    <>
      <h2>Mi Localizacion</h2>
      <GeolocationContainer />

      <h2>Localizacion Miami</h2>
      <GeolocationMiamiContainer />

      <h2>HOC</h2>
      <MyComponent />
    </>
  );
}

export default App;
