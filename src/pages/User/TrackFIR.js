import { useState } from "react";
import axios from "axios";
import UserHeader from "../../components/user/UserHeader";
import { Button } from 'react-bootstrap';
import FIRInfo from "./FIRInfo";

const TrackFIR = () => {

    const [firNumber, setFirNumber] = useState('');
    const [error, setError] = useState('');
    const [fir, setFir] = useState({});
    const [notFound, setNotFound] = useState(false);


    const trackFIR = (e) => {
        e.preventDefault();
        if (firNumber !== '' || firNumber !== null) {
            const data = {
                firId: firNumber,

            }
            axios.post('http://127.0.0.1:3100/api/firs/view', data)
                .then(
                    (success) => {
                        console.log(success.data.firWithAllInfo);
                        setFir(success.data.firWithAllInfo);
                        setNotFound(false);
                    },
                    (error) => {
                        setNotFound(true);
                    }
                )
        }
        else {
            setError('FIR Number is required!');
        }

    }

    return (
        <div>
            <UserHeader></UserHeader>
            <div className="row justify-content-center pt-5">
                <div className="col-sm-4">
                    <div className="card p-4">
                        <h2 className="align-items-center text-center text-primary ">Track FIR Status</h2>
                        {error !== '' ? <div className="alert alert-danger" role="alert">{error}</div> : ''}
                        <form onSubmit={trackFIR}>
                            <div className="mb-3">
                                <label htmlFor="firNumber" className="form-label">FIR Number</label>
                                <input type="text" name="firNumber" id="firNumber" value={firNumber} onChange={(e) => { setFirNumber(e.target.value) }} className="form-control" placeholder="Enter FIR Number" />
                            </div>

                            <div className="d-grid">
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                    {notFound ? <div className="alert alert-danger my-4" role="alert">FIR Not Found!</div> : ''}
                    {fir && fir._id ? <FIRInfo id={fir._id} thana={fir.thanaId.thanaName} offence={fir.firType.type} description={fir.description} assignedOfficer={fir.assignedOfficer.id} suspect={fir.suspectInfo} result={fir.result} status={fir.status} createdOn={fir.createdOn}></FIRInfo> : ''}
                </div>
            </div>
        </div>
    );
}
export default TrackFIR;