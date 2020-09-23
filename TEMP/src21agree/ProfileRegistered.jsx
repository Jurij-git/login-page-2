import React from 'react';
import style from "./ProfileDataForm.module.css";
import {createField, Input} from "./FormsControls/FormsControls";
import {required, validateName} from "./utils/validators/validators";

const ProfileRegistered = (props) =>{
    if(props.registered == true) { //return <div>Registration Incomplete!</div>;

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


{/*    <div>*/}
{/*    <div>*/}
{/*        <div>*/}
{/*            <b>Registered Successfully with following credentials</b>:*/}
{/*        </div>*/}
{/*        <div>*/}
{/*            <b>Full Name</b>: {props.profile.fullname}*/}
{/*        </div>*/}
{/*        <div>*/}
{/*            <b>NPI Number</b>: {props.profile.npinumber}*/}
{/*        </div>*/}
{/*        <div>*/}
{/*            <b>Business Address</b>: {props.profile.businessaddress}*/}
{/*        </div>*/}
{/*        <div>*/}
{/*            <b>Telephone Number</b>: {props.profile.telephonenumber}*/}
{/*        </div>*/}
{/*        <div>*/}
{/*            <b>Email</b>: {props.profile.email}*/}
{/*        </div>*/}
{/*    </div>*/}
{/*</div>*/}