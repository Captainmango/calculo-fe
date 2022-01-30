import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-material.css'
import expenses from '../../resources/Calculo_expenses.json'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

const ExpenseDataTable = () => {
  return (
    <div className="ag-theme-material" style={{height: "80%", width: "100%"}}>
    <AgGridReact
        rowData={expenses}>
        <AgGridColumn field="title" sortable={true}></AgGridColumn>
        <AgGridColumn field="category" sortable={true}></AgGridColumn>
        <AgGridColumn field="createdAt" sortable={true}></AgGridColumn>
        <AgGridColumn field="total" sortable={true}></AgGridColumn>
    </AgGridReact>
</div>
  )
};

export default ExpenseDataTable;
