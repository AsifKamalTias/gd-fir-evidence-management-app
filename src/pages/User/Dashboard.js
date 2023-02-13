import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import UserHeader from '../../components/user/UserHeader';
import Footer from '../../components/Footer';

const Dashboard = () => {
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