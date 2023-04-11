// material-ui
import { Box, IconButton, Link, useMediaQuery } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

// project import
import Search from "./Search";
import Profile from "./Profile";
import Notification from "./Notification";
import MobileSection from "./MobileSection";
import DarkTheme from "./darkThemeButton";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down("md"));

  //   DarkMode//////////////////////////////////////////////

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: "100%", ml: 1 }} />}

      <IconButton
        color="secondary"
        sx={{ color: "text.primary", bgcolor: "dark" }}
      >
        <DarkTheme />
      </IconButton>

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
