import React, { useState } from "react";
import { Table, Button, Form, InputGroup,Card,Nav} from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeaseTable = () => {
  const [search, setSearch] = useState("");
  const leases = [
    {
      id: 1,
      name: "Second Floor",
      type: "UNIT",
      tenant: "Test Tenant",
      startDate: "01 Feb 2021",
      endDate: "30 Apr 2021",
      rent: "£ 3,453.00",
      bills: "£ 70.00",
    },
    {
      id: 2,
      name: "First Floor Room Two",
      type: "UNIT",
      tenant: "Test Tenant",
      startDate: "01 Feb 2021",
      endDate: "13 Mar 2021",
      rent: "£ 700.00",
      bills: "£ 1,300.00",
    },
  ];

  return (
   
    <div className="container mt-4">
             <h2>Lease / Tenancy</h2>
    <Card className="p-4 shadow-lg">
      <div className="alert alert-success">
 
      <p>A new lease has been created. Invoice has also been generated. Proceed to invoices section to manually pay it.</p>
      </div>
      <Nav.Link
        as={Link}
        to="/admin/lease/create">
            <Button variant="success" className="mb-3">
                + Add New Lease
            </Button>
        </Nav.Link>
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form.Select style={{ width: "100px" }}>
          <option>10</option>
          <option>25</option>
          <option>50</option>
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
        {leases.map((lease) => (
            <tr key={lease.id}>
              <td>{lease.id}</td>
              <td>{lease.name}</td>
              <td>{lease.type}</td>
              <td>{lease.tenant}</td>
              <td>{lease.startDate}</td>
              <td>{lease.endDate}</td>
              <td>{lease.rent}</td>
              <td>{lease.bills}</td>
              <td>
              <FaEye className="me-3 text-primary" style={{ cursor: "pointer" }} />
              <FaEdit className="me-3 text-warning" style={{ cursor: "pointer" }} />
              <FaTrash className="text-danger" style={{ cursor: "pointer" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Card>
    </div>


  );
};
export default LeaseTable;
