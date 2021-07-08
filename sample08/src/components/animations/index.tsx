import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Transitions.css';

const Transition = () => {
    return (
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
            <h2>Concatel - Welcome to React Animations</h2>
        </ReactCSSTransitionGroup>
    )
}

export default Transition;