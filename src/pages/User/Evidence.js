import { useState } from "react";
import axios from "axios";
import UserHeader from "../../components/user/UserHeader";
import {Button} from 'react-bootstrap';

const Evidence = () => {

    const [firNumber, setFirNumber] = useState('');
    const [evidence, setEvidence] = useState('');

    const [firNumberError , setFirNumberError] = useState('');


    const evidenceUpload = (e) =>{
        e.preventDefault();
        if(firNumber !== '' || firNumber !== null)
        {
            const data = {
                firNumber : firNumber,
                evidence: evidence
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
        }
        
    }

    return(
        <div>
            <UserHeader></UserHeader>
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