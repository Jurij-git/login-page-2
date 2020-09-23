import React from 'react';
import {connect} from "react-redux";
import ProfileRegistered from "./ProfileRegistered";

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        registered: state.profilePage.registered
    }
}

//container to connect state with registered form
const ProfileRegisteredContainer = connect(mapStateToProps, {})(ProfileRegistered);

export default ProfileRegisteredContainer;