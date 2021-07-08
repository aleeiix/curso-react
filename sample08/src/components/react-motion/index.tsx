import {Motion, spring} from 'react-motion';

const TransitionMotion= () => {
    return (
        <Motion defaultStyle={{opacity: 0.01}} style={{opacity: spring(1)}}>
            {interpolationStyle => (
                <h2 style={interpolationStyle}>Animacion Motion</h2>
            )}
        </Motion>
    )
}

export default TransitionMotion;