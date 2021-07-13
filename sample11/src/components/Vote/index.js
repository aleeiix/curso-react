import PropTypes from 'prop-types';
import * as React from 'react';
import thumbsUp from './images/thumbs-up.svg';
import thumbsDown from './images/thumbs-down.svg';

const Vote = ({totalGlobalLikes}) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'LIKE':
                return {
                    ...state,
                    totalLikes: Number(state.totalLikes) + 1,
                    hasVoted: true,
                    clickedLike: true
                };
            case 'DISLIKE':
                return {
                    ...state,
                    totalLikes: Number(state.totalLikes) -1,
                    hasVoted: true,
                    clickedDislike: true
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = React.useReducer(reducer, {
        totalLikes: totalGlobalLikes,
        hasVoted: false,
        clickedLike: false
    });

    const handleLikeVote = () => dispatch({type: 'LIKE'})

    const handleDislikeVote = () => dispatch({type: 'DISLIKE'})

    const {totalLikes, hasVoted, clickedLike, clickedDislike} = state;

    return (
        <div>
            <h4>Note: You are not allowed to change your vote once selected!</h4>
            <button onClick={handleLikeVote} disabled={hasVoted} style={clickedLike ? {background: 'green'} : null}>
                <img src={thumbsUp} alt="thumbs up" />
            </button>
            <div>
                Total likes: {totalLikes}
            </div>
            <button onClick={handleDislikeVote} disabled={hasVoted} style={clickedDislike ? {background: 'red'} : null}>
                <img src={thumbsDown} alt="thumbs down" />
            </button>
        </div>
    )
}

Vote.propTypes = {
    totalGlobalLikes: PropTypes.number.isRequired
}

export default Vote
