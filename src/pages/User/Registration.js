import { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import {Button} from 'react-bootstrap';

const Registration = () => {

    const [nidNumber, setNidNumber] = useState('');
    const [faceRecognition, setFaceRecognition] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [userStatus, setUserStatus] = useState('');

    const [nidNumberError , setNidNumberError] = useState('');
    const [phoneNumberError , setPhoneNumberError] = useState('');
    const [otpError , setOTPError] = useState('');

    const registerUser = (e) =>{
        e.preventDefault();
        if(nidNumber !== '' || nidNumber !== null && phoneNumber !== '' || phoneNumber !== null && otp !== '' || otp !== null)
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
            setPhoneNumberError('Phone Number is required!');
            setOTPError('OTP is required!');
        }
        
    }

    return(
        <div>
            <div className="row justify-content-center pt-5">
                <div className="col-sm-4">
                    <div className="card p-4">
                    <h2 className="align-items-center text-center text-primary ">Registration</h2>
                        <div className="mb-3">
                            <label htmlFor="nidNumber" className="form-label">NID</label>
                            <input type="text" name="nidNumber" id="nidNumber" value={nidNumber} onChange={(e)=>{setNidNumber(e.target.value)}} className="form-control"  placeholder="Enter NID" />
                             {nidNumberError !== '' || nidNumberError !== null ? nidNumberError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="faceRecognition" className="form-label text-center">Face Recognition</label>
                            <input type="text" name="faceRecognition" id="faceRecognition" value={faceRecognition} onChange={(e)=>{setFaceRecognition(e.target.value)}} className="form-control"  placeholder="Enter Face Recognition" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="text" name="phoneNumber" id="phoneNumber"  value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} className="form-control"  placeholder="Enter Phone" />
                            {phoneNumberError !== '' || phoneNumberError !== null ? phoneNumberError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="otp" className="form-label">OTP</label>
                            <input type="text" name="otp" id="otp" value={otp} onChange={(e)=>{setOTP(e.target.value)}} className="form-control"  placeholder="Enter OTP" />
                            {otpError !== '' || otpError !== null ? otpError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="userStatus" className="form-label">Status</label>
                            <input type="text" name="userStatus" id="userStatus" value={userStatus} onChange={(e)=>{setUserStatus(e.target.value)}} className="form-control"  placeholder="Enter Status" />
                        </div>  

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                            Submit
                            </Button>
                        </div>

                        <div className="mt-3">
                            <p className="mb-0  text-center">
                                Already have an account??{' '}
                                <a href="{''}" className="text-primary fw-bold">
                                Sign In
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Registration;