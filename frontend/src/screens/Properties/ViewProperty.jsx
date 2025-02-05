import React, { useState } from "react";
import { Table, Button, Badge, Form, InputGroup,Card,Nav} from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [search, setSearch] = useState("");
  const properties = [
    {
      id: 1,
      name: "Property Tet Here",
      location: "Nyerere Road",
      type: "Bungalow",
      rent: "£1,000.00",
      status: "Vacant",
      landlord: "Hello Landlord",
      units: 0,
    },
    {
        id: 1,
        name: "Property Tet Here",
        location: "Nyerere Road",
        type: "Bungalow",
        rent: "£1,000.00",
        status: "Vacant",
        landlord: "Hello Landlord",
        units: 0,
      },
      {
        id: 1,
        name: "Property Tet Here",
        location: "Nyerere Road",
        type: "Bungalow",
        rent: "£1,000.00",
        status: "Vacant",
        landlord: "Hello Landlord",
        units: 0,
      },
  ];

  return (
   
    <div className="container mt-4">
         <h2 className=" mb-4">All Properties</h2>
    <Card className="p-4 shadow-lg">
      <div className="alert alert-success">
        New property with title <strong>Property Tet Here</strong> has been added
      </div>
      <Nav.Link
        as={Link}
        to="/admin/property/create">
            <Button variant="success" className="mb-3">
                + Add New Property
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
            <th>Property Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>Rent</th>
            <th>Status</th>
            <th>Landlord</th>
            <th>Units</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property, index) => (
            <tr key={property.id}>
              <td>{index + 1}</td>
              <td>{property.name}</td>
              <td>{property.location}</td>
              <td>{property.type}</td>
              <td>{property.rent}</td>
              <td>
                <Badge bg="danger">{property.status}</Badge>
              </td>
              <td>{property.landlord}</td>
              <td>{property.units}</td>
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

export default PropertyList;
