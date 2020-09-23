import React from "react";
import {createField, Input, Textarea} from "./FormsControls/FormsControls";
import {reduxForm} from "redux-form";
// import style from "./FormsControls/FormsControls.module.css";
import style from "./ProfileDataForm.module.css";
import {
    required,
    validateAddress,
    validateEmail,
    validateName,
    validateNpi,
    validatePhone
} from "./utils/validators/validators";


const ProfileDataForm = ({handleSubmit, profile, error}) => {

    //debugger;


    return <form onSubmit={handleSubmit}>


        {/*{*/}
        {/*    error &&*/}
        {/*    <div className={style.formSummaryError}>*/}
        {/*        {error}*/}
        {/*    </div>*/}
        {/*}*/}
        <div className={style.wrapper}>
            <div className={style.registration_form}>
                <div className={style.title}>
                    Registration Form
                </div>
                <div className={style.form_wrap}>


                    <div className={style.input_wrap}>
                        <label>Full Name</label>
                        {createField("Full Name", "fullname", [required, validateName], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        <label>NPI Number</label>
                        {createField("NPI Number", "npinumber", [required, validateNpi], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        <label>Business Address</label>
                        {createField("Business Address", "businessaddress", [required, validateAddress], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        <label>Telephone Number</label>
                        {createField("Telephone Number", "telephonenumber", [required, validatePhone], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        <label>Email</label>
                        {createField("Email", "email", [required, validateEmail], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        <button className={style.submit_btn}>Register Now</button>
                    </div>


                    {/*<div>*/}
                    {/*    <b>Full Name</b>: {createField("Full Name", "fullname", [required, validateName], Input)}*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <b>NPI Number</b>: {createField("NPI Number", "npinumber", [required, validateNpi], Input)}*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <b>Business*/}
                    {/*        Address</b>: {createField("Business Address", "businessaddress", [required, validateAddress], Input)}*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <b>Telephone*/}
                    {/*        Number</b>: {createField("Telephone Number", "telephonenumber", [required, validatePhone], Input)}*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <b>Email</b>: {createField("Email", "email", [required, validateEmail], Input)}*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <button>Register</button>*/}
                    {/*</div>*/}


                </div>
            </div>
        </div>
        {/*<div>*/}
        {/*    <b>Looking for a job</b>:*/}
        {/*    {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <b>My professional skills</b>:*/}
        {/*    {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <b>About me</b>:*/}
        {/*    {createField("About me", "aboutMe", [], Textarea)}*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*/!*    <b>Contacts</b>: {Object.keys(profile.contacts).map(key =>{*!/*/}
        {/*/!*    return <div key={key} className = {s.contact}>*!/*/}
        {/*/!*    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>*!/*/}
        {/*/!*    </div>*!/*/}
        {/*/!*})}*!/*/}
        {/*</div>*/}
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;