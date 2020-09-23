import React from 'react';
import {connect} from "react-redux";
import ProfileRegistered from "./ProfileRegistered";

let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
}

const ProfileRegisteredContainer = connect(mapStateToProps, {})(ProfileRegistered);

export default ProfileRegisteredContainer;