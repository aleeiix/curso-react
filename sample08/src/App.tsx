import Uncontrolled from './components/uncontrolled';
import Controlled from './components/controlled';
import {Button, ButtonSingleHandler} from './components/events'
import Focus from './components/refs'
import Transition from './components/animations'
import TransitionMotion from './components/react-motion'
import Circle from './components/svg/circle'
import FontSize from './components/inline-styles'
import StyledButton from './components/styled-components'

function App() {
  return (
    <div className="App">
      <h3>Form Uncontrolled</h3>
      <Uncontrolled />

      <hr />

      <h3>Form Controlled</h3>
      <Controlled />

      <hr />

      <h3>Events</h3>
      <Button />
      <ButtonSingleHandler />

      <hr />

      <h3>Refs</h3>
      <Focus />

      <hr />

      <h3>Animations</h3>
      <Transition />
      <TransitionMotion />

      <hr />

      <h3>Svg</h3>
      <Circle x={50} y={50} radius={50} />
      <Circle x={50} y={50} radius={50} fill="blue" />

      <hr />

      <h3>Styles</h3>
      <FontSize />
      <StyledButton>Test</StyledButton>

    </div>
  );
}

export default App;
