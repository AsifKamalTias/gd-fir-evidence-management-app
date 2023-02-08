import { useState, useEffect } from "react";
import RegistrationS1 from "../../components/user/RegistrationS1";
import RegistrationS2 from "../../components/user/RegistrationS2";
import RegistrationS3 from "../../components/user/RegistrationS3";
import RegistrationS4 from "../../components/user/RegistrationS4";

const Registration = () => {
    const [rStep, setRStep] = useState(1);

    useEffect(()=>{
        if(localStorage.getItem('rStep') === null || localStorage.getItem('rStep') === '1'){
            localStorage.setItem('rStep', 1);  
            setRStep(1);          
        }
        if(localStorage.getItem('rStep') === '2'){
            localStorage.setItem('rStep', 2);
            setRStep(2);
        }
        if(localStorage.getItem('rStep') === '3'){
            localStorage.setItem('rStep', 3);
            setRStep(3);
        }
        if(localStorage.getItem('rStep') === '4'){
            localStorage.setItem('rStep', 4);
            setRStep(4);
        }
    },[rStep])

    return(
        <div>
            <div className="row justify-content-center pt-5">
                <div className="col-sm-4">
                    <div className="card p-4">
                    <h2 className="align-items-center text-center text-primary ">Registration</h2>
                    {rStep === 1 ? <RegistrationS1/> : ''}
                    {rStep === 2 ? <RegistrationS2/> : ''}
                    {rStep === 3 ? <RegistrationS3 /> : ''}
                    {rStep === 4 ? <RegistrationS4 /> : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Registration;