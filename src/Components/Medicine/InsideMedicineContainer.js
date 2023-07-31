import React from "react";
import API from "../../api";
import AddMedicine from "./AddMedicine";
import InsideMedicine from "./InsideMedicine";
import "./InsideMedicineContainer.css";
import { Box } from "@mui/material";
const InsideMedicineContainer = () => {
  const [medicines, setMedicines] = React.useState([]);

  const getAllMedicines = async () => {
    try {
      const { data } = await API.get("/api/medicine/getmedicine");
      console.log("data");
      console.log(data);
      if (data?.success) {
        setMedicines(data?.allmedicines);
      }
      console.log(medicines);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  React.useEffect(() => {
    getAllMedicines();
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      className="inside_medicine_container"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // mt: "5vh",
        // border: "1px solid red",
      }}
    >
      <Box
        className="addMedicine__button"
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "85%",
          pt: "5vh",
          // border: "1px solid red",
        }}
      >
        <AddMedicine getAllMedicines={getAllMedicines} />
      </Box>
      <InsideMedicine
        medicines={medicines}
        setMedicines={setMedicines}
        getAllMedicines={getAllMedicines}
      />
    </Box>
  );
};

export default InsideMedicineContainer;
