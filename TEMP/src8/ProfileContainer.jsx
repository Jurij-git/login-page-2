import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {saveProfile} from "./profileReducer";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    // refreshProfile(){
    //     let userId = this.props.match.params.userId;
    //     if (!userId){
    //         userId = this.props.authorizedUserId;
    //         if (!userId){
    //             this.props.history.push("/login");
    //         }
    //     }
    //     this.props.getUserProfile(userId);
    //     this.props.getStatus(userId);
    //
    // }
    
    // componentDidMount() {
    //     this.refreshProfile();
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     //avoild refresh cycle
    //     if(this.props.match.params.userId != prevProps.match.params.userId){
    //         this.refreshProfile();
    //     }
    // }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        //status={this.props.status}
                        //updateStatus={this.props.updateStatus}
                        //savePhoto={this.props.savePhoto}
        />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {saveProfile})//, //3
   // withRouter, //2
   // withAuthRedirect    //1
)(ProfileContainer);