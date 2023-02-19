import { useState, useEffect } from "react";
import axios from "axios";
import PoliceHeader from '../../components/police/PoliceHeader';
import { Table, Button } from 'react-bootstrap';

const Complaints = () => {
  const [assignedCases, setAssignedCases] = useState([]);

  useEffect(() => {
    axios.get("/api/assigned-cases")
      .then(res => setAssignedCases(res.data))
      .catch(err => console.log(err));
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
              <th>Case No.</th>
              <th>Case Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignedCases.map((assignedCase, index) => (
              <tr key={assignedCase.caseId}>
                <td>{index + 1}</td>
                <td>{assignedCase.caseNo}</td>
                <td>{assignedCase.caseType}</td>
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
