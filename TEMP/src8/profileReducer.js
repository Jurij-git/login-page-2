
import {stopSubmit} from "redux-form";

const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    profile: null
};

const profileReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,   //copy state
                profile: action.profile   //update profile
            }
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}


//thunk
export const saveProfile = (profile) => async (dispatch, getState) => {
    //const userId = getState().auth.userId;
    //let response = await profileAPI.saveProfile(profile);
    //if (response.data.resultCode === 0) {
    //    //server does not return data in this case, so we get manually
    //    dispatch(getUserProfile(userId));
    //} else{
    //    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
    //    return Promise.reject(response.data.messages[0]);
    //}
}

export default profileReducer;