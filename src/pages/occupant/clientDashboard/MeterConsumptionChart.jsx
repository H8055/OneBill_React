import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
// icons
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PrintIcon from "@mui/icons-material/Print";
// project import
import SelectSmall from "../../../ui-component/common/select";

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: false,
  plugins: {
    legend: {
      display: true,
      position: "right",
    },
    title: {
      display: false,
      text: "consumption of diffrent meters",
    },
  },
};

export const data = {
  labels: ["BTU", "Gas", "Hot Water", "Water", "Electricity"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["#1C5FC4", "#6ADC7F", "#FE4E61", "#726FD4", "#F8CD4B"],
      borderColor: ["#1C5FC4", "#6ADC7F", "#FE4E61", "#726FD4", "#F8CD4B"],
      borderWidth: 2,
    },
  ],
};

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MeterConsumptionChart = () => {
  return (
    <Card>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ShuffleIcon />
          <Typography ml={1}>Consumption of Different Meters.</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SelectSmall />
          <IconButton aria-label="" color="neutral">
            <PrintIcon sx={{ ml: "auto" }} />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: ".9rem",
        }}
      >
        <Doughnut data={data} options={options} />
      </Box>
    </Card>
  );
};

export default MeterConsumptionChart;
