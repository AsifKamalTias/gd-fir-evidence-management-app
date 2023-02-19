import { useState } from "react";
import axios from "axios";
import {Button} from 'react-bootstrap';
const LoginS1 = () => {
    const [id, setId] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [idError , setIdError] = useState('');
    const [phoneNumberError , setPhoneNumberError] = useState('');
    const [error , setError] = useState();

    const logOfficer = (e) =>{
        e.preventDefault();
        if(id !== '' || phoneNumber !== null)
        {
            const data = {
                id : id,
                phoneNumber: phoneNumber
            }
            axios.post('http://127.0.0.1:3100/api/officers/login/verify', data)
            .then(
                (success)=>{
                    localStorage.setItem('loggingQueuedOfficer', JSON.stringify(success.data));
                    localStorage.setItem('LStep', 2);
                    window.location.href = '/officer/login';
                },
                (error)=>{
                    console.log(error);
                    setError(error.response.data.message);
                }
            )
        }
        else{
            setIdError('ID is required!');
            setPhoneNumberError('Phone Number is required!');
        }
        
    }

    return(
        <>
        {error ? <div className="alert alert-danger" role="alert">{error}</div> : ''}
                        <form onSubmit={logOfficer}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">ID</label>
                            <input type="text" name="id" id="id" value={id} onChange={(e)=>{setId(e.target.value)}} className="form-control"  placeholder="Enter Officer ID" />
                             {idError !== '' || idError !== null ? idError : ''}
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