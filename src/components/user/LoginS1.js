import { useState } from "react";
import axios from "axios";
import {Button} from 'react-bootstrap';
const LoginS1 = () => {
    const [nidNumber, setNidNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [nidNumberError , setNidNumberError] = useState('');
    const [phoneNumberError , setPhoneNumberError] = useState('');
    const [error , setError] = useState();

    const logUser = (e) =>{
        e.preventDefault();
        if(nidNumber !== '' || phoneNumber !== null)
        {
            const data = {
                nidNumber : nidNumber,
                phoneNumber: phoneNumber
            }
            axios.post('http://127.0.0.1:3100/api/users/login/verify', data)
            .then(
                (success)=>{
                    localStorage.setItem('loggingQueuedUser', JSON.stringify(success.data));
                    localStorage.setItem('LStep', 2);
                    window.location.href = '/user/login';
                },
                (error)=>{
                    console.log(error);
                    setError(error.response.data.message);
                }
            )
        }
        else{
            setNidNumberError('Nid Number is required!');
            setPhoneNumberError('Phone Number is required!');
        }
        
    }

    return(
        <>
        {error ? <div className="alert alert-danger" role="alert">{error}</div> : ''}
                        <form onSubmit={logUser}>
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


                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                            Next
                            </Button>
                        </div>
                        </form>
        </>
    )
}
export default LoginS1;