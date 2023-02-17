import { useState } from "react";
import axios from "axios";
import UserHeader from "../../components/user/UserHeader";
import {Button} from 'react-bootstrap';

const RegisterFIR = () => {
    const [offenceDate, setOffenceDate] = useState('');
    const [address, setAddress] = useState('');
    const [offence, setOffence] = useState('');
    const [offenceDescription, setOffenceDescription] = useState('');
    const [station, setStation] = useState('');
    const [suspect, setSuspect] = useState('');
    const [evidence, setEvidence] = useState('');


    const [addressError , setAddressError] = useState('');
    const [offenceError , setOffenceError] = useState('');
    const [offenceDescriptionError , setOffenceDescriptionError] = useState('');
    const [stationError , setStationError] = useState('');
    const [offenceDateError , setOffenceDateError] = useState('');

    const registerFir = (e) =>{
        e.preventDefault();
        if(address !== '' || address !== null && offenceDescription !== '' || offenceDescription !== null)
        {
            const data = {
                address : address,
                offenceDescription: offenceDescription
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
            setAddressError('Address is required!');
            setOffenceDescriptionError('Offence Description is required!');
        }
        
    }

    return(
        <div>
            <UserHeader></UserHeader>
            <div className="row justify-content-center pt-5">
                <div className="col-sm-4">
                    <div className="card p-4">
                    <h2 className="align-items-center text-center text-primary ">FIR Registration</h2>
                        <div className="mb-3">
                            <label htmlFor="offenceDate" className="form-label">Offence Date & Time</label>
                            <input type="datetime-local" name="offenceDate" id="offenceDate" value={offenceDate} onChange={(e)=>{setOffenceDate (e.target.value)}} className="form-control"  placeholder="Enter Offence Date & Time" />
                             {offenceDateError !== '' || offenceDateError !== null ? offenceDateError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" name="address" id="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} className="form-control"  placeholder="Enter Address" />
                             {addressError !== '' || addressError !== null ? addressError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="offence" className="form-label">Offence</label>
                            <select className="form-control" name="offence"  id="offence" onChange={(e)=>{setOffence(e.target.value)}} >
                                <option>Theft</option>
                                <option>Violence</option>
                                <option>Cyber Crime</option>
                                <option>Drug</option>
                            </select>
                             {offenceError !== '' || offenceError !== null ? offenceError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="offenceDescription" className="form-label">Offence Description</label>
                            <textarea name="offenceDescription" id="offenceDescription" value={offenceDescription} onChange={(e)=>{setOffenceDescription(e.target.value)}} className="form-control"  placeholder="Enter Description" ></textarea>
                             {offenceDescriptionError !== '' || offenceDescriptionError !== null ? offenceDescriptionError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="station" className="form-label">Police Station</label>
                            <select className="form-control" name="station"  id="station" onChange={(e)=>{setStation(e.target.value)}} >
                                <option>Kotwali</option>
                                <option>Mirpur</option>
                                <option>Uttara</option>
                                <option>Vatara</option>
                            </select>
                             {stationError !== '' || stationError !== null ? stationError : ''}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="suspect" className="form-label">Suspect Information</label>
                            <input type="text" name="suspect" id="suspect" value={address} onChange={(e)=>{setSuspect(e.target.value)}} className="form-control"  placeholder="Enter Suspect Information" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="evidence" className="form-label text-center">Evidence</label>
                            <input type="file" name="evidence" id="evidence" value={evidence} onChange={(e)=>{setEvidence(e.target.value)}} className="form-control"  placeholder="Upload Evidence" />
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
export default RegisterFIR;