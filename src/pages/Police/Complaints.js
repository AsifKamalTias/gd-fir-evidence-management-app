import { useState, useEffect } from "react";
import axios from "axios";
import PoliceHeader from '../../components/police/PoliceHeader';
import { Table, Button } from 'react-bootstrap';

const Complaints = () => {
  const [assignedCases, setAssignedCases] = useState([]);

  useEffect(() => {
    document.title = "Complaints | Blockchain-Based Police Complaint and Crime Evidence Management System";

    const data = {
      policeId: localStorage.getItem("loggedOfficer"),
    }
    axios.post("http://127.0.0.1:3100/api/officers/assigned-cases", data)
      .then(
        (success) => {
          setAssignedCases(success.data);
        }
      )
  }, []);

  return (
    <div>
      <PoliceHeader />
      <div className="container mt-3">
        <h3>Assigned Cases</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Offence</th>
              <th>Description</th>
              <th>Suspect Info</th>
              <th>Status</th>
              <th>Result</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignedCases.map((assignedCase, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{assignedCase.firType.type}</td>
                <td>{assignedCase.description}</td>
                <td>{assignedCase.suspectInfo}</td>
                <td>{assignedCase.status}</td>
                <td>{assignedCase.result}</td>
                <td>{assignedCase.createdOn}</td>
                <td>
                  <Button variant="success">Accept</Button>{' '}
                  <Button variant="danger">Reject</Button>{' '}
                  <Button variant="info">Upload Evidence</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Complaints;
