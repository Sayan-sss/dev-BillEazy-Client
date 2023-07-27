import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import API from "../../api/index";
import axios from "axios";
import { Button } from "@mui/base";




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
    field: "Rate",
    headerName: "Rate",
    type: "number",
    Width: "150",
    editable: true,
  },
  {
  field: "action",
  headerName: "Action",
  sortable: false,
  renderCell: ({ row }) =>
    <Button >
      Update
    </Button>,
},
];



// const rows = [
//   { id: 1, Quantity: "Snow", Composition: "sodium", Medicine: "Jon", Rate: 35 },
//   {
//     id: 2,
//     Quantity: "Lannister",
//     Composition: "calciam",
//     Medicine: "Cersei",
//     Rate: 42,
//   },


// ];


export default function DataGridDemo() {




const [medicines,setMedicines] =React.useState([])

  const getAllMedicines = async()=>{
    try {
      const {data} = await API.get('/api/medicine/getmedicine')
    console.log("data");
    console.log(data);
    if(data?.success){
      setMedicines(data?.allmedicines)
    }
    console.log(medicines)
    } catch (error) {
      console.log(error);
      alert(error);
    }
    
    
    
    
    }
    


  React.useEffect(()=>{
    getAllMedicines();
  // eslint-disable-next-line
  },[])
 
    // { id: 1, Quantity: "Snow", Composition: "sodium", Medicine: "Jon", Rate: 35 },
    // {
    //   id: 2,
    //   Quantity: "Lannister",
    //   Composition: "calciam",
    //   Medicine: "Cersei",
    //   Rate: 42,
    // },
    
    // medicines.map((m,i)=>{
      
    //   return  rows = [ {id:i+1,Quantity:m?.quantity,Medicine:m?.name}]
      
    // })
    const rows = React.useMemo(
      () => medicines.map((m, i) => (
       (
        { ...m,
           id: i+1 ,
          Quantity: m.quantity,
          Medicine: m.name,
          Rate: m.price,
          Actions:<button>Update</button>
      }
      
       
       
       
       )
     )
      
      ),
      [medicines]
    );

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={  rows }
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
