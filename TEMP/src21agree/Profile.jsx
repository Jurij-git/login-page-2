import React from 'react';
import {Redirect} from "react-router-dom";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const Profile = (props) =>{
    //if (!props.profile) {
    //    return <Preloader/>
    //}

    debugger;
    //yo1
    //if (props.registered) {
    //    return <Redirect to={"/registered"}/>
    //}

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

    //onSubmit is just calling thunk
    const onSubmit = (formData) => {
        props.saveProfile(formData);
        // saveProfile(formData).then(
        //     () => {
        //         //setEditMode(false);
        //     }
        // );
    }

    if(props.registered == false)
    {
        return (
            <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>

        )
    }

    return null;
}

export default Profile;