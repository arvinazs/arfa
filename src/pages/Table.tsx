import * as React from 'react';
import {
  DataGrid,
  GridFilterModel,
  GridColDef,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120,
  },
  {
    field: 'point',
    headerName: 'Point',
    type: 'number',
    width: 120,
  },
];

const rows = [
  { id: 1, lastName: 'mohammadi', firstName: 'sara', age: 35, point: 100 },
  { id: 2, lastName: 'hassani', firstName: 'farnosh', age: 42, point: 50 },
  { id: 3, lastName: 'rezaiue', firstName: 'samie', age: 45, point: 43 },
  { id: 4, lastName: 'rafie', firstName: 'armin', age: 16, point: 54 },
  { id: 5, lastName: 'hassani', firstName: 'dariush', age: null, point: 67 },
  { id: 6, lastName: 'vahidi', firstName: 'arash', age: 150, point: 45 },
  { id: 7, lastName: 'nourmohammadi', firstName: 'babak', age: 44, point: 23 },
  { id: 8, lastName: 'ebrahimi', firstName: 'omid', age: 36, point: 78 },
  { id: 9, lastName: 'saeedi', firstName: 'farshid', age: 65, point: 45 },
];

export default function ControlledFilters() {
  const [pageSize, setPageSize] = React.useState<number>(5);
  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [
      {
        columnField: 'point',
      },
    ],
  });

  const QuickSearchToolbar = () => (
    <div>
      <GridToolbarFilterButton />
    </div>
  );

  return (
    <div className="table">
      <DataGrid
        rows={rows}
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      />
    </div>
  );
}
