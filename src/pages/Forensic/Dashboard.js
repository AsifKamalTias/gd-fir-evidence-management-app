import React, { useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ForensicHeader from "../../components/forensic/ForensicHeader";

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Police Dashboard | Blockchain-Based Police Complaint and Crime Evidence Management System';
        /* if(localStorage.getItem('loggedUser') === null) {
            window.location.href = '/user/login';
        } */
    }, [])
    return (
        <>
            <ForensicHeader></ForensicHeader>
            <div className='mt-4'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h4>Welcome to the Police Complaint and Crime Evidence Management System</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center">
                            <Link to="/forensic/evidence" className="btn btn-primary btn-block my-3 m-3">
                                Upload Evidence
                            </Link>
                            <Link to="/forensic/complaints" className="btn btn-primary btn-block my-3 m-3">
                                View Assigned Cases
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