import { useEffect, useState } from "react";
import axios from "axios";
import UserHeader from "../../components/user/UserHeader";
import { Button } from 'react-bootstrap';
import FIRSuccess from "../../components/user/FIRSuccess";

const RegisterFIR = () => {
    const [address, setAddress] = useState('');
    const [station, setStation] = useState('');
    const [offence, setOffence] = useState('');
    const [offenceDescription, setOffenceDescription] = useState('');
    const [suspect, setSuspect] = useState('');
    const [evidence, setEvidence] = useState('');

    const [formError, setFormError] = useState('');

    const [thanas, setThanas] = useState();
    const [firTypes, setFirTypes] = useState();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [firId, setFirId] = useState();

    useEffect(() => {
        document.title = 'Register FIR | Blockchain-Based Police Complaint and Crime Evidence Management System';
        axios.get('http://127.0.0.1:3100/api/firs/create')
            .then(
                (success) => {
                    setThanas(success.data.thanas);
                    setFirTypes(success.data.firTypes);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    const registerFir = (e) => {
        e.preventDefault();
        if (address !== '' || address !== null || offence !== '' || offence !== null || offenceDescription !== '' || offenceDescription !== null || station !== '' || station !== null) {
            const data = {
                userId: localStorage.getItem('loggedUser'),
                address: address,
                station: station,
                offence: offence,
                offenceDescription: offenceDescription,
                suspect: suspect,
                evidence: evidence
            }
            axios.post('http://127.0.0.1:3100/api/firs/store', data)
                .then(
                    (success) => {
                        //console.log(success);
                        setIsSubmitted(true);
                        setFirId(success.data._id);
                    },
                    (error) => {
                        console.log(error);
                    }
                )
        }
        else {
            setFormError('Please fill properly');
        }

    }

    return (
        <div>
            <UserHeader></UserHeader>
            {isSubmitted ? <FIRSuccess id={firId} /> :
                <div className="row justify-content-center pt-5">
                    <div className="col-sm-4">
                        <div className="card p-4">
                            <h2 className="align-items-center text-center text-primary ">FIR Registration</h2>
                            {formError !== '' ? <div className="alert alert-danger" role="alert">{formError}</div> : ''}
                            <form method="POST" onSubmit={registerFir} encType="multipart/form-data">
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Your Address <sup className="text-danger">*</sup></label>
                                    <input type="text" name="address" id="address" value={address} onChange={(e) => { setAddress(e.target.value) }} className="form-control" placeholder="Enter Address" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="station" className="form-label">Select Police Station <sup className="text-danger">*</sup></label>
                                    <select className="form-select" name="station" id="station" value={station} onChange={(e) => { setStation(e.target.value) }} >
                                        <option>Select Station</option>
                                        {thanas !== undefined ? thanas.map((thana, index) => {
                                            return <option key={index} value={thana._id}>{thana.thanaName}</option>
                                        }) : ''}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="offence" className="form-label">Offence Type <sup className="text-danger">*</sup></label>
                                    <select className="form-select" name="offence" id="offence" value={offence} onChange={(e) => { setOffence(e.target.value) }} >
                                        <option>Select Offence</option>
                                        {firTypes !== undefined ? firTypes.map((firType, index) => {
                                            return <option key={index} value={firType._id}>{firType.type}</option>
                                        }) : ''}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="offenceDescription" className="form-label">Offence Description <sup className="text-danger">*</sup></label>
                                    <textarea name="offenceDescription" id="offenceDescription" value={offenceDescription} onChange={(e) => { setOffenceDescription(e.target.value) }} className="form-control" placeholder="Enter Description" ></textarea>
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="suspect" className="form-label">Suspect Information</label>
                                    <textarea type="text" name="suspect" id="suspect" value={suspect} onChange={(e) => { setSuspect(e.target.value) }} className="form-control" placeholder="Enter Suspect Information" ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="evidence" className="form-label text-center">Upload Evidences</label>
                                    <input type="file" name="evidence" id="evidence" value={evidence} onChange={(e) => { setEvidence(e.target.value) }} className="form-control" placeholder="Upload Evidence" multiple />
                                </div>

                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
export default RegisterFIR;