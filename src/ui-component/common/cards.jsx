import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const Cards = (props) => {
  const { backgroundColor, title, icon, value, chart } = props;

  const sx = {
    cardName: {
      minWidth: "1fr auto",
      height: "88px",
      background: backgroundColor,
      display: "flex",
      borderRadius: "5px",
    },
  };

  return (
    <Card variant="outlined" sx={sx.cardName}>
      <CardContent sx={{ px: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={icon} alt="" />
          <Typography
            variant="body2"
            color="text.primary"
            fontWeight="fontWeightMedium"
            fontSize=".8rem"
            sx={{ ml: "8px" }}
          >
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight="fontWeightBold" mt={"4px"} fontSize=".8rem">
            {value}
          </Typography>
          <img width={"25px"} src={chart} alt="" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cards;
