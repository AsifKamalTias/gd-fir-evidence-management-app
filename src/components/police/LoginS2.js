import { useState } from "react";
import axios from "axios";
import {Button} from 'react-bootstrap';
const LoginS2 = () => {
    const [otp, setOtp] = useState('');
    const [otpError , setOtpError] = useState('');

    const [error , setError] = useState();

    const logOfficer = (e) =>{
        e.preventDefault();
        if(otp !== '' || otp !== null)
        {
            const data = {
                officerId: (localStorage.getItem('loggingQueuedOfficer')).substring(1, (localStorage.getItem('loggingQueuedOfficer')).length-1),
                otp: otp
            }
            axios.post('http://127.0.0.1:3100/api/officers/login/verify/otp', data)
            .then(
                (success)=>{
                    //console.log(success);
                    localStorage.removeItem('loggingQueueOfficer');
                    localStorage.setItem('loggedOfficer', success.data);
                    localStorage.removeItem('LStep');
                    window.location.href = '/officer/dashboard';
                },
                (error)=>{
                    console.log(error);
                    setError(error.response.data.message);
                }
            )
        }
        else{
            setOtpError('OTP is required!');
        }
        
    }

    const refreshLogin = () =>{
        localStorage.removeItem('loggingQueuedOfficer');
        localStorage.removeItem('LStep');
        window.location.href = '/officer/login';
    }

    return(
        <>
        {error ? <div className="alert alert-danger" role="alert">{error}</div> : ''}
                        <form onSubmit={logOfficer}>
                        <div className="mb-3">
                            <label htmlFor="otp" className="form-label">OTP</label>
                            <input type="text" name="otp" id="otp" value={otp} onChange={(e)=>{setOtp(e.target.value)}} className="form-control"  placeholder="Enter OTP" />
                             {otpError !== '' || otpError !== null ? otpError : ''}
                        </div>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                            Login
                            </Button>
                        </div>
                        </form>

           <div className="mt-3">
           <Button variant="info" onClick={refreshLogin}>
                Try Using Another Id
            </Button>
           </div>
        </>
    )
}
export default LoginS2;