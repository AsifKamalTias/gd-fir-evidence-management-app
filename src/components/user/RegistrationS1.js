import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const RegistrationS1 = () => {
    const [nidNumber, setNidNumber] = useState('');
    const [faceRecognition, setFaceRecognition] = useState('');
    const [nidNumberError, setNidNumberError] = useState('');
    const [faceRecognitionError, setFaceRecognitionError] = useState('');
    const [error, setError] = useState();

    const verifyNidFace = (e) => {
        e.preventDefault();
        if (nidNumber !== '' || nidNumber !== null) 
        {
            if(faceRecognition !== '' || faceRecognition !== null)
            {
                const data = {
                    nidNumber: nidNumber,
                    faceRecognition: faceRecognition
                }
                axios.post('http://127.0.0.1:3100/api/users/registration/verify', data)
                    .then(
                        (success) => {
                            localStorage.setItem('rStep', 2);
                            localStorage.setItem('RS1', JSON.stringify(success.data));
                            window.location.reload();
                        },
                        (error) => {
                            setError(error.response.data.message);
                        }
                    )
            }
            else{
                setFaceRecognitionError('Face Recognition is required!');
            } 
        }
        else {
            setNidNumberError('Nid Number is required!');
        }
    }

    return (
        <div>
            <form onSubmit={verifyNidFace}>
                {error ? <div className="alert alert-danger">{error}.</div> : ''}
                <div className="mb-3">
                    <label htmlFor="nidNumber" className="form-label">NID</label>
                    <input type="text" name="nidNumber" id="nidNumber" value={nidNumber} onChange={(e)=>{setNidNumber(e.target.value)}} className="form-control"  placeholder="Enter NID" />
                        {nidNumberError ? <span className="text-danger">{nidNumberError}</span> : ''}
                </div>

                <div className="mb-3">
                    <label htmlFor="faceRecognition" className="form-label text-center">Face Recognition</label>
                    <input type="text" name="faceRecognition" id="faceRecognition" value={faceRecognition} onChange={(e)=>{setFaceRecognition(e.target.value)}} className="form-control"  placeholder="Enter Face Recognition" />
                        {faceRecognitionError ? <span className="text-danger">{faceRecognitionError}</span> : ''}
                </div>
                <div className="d-grid">
                    <Button variant="primary" type="submit">
                        Next
                    </Button>
                </div>
            </form>
            <div className="mt-3">
                <p className="mb-0  text-center">
                    Already have an account??{' '}
                    <a href="/user/login" className="text-primary fw-bold">
                    Sign In
                    </a>
                </p>
            </div>
        </div>
    );
};
export default RegistrationS1;