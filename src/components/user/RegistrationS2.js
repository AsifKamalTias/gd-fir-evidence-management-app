import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
const RegistrationS2 = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [error, setError] = useState('');
    const submitPhone = (e) => {
        e.preventDefault();
        if(phoneNumber === ''){
            setPhoneNumberError('Phone Number is required');
            return false;
        }
        else{
            const data = {
                nidNumber: JSON.parse(localStorage.getItem('RS1')).nid,
                faceRecognition: JSON.parse(localStorage.getItem('RS1')).face_recognition,
                phoneNumber: phoneNumber
            }
            axios.post('http://127.0.0.1:3100/api/users/registration/verify/phoneNumber', data)
                .then(
                    (success) => {
                        localStorage.setItem('rStep', 3);
                        localStorage.setItem('RS2', JSON.stringify(success.data));
                        localStorage.removeItem('RS1');
                        window.location.reload();
                    }
                )
                .catch(
                    (error) => {
                        setError(error.response.data.message);
                    }
                )
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
            <form onSubmit={submitPhone}>
                {error ? <div className="alert alert-danger">{error}.</div> : ''}
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="text" name="phoneNumber" id="phoneNumber"  value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} className="form-control"  placeholder="Enter Phone" />
                    {phoneNumberError ? <span className="text-danger">{phoneNumberError}</span> : ''}
                </div>
                <div className="d-grid">
                    <Button variant="primary" type="submit">
                        Next
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
export default RegistrationS2;