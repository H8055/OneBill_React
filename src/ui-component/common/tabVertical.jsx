import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function TabVertical() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.system" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        orientation="vertical"
        sx={{ width: "8rem", ml: "auto" }}
      >
        <Tab label="BTU">
          <Box>ggg</Box>
        </Tab>
        <Tab label="Gas" />
        <Tab label="Hot Water" />
        <Tab label="Water" />
        <Tab label="Electricity" />
      </Tabs>
    </Box>
  );
}
