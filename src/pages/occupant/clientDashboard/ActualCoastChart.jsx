import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Box, Divider, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

// icons
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PrintIcon from "@mui/icons-material/Print";
import SelectSmall from "../../../ui-component/common/select";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "#246EE8",
      borderWidth: 4,
      fill: false,
      data: [
        1000, 2000, 3000, 3000, 4000, 2000, 3000, 4000, 2000, 4000, 5000, 3000,
      ],
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "#6adc7f",
      // "linear-gradient(to bottom, #6adc7f, #68c17a, #66a674, #648c6c, #607264)",
      data: [
        3000, 2000, 3000, 4000, 5000, 4000, 3000, 4000, 3000, 4000, 5000, 3000,
      ],
      borderColor: "none",
      borderWidth: 2,
      borderRadius: 6,
    },
    // {
    //   type: "bar",
    //   label: "Dataset 3",
    //   backgroundColor: "rgb(53, 162, 235)",
    //   data: [0, 40000, 10000, 15000, 4000, 9000, 4000, 9000, 0],
    // },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Collection summery",
    },
  },
};

function triggerTooltip(chart) {
  const tooltip = chart?.tooltip;

  if (!tooltip) {
    return;
  }

  if (tooltip.getActiveElements().length > 0) {
    tooltip.setActiveElements([], { x: 0, y: 0 });
  } else {
    const { chartArea } = chart;

    tooltip.setActiveElements(
      [
        {
          datasetIndex: 0,
          index: 2,
        },
        {
          datasetIndex: 1,
          index: 2,
        },
      ],
      {
        x: (chartArea.left + chartArea.right) / 2,
        y: (chartArea.top + chartArea.bottom) / 2,
      }
    );
  }

  chart.update();
}

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ActualCoastChart = () => {
  //   const chartRef = useRef < ChartJS > null;

  //   useEffect(() => {
  //     const chart = chartRef.current;

  //     triggerTooltip(chart);
  //   }, []);
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
          <Typography ml={1}>Estimated Cons. & Actual Cons.</Typography>
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
        <Chart type="bar" data={data} options={options} />
      </Box>
    </Card>
  );
};

export default ActualCoastChart;
