import React from 'react';
import {Redirect} from "react-router-dom";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const Profile = (props) =>{

    //onSubmit is just calling thunk
    const onSubmit = (formData) => {
        props.saveProfile(formData);
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