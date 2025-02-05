import React, { useState } from "react";
import { Table, Button, Badge, Form, InputGroup,Card,Nav} from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const PropertyUnitList = () => {
  const [search, setSearch] = useState("");
  const units = [
    {
      id: 1,
      title: "second Floor",
      detail: "Nyerere Road",
      rent: "Birr-1,000.00",
      status: "Vacant",
      parentProperty: "Hello Landlord",

    },

    {
        id: 1,
        title: "second Floor",
        detail: "Nyerere Road",
        rent: "Birr-1,000.00",
        status: "Vacant",
        parentProperty: "Hello Landlord",
  
      },


      {
        id: 1,
        title: "second Floor",
        detail: "Nyerere Road",
        rent: "Birr-1,000.00",
        status: "Vacant",
        parentProperty: "Hello Landlord",
  
      },
  
  ];

  return (
   
    <div className="container mt-4">
         <h2 className=" mb-4">All Propertie Units</h2>
    <Card className="p-4 shadow-lg">
      <div className="alert alert-success">
        New property with title <strong>Property Tet Here</strong> has been added
      </div>
      <Nav.Link
        as={Link}
        to="/admin/property-unit/create">
            <Button variant="success" className="mb-3">
                + Add New Room
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
            <th>Title</th>
            <th>Detail</th>
            <th>Rent</th>
            <th>Status</th>
            <th>Parent Property</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit, index) => (
            <tr key={unit.id}>
              <td>{index + 1}</td>
              <td>{unit.title}</td>
              <td>{unit.detail}</td>
              <td>{unit.rent}</td>
              <td>
                <Badge bg="danger">{unit.status}</Badge>
              </td>
              <td>{unit.parentProperty}</td>
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

export default PropertyUnitList;
