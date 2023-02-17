import React, { useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import UserHeader from '../../components/user/UserHeader';

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Dashboard | Blockchain-Based Police Complaint and Crime Evidence Management System';
        if(localStorage.getItem('loggedUser') === null) {
            window.location.href = '/user/login';
        }
    }, [])
    return (
        <>
            <UserHeader></UserHeader>
            <div className='mt-4'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h4>Welcome to the Police Complaint and Crime Evidence Management System</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center">
                            <Link to="/user/fir" className="btn btn-primary btn-block my-3 m-3">
                                Register FIR
                            </Link>
                            <Link to="/user/gd" className="btn btn-primary btn-block my-3 m-3">
                                Register GD
                            </Link>
                            <Link to="/user/evidence" className="btn btn-primary btn-block my-3 m-3">
                                Upload Evidence
                            </Link>
                            <Link to="/user/track/fir" className="btn btn-primary btn-block my-3 m-3">
                                Track Complaints
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default Dashboard;