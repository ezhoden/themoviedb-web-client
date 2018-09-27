import actionTypes from '../constants/actionTypes';

export const changeNavigationPath = (path) => ({ type: actionTypes.CHANGE_NAVIGATION_PATH, payload: path });