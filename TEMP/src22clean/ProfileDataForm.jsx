import React from "react";
import {createField, Input, Textarea} from "./FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "./ProfileDataForm.module.css";
import {
    required,
    validateAddress,
    validateEmail,
    validateName,
    validateNpi,
    validatePhone,
    maxLengthCreator
} from "./utils/validators/validators";


const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return <form onSubmit={handleSubmit}>

        <div className={style.wrapper}>
            <div className={style.registration_form}>
                <div className={style.title}>
                    Registration Form
                </div>
                <div className={style.form_wrap}>


                    <div className={style.input_wrap}>
                        <label>Full Name</label>
                        {createField("Full Name", "fullname", [required, validateName, maxLengthCreator(50)], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        <label>NPI Number</label>
                        {createField("NPI Number", "npinumber", [required, validateNpi, maxLengthCreator(50)], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        <label>Business Address</label>
                        {createField("Business Address", "businessaddress", [required, validateAddress, maxLengthCreator(50)], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        <label>Telephone Number</label>
                        {createField("Telephone Number", "telephonenumber", [required, validatePhone, maxLengthCreator(50)], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        <label>Email</label>
                        {createField("Email", "email", [required, validateEmail, maxLengthCreator(50)], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        {createField("", "confirm", [required], Input, {type: "checkbox"})}
                        <label>I agree with <a href="#">terms and conditions</a></label>
                    </div>

                    <div className={style.input_wrap}>
                        <button className={style.submit_btn}>Register Now</button>
                    </div>

                </div>
            </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;