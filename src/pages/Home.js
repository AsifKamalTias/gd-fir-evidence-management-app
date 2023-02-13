import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Header />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={require('../images/hero.jpg')} className="img-fluid" alt=""></img>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Welcome to Blockchain-Based Police Complaint and Crime Evidence Management System</h2>
                        <p className="lead">This system is designed to help citizens in registering their complaints and uploading evidence related to the crimes. The system provides a platform to track the status of the complaint and view the evidence uploaded. </p>
                        <p className="lead">The system is user-friendly and can be used to report the crimes in a secure and easy manner. The system provides an easy way to access the information related to the crimes and complaints in the country.</p>
                        <Link to="/user/registration" className="btn btn-primary btn-block my-3">
                            Register Your Complaints Today
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
