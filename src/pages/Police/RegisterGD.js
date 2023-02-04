import { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import {Button} from 'react-bootstrap';

const RegisterGD= () => {

    const [nidNumber, setNidNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [offence, setOffence] = useState('');
    const [offenceDescription, setOffenceDescription] = useState('');
    const [station, setStation] = useState('');
    const [suspect, setSuspect] = useState('');
    const [otp, setOTP] = useState('');


    const [nidNumberError , setNidNumberError] = useState('');
    const [phoneNumberError , setPhoneNumberError] = useState('');
    const [otpError , setOTPError] = useState('');

    const registerGd = (e) =>{
        e.preventDefault();
        if(nidNumber !== '' || nidNumber !== null && phoneNumber !== '' || phoneNumber !== null && otp !== '' || otp !== null)
        {
            const data = {
                nidNumber : nidNumber,
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
                    <h2 className="align-items-center text-center text-primary ">GD Registration</h2>
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
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" name="address" id="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} className="form-control"  placeholder="Enter Address" />
                             {nidNumberError !== '' || nidNumberError !== null ? nidNumberError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="offence" className="form-label">Offence</label>
                            <select className="form-control" name="offence"  id="offence" onChange={(e)=>{setOffence(e.target.value)}} >
                                <option>Theft</option>
                                <option>Violence</option>
                                <option>Cyber Crime</option>
                                <option>Drug</option>
                            </select>
                             {nidNumberError !== '' || nidNumberError !== null ? nidNumberError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="offenceDescription" className="form-label">Offence Description</label>
                            <textarea name="offenceDescription" id="offenceDescription" value={offenceDescription} onChange={(e)=>{setOffenceDescription(e.target.value)}} className="form-control"  placeholder="Enter Description" ></textarea>
                             {nidNumberError !== '' || nidNumberError !== null ? nidNumberError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="station" className="form-label">Police Station</label>
                            <select className="form-control" name="station"  id="station" onChange={(e)=>{setStation(e.target.value)}} >
                                <option>Kotwali</option>
                                <option>Mirpur</option>
                                <option>Uttara</option>
                                <option>Vatara</option>
                            </select>
                             {nidNumberError !== '' || nidNumberError !== null ? nidNumberError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="suspect" className="form-label">Suspect Information</label>
                            <input type="text" name="suspect" id="suspect" value={address} onChange={(e)=>{setSuspect(e.target.value)}} className="form-control"  placeholder="Enter Suspect Information" />
                             {nidNumberError !== '' || nidNumberError !== null ? nidNumberError : ''}
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
export default RegisterGD;