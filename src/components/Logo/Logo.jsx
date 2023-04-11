// material-ui
import { useTheme } from "@mui/material/styles";

import logo from "../../assets/images/OnebillLogo.svg";

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    <>
      <img src={logo} alt="onebill" width="180" />
    </>
  );
};

export default Logo;
