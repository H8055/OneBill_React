// assets
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SpeedIcon from "@mui/icons-material/Speed";

// icons
const icons = {
  AllInclusiveIcon,
  SpeedIcon,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: "group-dashboard",
  //   title: "Navigation",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard/default",
      icon: icons.SpeedIcon,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
