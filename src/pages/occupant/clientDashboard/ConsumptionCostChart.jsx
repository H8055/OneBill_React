import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
// icons
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PrintIcon from "@mui/icons-material/Print";
// project import
import SelectSmall from "../../../ui-component/common/select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      // text: "",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "BTU",
      data: [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170],
      borderColor: "#1C5FC4",
      cubicInterpolationMode: "monotone",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Gas",
      data: [0, 40, 20, 70, 40, 80, 160, 140, 175, 135, 160, 130],
      borderColor: "#F8CD4B",
      cubicInterpolationMode: "monotone",

      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Hot water",
      data: [0, 30, 20, 10, 30, 40, 130, 120, 155, 175, 120, 180],
      borderColor: "#FE4E61",
      cubicInterpolationMode: "monotone",

      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Water",
      data: [0, 10, 20, 30, 50, 60, 120, 130, 75, 135, 60, 30],
      borderColor: "#726FD4",
      cubicInterpolationMode: "monotone",

      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Electricity",
      data: [0, 40, 20, 70, 40, 80, 160, 140, 175, 135, 160, 130],
      borderColor: "#6ADC7F",
      cubicInterpolationMode: "monotone",

      backgroundColor: "rgba(53, 162, 235, 0.5)",
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

const ConsumptionCostChart = () => {
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
          <Typography ml={1}>Consumptions</Typography>
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
        <Line options={options} data={data} />
      </Box>
    </Card>
  );
};

export default ConsumptionCostChart;
