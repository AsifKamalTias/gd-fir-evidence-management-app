import { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
const RegistrationS3 = () => {
    const [otp, setOTP] = useState('');
    const [otpError, setOTPError] = useState('');
    const [error, setError] = useState('');
    const submitOTP = (e) => {
        e.preventDefault();
        if (otp !== '' || otp !== null) 
        {
            const data = {
                userId : (localStorage.getItem('RS2')).substring(1, (localStorage.getItem('RS2')).length-1),
                otp: otp
            }
            axios.post('http://127.0.0.1:3100/api/users/registration/verify/otp', data)
                .then(
                    (success) => {
                        localStorage.setItem('rStep', 4);
                        localStorage.removeItem('RS2');
                        window.location.reload();
                    }
                )
                .catch(
                    (error) => {
                        console.log(data.userId);
                        console.log(error);
                        setError(error.response.data.message);
                    }
                )
        }
        else {
            setOTPError('OTP is required!');
        }
        
    }
    const refreshRegistration = () => {
        localStorage.removeItem('RS1');
        localStorage.removeItem('RS2');
        localStorage.removeItem('RS3');
        localStorage.removeItem('RS4');
        localStorage.setItem('rStep', 1);
        window.location.reload();
    }
    return(
        <div>
            <form onSubmit={submitOTP}>
                {error ? <div className="alert alert-danger">{error}.</div> : ''}
                <div className="mb-3">
                            <label htmlFor="otp" className="form-label">OTP</label>
                            <input type="text" name="otp" id="otp" value={otp} onChange={(e)=>{setOTP(e.target.value)}} className="form-control"  placeholder="Enter OTP" />
                            {otpError ? <span className="text-danger">{otpError}</span> : ''}
                        </div>
                <div className="d-grid">
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </div>
            </form>
            <div className="mt-3">
            <Button variant="info" onClick={refreshRegistration}>
                Try Using Another Id
            </Button>
            </div>
        </div>
    );
}
export default RegistrationS3;