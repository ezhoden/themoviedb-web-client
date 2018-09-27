import actionTypes from '../constants/actionTypes';

const initialState = {
    currentPath: '/'
}

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_NAVIGATION_PATH:
            return {
                currentPath: action.payload
            };
        default:
            return state;
    }
}

export default navigationReducer;