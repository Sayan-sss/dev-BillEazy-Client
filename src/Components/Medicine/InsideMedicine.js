import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import API from "../../api/index";
import { Button } from "@mui/base";
import toast, { Toaster } from 'react-hot-toast';



export default function DataGridDemo() {

const handleUpdate=async(e,cellValues)=>{
  try {
  
    console.log(cellValues);
    console.log(cellValues.row._id);
    const Medicineid=cellValues.row._id

  } catch (error) {
    console.log(error);
  
  }
  
  
  
  
  }
  

const handleDelete=async(e,cellValues)=>{
  try {
 e.preventDefault()
    // toast.custom(<div 
    //   style={{display:'flex',
    //   flexDirection:'column',
    //   border:'1px solid black',
    //   width:'15rem',
    //   backgroundColor:'grey'}}>
    //     <h3 
    //     style={{color:'black',
    //     fontFamily:'Roboto'}}>
    //       Are you sure you want to delete this
    //       </h3> 
    //       <br/>
    //        <Button onClick={async(e)=>await (deleteselector+1)}>Delete</Button></div>)

    const Medicineid=cellValues.row._id;
    
      const {data} = await API.delete(`api/medicine/deletemedicine/${Medicineid}`)
      if(data?.success){
        toast.success('Deleted successfully');
        getAllMedicines();
      }
      else{
        toast.error('Something went wrong')
      }
    

  
  }
   catch (error) 
   {
    console.log(error);
    toast.error(error);
  
  }
  
  
  
  
  }
  

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
    field: "Update",
    renderCell: (cellValues) => {
      return (
        <Button
        style={{cursor:'pointer',backgroundColor:'yellow',color:'blue',fontFamily:'Roboto',width:'4rem',height:'2rem',letterSpacing:'1.5px',fontWeight:'bold',border:'none',fontSize:'1rem',borderRadius:'3px'}}
          variant="contained"
          color="primary"
          onClick={(event) => {
            handleUpdate(event, cellValues);
          }}
        >
          Update
        </Button>
      );
    }
  },
  {
    field: "Delete",
    renderCell: (cellValues) => {
      return (
        <Button
        style={{cursor:'pointer',backgroundColor:'red',color:'white',fontFamily:'Roboto',width:'4rem',height:'2rem',letterSpacing:'2px',fontWeight:'bold',border:'none',fontSize:'1rem',borderRadius:'3px'}}
        variant="contained"
          color="primary"
          onClick={(event) => {
            handleDelete(event, cellValues);
          }}
        >
      Delete
        </Button>
      );
    }
  }
];






const [medicines,setMedicines] =React.useState([]);



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
          
      }
      
       
       
       
       )
     )
      
      ),
      [medicines]
    );
// console.log(rows[0].name)
  return (
    <>
    <Box sx={{ height: 400, width: "90vw",color:'black' }}>
      <DataGrid  sx={{color:'black' ,margin:'2rem',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}
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
    <Toaster/>
    </>
  );
}


