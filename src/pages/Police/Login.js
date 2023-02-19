import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";

import LoginS1 from "../../components/police/LoginS1";
import LoginS2 from "../../components/police/LoginS2";

const Login = () => {
    const [LStep, setLStep] = useState(1);
    useEffect(() => {
        document.title = 'Login | Blockchain-Based Police Complaint and Crime Evidence Management System';
        if(localStorage.getItem('loggedOfficer')) {
            window.location.href = '/officer/dashboard';
        }
        if(localStorage.getItem('LStep') !== null){
            setLStep(localStorage.getItem('LStep'));
        }
        else
        {
            setLStep(1);
        }
    }, [])
    return(
        <div>
            <Header></Header>
            <div className="row justify-content-center pt-5">
                <div className="col-sm-4">
                    <div className="card p-4">
                    <h2 className="align-items-center text-center text-primary ">Officer Login</h2>
                        {LStep === 1 ? <LoginS1 /> : <LoginS2 />}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;