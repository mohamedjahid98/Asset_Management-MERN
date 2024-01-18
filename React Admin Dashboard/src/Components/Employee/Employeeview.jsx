import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';

const Employeeview = () => {
  const [employees, setEmployees] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
  });
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3001/employee/empdata")
      .then(result => setEmployees(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/employee/deleteEmployee/' + id)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  //update and delete btn function
  const actionTemplate = (rowData) => {
    return (
      <div>
        <Link to={`/employee/update/${rowData._id}`}>
          <Button icon="pi pi-pencil" className="p-button-rounded p-button-primary" />
        </Link>
        {/* &nbsp;&nbsp;
        <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => handleDelete(rowData._id)} /> */}
      </div>
    );
  };

const getStatus = (rowData) => {
  const activeEmployeeIds = JSON.parse(localStorage.getItem('activeEmployeeIds')) || [];
  
  if (Array.isArray(activeEmployeeIds)) {
    return activeEmployeeIds.includes(rowData._id) ? 'Active' : 'Inactive';
  } else {
    return 'Inactive';
  }
};

  
  

  return (
    <div>
      <main className='main-container'>
        <div className="card-box-emp">
          <div className="row">
            <div className="col-sm-12">
              <h2 style={{ textAlign: 'center', color: "black" }}>Employee Data</h2>
              <a href="/employee/create" style={{ float: 'right' }} id="addbtn" className="btn btn-success btn-rounded">Add New</a>
            </div>
          </div>
          <div className="flex justify-content-start">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
            </span>
          </div><br />
          <DataTable value={employees} showGridlines filters={filters} globalFilterFields={['empname', 'email', 'dept', 'position', 'mobile_no']} stripedRows paginator rows={5} rowsPerPageOptions={[2, 5, 10]} tableStyle={{ minWidth: '50rem' }}
            emptyMessage="No Employees found.">
            {/* <Column body={(rowData, column) => column.rowIndex + 1} header="Employee ID"></Column> */}
            <Column field="_id" header="Employee ID"></Column>
            <Column field="empname" filterField="empname" header="Name"></Column>
            <Column field="email" filterField="email" header="E-Mail"></Column>
            <Column field="dept" filterField="dept" header="Department"></Column>
            <Column field="position" filterField="position" header="Position"></Column>
            {/* <Column field="mobile_no" filterField="mobile_no" header="Mobile"></Column> */}
            <Column header="Status" body={getStatus}></Column>
            <Column header="Action" body={actionTemplate}></Column>

          </DataTable>
        </div>
      </main>
    </div>
  );
};

export default Employeeview;
