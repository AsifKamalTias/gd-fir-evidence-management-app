import { useState, useEffect } from "react";
import axios from "axios";
import ForensicHeader from '../../components/forensic/ForensicHeader';
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
      <ForensicHeader />
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
