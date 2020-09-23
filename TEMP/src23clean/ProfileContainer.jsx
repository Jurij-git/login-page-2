import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {saveProfile} from "./profileReducer";

//container to connect state with form
class ProfileContainer extends React.Component{

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        registered={this.props.registered}
        />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    registered: state.profilePage.registered
});

export default  connect(mapStateToProps, {saveProfile})(ProfileContainer);