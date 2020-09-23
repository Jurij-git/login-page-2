import React from 'react';
import {Redirect} from "react-router-dom";
import ProfileDataForm from "./ProfileDataForm";

const Profile = (props) =>{
    //if (!props.profile) {
    //    return <Preloader/>
    //}

    debugger;
    //yo1
    if (props.registered) {
        return <Redirect to={"/registered"}/>
    }

    // return <div>
    //     <ProfileInfo //savePhoto={props.savePhoto}
    //                  //isOwner={props.isOwner}
    //                  profile={props.profile}
    //                  //status={props.status}
    //                  saveProfile={props.saveProfile}
    //                  //updateStatus={props.updateStatus}
    //
    //
    //     />
    // </div>;

    //onSubmit just calls callbacked thunk
    const onSubmit = (formData) => {
        props.saveProfile(formData);
        // saveProfile(formData).then(
        //     () => {
        //         //setEditMode(false);
        //     }
        // );
    }

    return (
        <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>

    )
}

export default Profile;