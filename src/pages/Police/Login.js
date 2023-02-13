import { useState } from "react";
import axios from "axios";
import {Button} from 'react-bootstrap';
import Header from "../../components/Header";

const Login = () => {

    const [nidNumber, setNidNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOTP] = useState('');


    const [nidNumberError , setNidNumberError] = useState('');
    const [phoneNumberError , setPhoneNumberError] = useState('');
    const [otpError , setOTPError] = useState('');

    const logUser = (e) =>{
        e.preventDefault();
        if(nidNumber !== '' || nidNumber !== null)
        {
            const data = {
                nidNumber : nidNumber,
                phoneNumber: phoneNumber,
                otp: otp,
            }
            axios.post('', data)
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
            <Header></Header>
            <div className="row justify-content-center pt-5">
                <div className="col-sm-4">
                    <div className="card p-4">
                    <h2 className="align-items-center text-center text-primary "> Police Officer Login</h2>
                        <div className="mb-3">
                            <label htmlFor="nidNumber" className="form-label">NID</label>
                            <input type="text" name="nidNumber" id="nidNumber" value={nidNumber} onChange={(e)=>{setNidNumber(e.target.value)}} className="form-control"  placeholder="Enter NID" />
                             {nidNumberError !== '' || nidNumberError !== null ? nidNumberError : ''}
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

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                            Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;