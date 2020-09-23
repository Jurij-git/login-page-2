import React from 'react';


const ProfileRegistered = (props) =>{

    return <div>
        <div>
            <div>
                <b>Registered Successfully with following credentials</b>:
            </div>
            <div>
                <b>Full Name</b>: {props.profile.fullname}
            </div>
            <div>
                <b>NPI Number</b>: {props.profile.npinumber}
            </div>
            <div>
                <b>Business Address</b>: {props.profile.businessaddress}
            </div>
            <div>
                <b>Telephone Number</b>: {props.profile.telephonenumber}
            </div>
            <div>
                <b>Email</b>: {props.profile.email}
            </div>
        </div>
    </div>
}

export default ProfileRegistered;