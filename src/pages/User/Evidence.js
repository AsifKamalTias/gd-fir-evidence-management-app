import { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import {Button} from 'react-bootstrap';

const Evidence = () => {

    const [firNumber, setFirNumber] = useState('');
    const [evidence, setEvidence] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOTP] = useState('');

    const [firNumberError , setFirNumberError] = useState('');
    const [phoneNumberError , setPhoneNumberError] = useState('');
    const [otpError , setOTPError] = useState('');

    const evidenceUpload = (e) =>{
        e.preventDefault();
        if(firNumber !== '' || firNumber !== null && phoneNumber !== '' || phoneNumber !== null && otp !== '' || otp !== null)
        {
            const data = {
                firNumber : firNumber,
                evidence: evidence,
                phoneNumber: phoneNumber,
                otp: otp
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
            setFirNumberError('FIR Number is required!');
            setPhoneNumberError('Phone Number is required!');
            setOTPError('OTP is required!');
        }
        
    }

    return(
        <div>
            <div className="row justify-content-center pt-5">
                <div className="col-sm-4">
                    <div className="card p-4">
                    <h2 className="align-items-center text-center text-primary ">Upload Evidence</h2>
                        <div className="mb-3">
                            <label htmlFor="firNumber" className="form-label">FIR Number</label>
                            <input type="text" name="firNumber" id="firNumber" value={firNumber} onChange={(e)=>{setFirNumber(e.target.value)}} className="form-control"  placeholder="Enter FIR Number" />
                             {firNumberError !== '' || firNumberError !== null ? firNumberError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="evidence" className="form-label text-center">Evidence</label>
                            <input type="file" name="evidence" id="evidence" value={evidence} onChange={(e)=>{setEvidence(e.target.value)}} className="form-control"  placeholder="Upload Evidence" />
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
export default Evidence;