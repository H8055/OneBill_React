import * as React from "react";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SelectSmall from "./select";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Button } from "@mui/material";
///////////////////////////////////////////////////
ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: false,
  plugins: {
    legend: {
      display: false,
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
/////////////////////////////////////////////////////////////////////

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.system", width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="BTU" {...a11yProps(0)} />
          <Tab label="Gas" {...a11yProps(1)} />
          <Tab label="Hot Water" {...a11yProps(2)} />
          <Tab label="Water" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <Box
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: ".9rem",
              mt: "auto",
            }}
          >
            <Box sx={{ width: "2rem", mr: "auto" }}>
              {/* <Doughnut data={data} options={options} /> */}
            </Box>
            <Box>
              <SelectSmall />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: ".9rem",
                  mt: "auto",
                }}
              >
                <Typography>Avarage</Typography>
                <Typography>0.00kwh</Typography>
              </Box>
              <Button variant="contained" size="medium" sx={{ px: "2.5rem" }}>
                Details
              </Button>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: ".9rem",
              mt: "auto",
            }}
          >
            <Box sx={{ width: "2rem", mr: "auto" }}>
              {/* <Doughnut data={data} options={options} /> */}
            </Box>
            <Box>
              <SelectSmall />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: ".9rem",
                  mt: "auto",
                }}
              >
                <Typography>Avarage</Typography>
                <Typography>0.00kwh</Typography>
              </Box>
              <Button variant="contained" size="medium" sx={{ px: "2.5rem" }}>
                Details
              </Button>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: ".9rem",
              mt: "auto",
            }}
          >
            <Box sx={{ width: "2rem", mr: "auto" }}>
              {/* <Doughnut data={data} options={options} /> */}
            </Box>
            <Box>
              <SelectSmall />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: ".9rem",
                  mt: "auto",
                }}
              >
                <Typography>Avarage</Typography>
                <Typography>0.00kwh</Typography>
              </Box>
              <Button variant="contained" size="medium" sx={{ px: "2.5rem" }}>
                Details
              </Button>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: ".9rem",
              mt: "auto",
            }}
          >
            <Box sx={{ width: "2rem", mr: "auto" }}>
              {/* <Doughnut data={data} options={options} /> */}
            </Box>
            <Box>
              <SelectSmall />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: ".9rem",
                  mt: "auto",
                }}
              >
                <Typography>Avarage</Typography>
                <Typography>0.00kwh</Typography>
              </Box>
              <Button variant="contained" size="medium" sx={{ px: "2.5rem" }}>
                Details
              </Button>
            </Box>
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
