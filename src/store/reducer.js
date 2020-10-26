import * as actionTypes from './actions';
import config from './../config';

const initialState = {
    ...config,
    isFullScreen: false,
    wallet: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FULL_SCREEN :
            return {
                ...state,
                isFullScreen: !state.isFullScreen
            };
        case actionTypes.FULL_SCREEN_EXIT:
            return {
                ...state,
                isFullScreen: false
            };
        case actionTypes.LANGUAGE:
            return {
                ...state,
                lang: action.lang
            };
        case actionTypes.WALLET:
            return {
                ...state,
                wallet: action.wallet
            };
        default:
            return state;
    }
};

export default reducer;