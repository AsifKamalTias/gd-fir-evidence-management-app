import { useState } from "react";
import axios from "axios";
import PoliceHeader from '../../components/police/PoliceHeader';
import {Button} from 'react-bootstrap';

const TrackFIR = () => {

    const [firNumber, setFirNumber] = useState('');

    const [firNumberError , setFirNumberError] = useState('');


    const trackFIR = (e) =>{
        e.preventDefault();
        if(firNumber !== '' || firNumber !== null)
        {
            const data = {
                firNumber : firNumber,

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
            <PoliceHeader></PoliceHeader>
            <div className="row justify-content-center pt-5">
                <div className="col-sm-4">
                    <div className="card p-4">
                    <h2 className="align-items-center text-center text-primary ">Track FIR Status</h2>
                        <div className="mb-3">
                            <label htmlFor="firNumber" className="form-label">FIR Number</label>
                            <input type="text" name="firNumber" id="firNumber" value={firNumber} onChange={(e)=>{setFirNumber(e.target.value)}} className="form-control"  placeholder="Enter FIR Number" />
                             {firNumberError !== '' || firNumberError !== null ? firNumberError : ''}
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
export default TrackFIR;