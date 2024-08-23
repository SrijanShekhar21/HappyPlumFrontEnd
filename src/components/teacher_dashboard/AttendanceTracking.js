import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const attendanceData = [
  { name: 'Nina G', status: true },
  { name: 'Suresh S', status: false },
  // Add more attendance records as needed
];

const AttendanceTracking = () => {
  return (
    <div className="table-responsive m-3">
      <Table striped bordered hover className="bg-white rounded shadow-sm">
        <thead>
          <tr>
            <th>Student</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
            <td>
              {record.status?
                <Button variant="success" className="me-2">
                  <FaCheckCircle /> Present
                </Button>:
                <Button variant="danger">
                  <FaTimesCircle /> Absent
                </Button>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AttendanceTracking;
