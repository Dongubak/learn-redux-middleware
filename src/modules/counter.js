import { createAction, handleAction, handleActions } from 'redux-actions';
import {} from 'redux';
import {} from 'react-redux';

const INCREASE = 'counter/increase';
const DECREASE = 'counter/decrease';

const initialState = {
    number: 0
};

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
}
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
}

const counter = handleActions(
    {
        [INCREASE]: state => ({ number: state.number + 1 }),
        [DECREASE]: state => ({ number: state.number - 1 }),
    },
    initialState
);

export default counter;