import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Form, Alert, Button, Card, Spinner } from "react-bootstrap";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';

const TenantTable = () => {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tenants from backend
  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const { data } = await axios.get("/api/tenants/viewTenants");
        setTenants(data);
      } catch (error) {
        setError("Failed to load tenants");
      } finally {
        setLoading(false);
      }
    };

    fetchTenants();
  }, []);

  return (
    <div>
      <h2 className="mb-4">All Tenants</h2>
      <Card className="p-4 shadow-lg">
        {/* Error Message */}
        {error &&  toast.error(error)}

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
        {loading ? (
          <div className="text-center my-3">
            <Spinner animation="border" />
          </div>
        ) : (
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
              {tenants.length > 0 ? (
                tenants.map((tenant, index) => (
                  <tr key={tenant.id}>
                    <td>{index + 1}</td>
                    <td>{tenant.fullName}</td>
                    <td>{tenant.email}</td>
                    <td>{tenant.address}</td>
                    <td>{tenant.leases}</td>
                    <td>
                      <FaEye className="me-3 text-primary" style={{ cursor: "pointer" }} />
                      <FaEdit className="me-3 text-warning" style={{ cursor: "pointer" }} />
                      <FaTrashAlt className="text-danger" style={{ cursor: "pointer" }} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No tenants found!
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center">
          <span>Showing {tenants.length} entries</span>
          <Button variant="outline-secondary" size="sm">
            1
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TenantTable;
