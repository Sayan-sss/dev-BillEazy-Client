import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "Medicine",
    headerName: "Medicine",
    Width: "150",
    editable: true,
  },
  {
    field: "Quantity",
    headerName: "Quantity",
    Width: "150",
    editable: true,
  },
  {
    field: "Composition",
    headerName: "Composition",
    Width: "150",
    editable: true,
  },
  {
    field: "Rate",
    headerName: "Rate",
    type: "number",
    Width: "150",
    editable: true,
  },
];

const rows = [
  { id: 1, Quantity: "Snow", Composition: "sodium", Medicine: "Jon", Rate: 35 },
  {
    id: 2,
    Quantity: "Lannister",
    Composition: "calciam",
    Medicine: "Cersei",
    Rate: 42,
  },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pRateSize: 5,
            },
          },
        }}
        pRateSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
