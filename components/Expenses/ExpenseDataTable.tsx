import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import expenses from '../../resources/Calculo_expenses.json'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Box } from '@chakra-ui/react';
import dayjs from 'dayjs';

const ExpenseDataTable = () => {

    const totalFilterParams = {
        allowedCharPattern: '\\d\\-\\,',
        numberParser: (text: String) => {
            return text == null ? null : parseFloat(text.replace(',', '.'));
        }
    };

    const dateFilterParams = {
        comparator: function (filterLocalDateAtMidnight: Date, cellValue: any) {
            let searchDate = dayjs(cellValue).format('DD/MM/YYYY')
            if (searchDate == null) return -1;

            const dateParts = searchDate.split('/');
            const day = Number(dateParts[0]);
            const month = Number(dateParts[1]) - 1;
            const year = Number(dateParts[2]);
            const cellDate = new Date(year, month, day);


            if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
                return 0;
            }
            if (cellDate < filterLocalDateAtMidnight) {
                return -1;
            }
            if (cellDate > filterLocalDateAtMidnight) {
                return 1;
            }
        },
        browserDatePicker: true,
        minValidYear: 2000
    };

    const fieldFilterParams = {
        textCustomComparator: (filter: string, value: { toString: () => string; }, filterText: string) => {
            const filterTextLowerCase = filterText.toLowerCase();
            const valueLowerCase = value.toString().toLowerCase();
            switch (filter) {
                case 'contains':
                    return valueLowerCase.indexOf(filterTextLowerCase) >= 0;
                case 'notContains':
                    return valueLowerCase.indexOf(filterTextLowerCase) === -1;
                case 'equals':
                    return valueLowerCase === filterTextLowerCase;
                case 'notEqual':
                    return valueLowerCase != filterTextLowerCase;
                case 'startsWith':
                    return valueLowerCase.indexOf(filterTextLowerCase) === 0;
                case 'endsWith':
                    var index = valueLowerCase.lastIndexOf(filterTextLowerCase);
                    return index >= 0 && index === (valueLowerCase.length - filterTextLowerCase.length);
                default:
                    // should never happen
                    console.warn('invalid filter type ' + filter);
                    return false;
            }
        }
    };

    return (

        <Box className="ag-theme-material" style={{ height: "70vh", width: "73vw" }}>
            <Box id='myGrid' style={{height: '100%', width:'100%'}}>
                <AgGridReact
                    rowData={expenses}>
                    <AgGridColumn field="id" sortable={true}></AgGridColumn>
                    <AgGridColumn field="title" sortable={true} filter="agTextColumnFilter" filterParams={fieldFilterParams}></AgGridColumn>
                    <AgGridColumn field="category" sortable={true} filterParams={fieldFilterParams}></AgGridColumn>
                    <AgGridColumn field="createdAt" sortable={true} filter="agDateColumnFilter" filterParams={dateFilterParams}></AgGridColumn>
                    <AgGridColumn field="total" sortable={true} filter="agNumberColumnFilter" filterParams={totalFilterParams}></AgGridColumn>
                    <AgGridColumn field="notes" sortable={true} filter="agTextColumnFilter" filterParams={fieldFilterParams}></AgGridColumn>
                    <AgGridColumn field="updatedAt" sortable={true} filter="agDateColumnFilter" filterParams={dateFilterParams}></AgGridColumn>
                </AgGridReact>
            </Box>
        </Box>
    )
};

export default ExpenseDataTable;
