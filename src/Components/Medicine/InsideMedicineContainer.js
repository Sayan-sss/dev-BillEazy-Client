import React from 'react'
import API from '../../api';
import AddMedicine from './AddMedicine';
import InsideMedicine from "./InsideMedicine";
import './InsideMedicineContainer.css'
const InsideMedicineContainer = () => {

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
 
 
 
 
 
  return (
    <div className='inside_medicine_container'>
<InsideMedicine medicines={medicines} setMedicines={setMedicines} getAllMedicines={getAllMedicines} />
<AddMedicine getAllMedicines={getAllMedicines}/>


    </div>
  )
}

export default InsideMedicineContainer