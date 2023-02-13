import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";
import LoginS1 from "../../components/user/LoginS1";
import LoginS2 from "../../components/user/LoginS2";

const Login = () => {
    const [LStep, setLStep] = useState(1);
    useEffect(() => {
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
                    <h2 className="align-items-center text-center text-primary ">User Login</h2>
                        {LStep === 1 ? <LoginS1 /> : <LoginS2 />}
                        <div className="mt-3">
                            <p className="mb-0  text-center">
                                Don't have an account??{' '}
                                <Link to="/user/registration" className="text-primary fw-bold">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;