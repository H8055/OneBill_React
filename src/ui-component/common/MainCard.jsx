import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box, Button, Divider, Typography } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PrintIcon from "@mui/icons-material/Print";
import CollectionSummeryChart from "../../pages/occupant/client dashboard/CollectionSummeryChart";

const Card = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.vars.palette.text.tertiary,
}));

const MainCard = (props) => {
  const title = props.title;
  const data = props.data;

  return (
    <Card>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", padding: "5px" }}
      >
        <ShuffleIcon />
        <Typography>{title}</Typography>
        <Button size="small">
          <PrintIcon />
        </Button>
      </Box>
      <Divider />
      <Box
      // p={1}
      // sx={{ width: "100%", justifyContent: "center", display: "flex" }}
      >
        {data}
      </Box>
    </Card>
  );
};

export default MainCard;
