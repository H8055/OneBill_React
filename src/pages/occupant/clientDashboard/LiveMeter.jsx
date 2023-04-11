import React from "react";
// mui imports
import { Box, Divider, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

// icons
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PrintIcon from "@mui/icons-material/Print";
import TabVertical from "../../../ui-component/common/tabVertical";
// project import

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LiveMeter = () => {
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
          <Typography ml={1}>Live Meter</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
        {/* <Chart type="bar" data={data} options={options} /> */}
        {/* <Box>
          <Typography fontSize={20} fontWeight="bold">
            Hot Water
            <br />
            <span>
              <Typography fontSize={9}>Live Meter Consumption </Typography>
            </span>
          </Typography>
        </Box> */}
        <TabVertical />
      </Box>
    </Card>
  );
};

export default LiveMeter;
