import React, { useState } from "react";
import { Table, Form, InputGroup, Button,Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const PreviousLeases = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [leases, setLeases] = useState([
    {
      id: 1,
      name: "Second Floor",
      type: "UNIT",
      tenant: "Test Tenant",
      startDate: "01 Feb 2021",
      endDate: "30 Apr 2021",
      rent: "£3,453.00",
      bills: "£970.00",
    },
  ]);

  const handleDelete = (id) => {
    setLeases(leases.filter((lease) => lease.id !== id));
  };


  return (
    <div className="container mt-4">
      <h4>Previous Leases</h4>
      <Card className="p-4 shadow-lg">
      <div className="d-flex justify-content-between mb-3">
        <Form.Select
          value={entries}
          onChange={(e) => setEntries(e.target.value)}
          style={{ width: "200px" }}
        >
          {[10, 25, 50, 100].map((num) => (
            <option key={num} value={num}>
              Show {num} entries
            </option>
          ))}
        </Form.Select>

        <InputGroup style={{ width: "200px" }}>
          <Form.Control
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
      </div>

      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Tenant</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Rent</th>
            <th>Bills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leases.map((lease,index) => (
            <tr key={lease.id}>
              <td>{index + 1}</td>
              <td>{lease.name}</td>
              <td className="fw-bold">{lease.type}</td>
              <td>{lease.tenant}</td>
              <td>{lease.startDate}</td>
              <td>{lease.endDate}</td>
              <td >{lease.rent}</td>
              <td >{lease.bills}</td>
              <td className="text-center">
                <Button variant="danger" size="sm" onClick={() => handleDelete(lease.id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between">
        <span>Showing {leases.length} entries</span>
        <div>
          <Button variant="secondary" size="sm" className="me-2">
            {"<"}
          </Button>
          <Button variant="primary" size="sm">
            1
          </Button>
          <Button variant="secondary" size="sm" className="ms-2">
            {">"}
          </Button>
        </div>
      </div>
      </Card>
    </div>
  );
};

export default PreviousLeases;
