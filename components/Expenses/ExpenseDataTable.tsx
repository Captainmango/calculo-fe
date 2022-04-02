import React from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Box, SlideFade } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { Expense } from '../../models/Expense';

const ExpenseDataTable = () => {

    const expenses = []

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
        <SlideFade
            in={true}
            unmountOnExit

        >
            <Box className="ag-theme-alpine" style={{ height: "70vh", width: "73.05vw" }}>
                <Box id='myGrid' style={{ height: '100%', width: '100%' }}>
                    <AgGridReact
                        rowData={expenses}>
                        <AgGridColumn field="id" resizable={true} editable={true} sortable={true}></AgGridColumn>
                        <AgGridColumn field="title" resizable={true} sortable={true} filter="agTextColumnFilter" filterParams={fieldFilterParams}></AgGridColumn>
                        <AgGridColumn field="categories" resizable={true} sortable={true} filter="agTextColumnFilter" filterParams={fieldFilterParams}></AgGridColumn>
                        <AgGridColumn field="createdAt" resizable={true} sortable={true} filter="agDateColumnFilter" filterParams={dateFilterParams}></AgGridColumn>
                        <AgGridColumn field="total" resizable={true} sortable={true} filter="agNumberColumnFilter" filterParams={totalFilterParams}></AgGridColumn>
                        <AgGridColumn field="notes" resizable={true} sortable={true} filter="agTextColumnFilter" filterParams={fieldFilterParams}></AgGridColumn>
                        <AgGridColumn field="updatedAt" resizable={true} sortable={true} filter="agDateColumnFilter" filterParams={dateFilterParams}></AgGridColumn>
                    </AgGridReact>
                </Box>
            </Box>
        </SlideFade>
    )
};

export default ExpenseDataTable;
