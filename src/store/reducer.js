import * as actionTypes from './actions';
import config from './../config';

const initialState = {
    ...config,
    isFullScreen: false,
    ethAddress: null,
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
        case actionTypes.WEB3_RECEIVE_ACCOUNT:
            return {
                ...state,
                ethAddress: action.address
            };
        
        case actionTypes.WEB3_CHANGE_ACCOUNT:
            return {
                ...state,
                ethAddress: action.address
            };
        case actionTypes.WEB3_LOGOUT:
            return {
                ...state,
                ethAddress: null
            }
        default:
            return state;
    }
};

export default reducer;