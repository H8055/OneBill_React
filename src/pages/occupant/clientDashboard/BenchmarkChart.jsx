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
import SelectParameter from "../../../ui-component/common/selectParameter";

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
      display: false,

      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [85, 80, 75, 70, 65, 60, 55, 50, 45, 40],
      fill: false,
      borderDash: [5, 5],
      borderColor: "#FF8800",
      //   cubicInterpolationMode: "monotone",

      tension: 0.1,
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

const BenchmarkChart = () => {
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
          <Typography ml={1}>Benchmark For Current Month</Typography>
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
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",
          marginTop: ".9rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0",
            mb: 4,
          }}
        >
          <SelectParameter />
          <SelectSmall />
          <Typography>Value: 12365</Typography>
        </Box>
        <Line options={options} data={data} />
      </Box>
    </Card>
  );
};

export default BenchmarkChart;
