
//import {stopSubmit} from "redux-form";

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const REGISTRATION_FINISHED = 'REGISTRATION-FINISHED';//yo1

let initialState = {
    profile: null,      //profile object with some fields
    registered: false   //registration succeed flag
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,   //copy state
                profile: action.profile   //update profile
            }
        }
        case REGISTRATION_FINISHED: {
            return {
                ...state,   //copy state
                registered: action.registered   //update registration succeed flag
            }
        }
        default:
            return state;
    }
}

//saving profile to store
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

//saving flag registration succeed
export const registrationFinished = (registered) => {
    return {
        type: REGISTRATION_FINISHED,
        registered
    }
}

//thunk to call some dispatches
export const saveProfile = (profile) => async (dispatch, getState) => {

    //there should be post to server API and get from server API if save succeeded to save to store
    //but since there is no server, saving to store immediately

    dispatch(setUserProfile(profile));
    dispatch(registrationFinished(true));
}

export default profileReducer;