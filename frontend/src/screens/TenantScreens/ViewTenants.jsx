import React from "react";
import { Table, Form, Alert, Button,Card } from "react-bootstrap";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

const TenantTable = () => {
  return (
    <div>
         <h2 className=" mb-4">All Tenants</h2>
     <Card className="p-4 shadow-lg">
      {/* Alert Message */}
      <Alert variant="success" className="mt-3">
        New tenant with name <strong>TEst Tenant</strong> has been created
      </Alert>

      {/* Show Entries and Search */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form.Group controlId="entries" className="d-flex align-items-center">
          <Form.Label className="mb-0 me-2">Show</Form.Label>
          <Form.Select size="sm" style={{ width: "auto" }}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </Form.Select>
          <Form.Label className="mb-0 ms-2">entries</Form.Label>
        </Form.Group>

        <Form.Group controlId="search" className="d-flex align-items-center">
          <Form.Label className="mb-0 me-2">Search:</Form.Label>
          <Form.Control type="text" size="sm" placeholder="Search..." />
        </Form.Group>
      </div>

      {/* Tenant Table */}
      <Table striped hover responsive className="table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Leases</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>TEst Tenant</td>
            <td>info@tenant.com</td>
            <td>321312312</td>
            <td>0</td>
            <td>
              <FaEye className="me-3 text-primary" style={{ cursor: "pointer" }} />
              <FaEdit className="me-3 text-warning" style={{ cursor: "pointer" }} />
              <FaTrashAlt className="text-danger" style={{ cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TEst Tenant</td>
            <td>info@tenant.com</td>
            <td>321312312</td>
            <td>0</td>
            <td>
              <FaEye className="me-3 text-primary" style={{ cursor: "pointer" }} />
              <FaEdit className="me-3 text-warning" style={{ cursor: "pointer" }} />
              <FaTrashAlt className="text-danger" style={{ cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TEst Tenant</td>
            <td>info@tenant.com</td>
            <td>321312312</td>
            <td>0</td>
            <td>
              <FaEye className="me-3 text-primary" style={{ cursor: "pointer" }} />
              <FaEdit className="me-3 text-warning" style={{ cursor: "pointer" }} />
              <FaTrashAlt className="text-danger" style={{ cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TEst Tenant</td>
            <td>info@tenant.com</td>
            <td>321312312</td>
            <td>0</td>
            <td>
              <FaEye className="me-3 text-primary" style={{ cursor: "pointer" }} />
              <FaEdit className="me-3 text-warning" style={{ cursor: "pointer" }} />
              <FaTrashAlt className="text-danger" style={{ cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TEst Tenant</td>
            <td>info@tenant.com</td>
            <td>321312312</td>
            <td>0</td>
            <td>
              <FaEye className="me-3 text-primary" style={{ cursor: "pointer" }} />
              <FaEdit className="me-3 text-warning" style={{ cursor: "pointer" }} />
              <FaTrashAlt className="text-danger" style={{ cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TEst Tenant</td>
            <td>info@tenant.com</td>
            <td>321312312</td>
            <td>0</td>
            <td>
              <FaEye className="me-3 text-primary" style={{ cursor: "pointer" }} />
              <FaEdit className="me-3 text-warning" style={{ cursor: "pointer" }} />
              <FaTrashAlt className="text-danger" style={{ cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>TEst Tenant</td>
            <td>info@tenant.com</td>
            <td>321312312</td>
            <td>0</td>
            <td>
              <FaEye className="me-3 text-primary" style={{ cursor: "pointer" }} />
              <FaEdit className="me-3 text-warning" style={{ cursor: "pointer" }} />
              <FaTrashAlt className="text-danger" style={{ cursor: "pointer" }} />
            </td>
          </tr>
         
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <span>Showing 1 to 2 of 2 entries</span>
        <Button variant="outline-secondary" size="sm">
          1
        </Button>
      </div>
      </Card>
    </div>
  );
};

export default TenantTable;
