import React from 'react';
import style from "./ProfileDataForm.module.css";


const ProfileRegistered = (props) =>{
    if(props.registered == true) {

        return(
            <div className={style.wrapper}>
                <div className={style.registration_form}>
                    <div className={style.title}>
                        Registered Successfully
                    </div>
                    <div className={style.form_wrap}>

                        <div className={style.input_wrap}>
                            <label>Full Name</label>
                            {props.profile.fullname}
                        </div>
                        <div className={style.input_wrap}>
                            <label>NPI Number</label>
                            {props.profile.npinumber}
                        </div>
                        <div className={style.input_wrap}>
                            <label>Business Address</label>
                            {props.profile.businessaddress}
                        </div>
                        <div className={style.input_wrap}>
                            <label>Telephone Number</label>
                            {props.profile.telephonenumber}
                        </div>
                        <div className={style.input_wrap}>
                            <label>Email</label>
                            {props.profile.email}
                        </div>

                    </div>
                </div>
            </div>

        )
    }

    return null;
}

export default ProfileRegistered;