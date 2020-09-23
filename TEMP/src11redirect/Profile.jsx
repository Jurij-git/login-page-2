import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {Redirect} from "react-router-dom";

const Profile = (props) =>{
    //if (!props.profile) {
    //    return <Preloader/>
    //}

    debugger;
    //yo1
    if (props.registered) {
        return <Redirect to={"/registered"}/>
    }

    return <div>
        <ProfileInfo //savePhoto={props.savePhoto}
                     //isOwner={props.isOwner}
                     profile={props.profile}
                     //status={props.status}
                     saveProfile={props.saveProfile}
                     //updateStatus={props.updateStatus}


        />
    </div>;
}

export default Profile;