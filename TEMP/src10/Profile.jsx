import React from 'react';
import ProfileInfo from "./ProfileInfo";

const Profile = (props) =>{
    //if (!props.profile) {
    //    return <Preloader/>
    //}

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