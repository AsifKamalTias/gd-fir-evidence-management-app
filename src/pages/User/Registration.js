import { useState } from "react";
import axios from "axios";

const Registration = () => {

    const [nidNumber, setNidNumber] = useState('');
    const [faceRecognition, setFaceRecognition] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [userStatus, setUserStatus] = useState('');

    const [nidNumberError , setNidNumberError] = useState('');

    const registerUser = (e) =>{
        e.preventDefault();
        if(nidNumber !== '' || nidNumber !== null)
        {
            const data = {
                nidNumber : nidNumber,
                faceRecognition: faceRecognition,
                phoneNumber: phoneNumber,
                otp: otp,
                useStatus : userStatus
            }
            axios.post('http://127.0.0.1:3100/api/users/create', data)
            .then(
                (success)=>{
                    console.log(success);
                },
                (error)=>{
                    console.log(error);
                }
            )
        }
        else{
            setNidNumberError('Nid Number is required!');
        }
        
    }

    return(
        <div>
            <h1>Registration</h1>
            <form method="POST" onSubmit={registerUser}>
                <label htmlFor="nidNumber">NID</label>
                <input type="text" name="nidNumber" id="nidNumber" value={nidNumber} onChange={(e)=>{setNidNumber(e.target.value)}}/>
                {nidNumberError !== '' || nidNumberError !== null ? nidNumberError : ''}
                <label htmlFor="faceRecognition">Face Recognition</label>
                <input type="text" name="faceRecognition" id="faceRecognition" value={faceRecognition} onChange={(e)=>{setFaceRecognition(e.target.value)}}/>

                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name="phoneNumber" id="phoneNumber"  value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>

                <label htmlFor="otp">OTP</label>
                <input type="text" name="otp" id="otp" value={otp} onChange={(e)=>{setOTP(e.target.value)}}/>

                <label htmlFor="userStatus">Status</label>
                <input type="text" name="userStatus" id="userStatus" value={userStatus} onChange={(e)=>{setUserStatus(e.target.value)}}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Registration;