
//import {stopSubmit} from "redux-form";

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const REGISTRATION_FINISHED = 'REGISTRATION-FINISHED';//yo1

let initialState = {
    profile: null,
    registered: false//yo1  //redirect flag to success page
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
        case REGISTRATION_FINISHED: {
            return {
                ...state,   //copy state
                registered: action.registered   //update registration final flag
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

//yo1
export const registrationFinished = (registered) => {
    return {
        type: REGISTRATION_FINISHED,
        registered
    }
}


//thunk
export const saveProfile = (profile) => async (dispatch, getState) => {
    //debugger;

    dispatch(setUserProfile(profile));
    dispatch(registrationFinished(true));//yo1

    //toze samoje, ved` profile eto gotovij object kotorij prishoil iz formi
    //     {
    //         fullname: profile.fullname,
    //         npinumber: profile.npinumber,
    //         businessaddress: profile.businessaddress,
    //         telephonenumber:profile.telephonenumber,
    //         email:profile.email
    //     }
    // ));

    //there should be 1. post to server. 2 get from server and save to store
    //but since there is no server, saving to store now

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