import { useState } from "react";
import axios from "axios";
import {Button} from 'react-bootstrap';
const LoginS2 = () => {
    const [otp, setOtp] = useState('');
    const [otpError , setOtpError] = useState('');

    const [error , setError] = useState();

    const logUser = (e) =>{
        e.preventDefault();
        if(otp !== '' || otp !== null)
        {
            const data = {
                userId: (localStorage.getItem('loggingQueuedUser')).substring(1, (localStorage.getItem('loggingQueuedUser')).length-1),
                otp: otp
            }
            axios.post('http://127.0.0.1:3100/api/users/login/verify/otp', data)
            .then(
                (success)=>{
                    //console.log(success);
                    localStorage.removeItem('loggingQueuedUser');
                    localStorage.setItem('loggedUser', success.data);
                    localStorage.removeItem('LStep');
                    window.location.href = '/user/dashboard';
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
        localStorage.removeItem('loggingQueuedUser');
        localStorage.removeItem('LStep');
        window.location.href = '/user/login';
    }

    return(
        <>
        {error ? <div className="alert alert-danger" role="alert">{error}</div> : ''}
                        <form onSubmit={logUser}>
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