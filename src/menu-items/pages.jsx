// assets
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import PolylineRoundedIcon from "@mui/icons-material/PolylineRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import LegendToggleRoundedIcon from "@mui/icons-material/LegendToggleRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";

// icons
const icons = {
  AllInclusiveIcon,
  GroupsRoundedIcon,
  PolylineRoundedIcon,
  SpeedRoundedIcon,
  LegendToggleRoundedIcon,
  ReceiptLongRoundedIcon,
  PaymentRoundedIcon,
  ReceiptRoundedIcon,
  NotificationsRoundedIcon,
  SettingsRoundedIcon,
  SupportAgentRoundedIcon,
  Diversity3RoundedIcon,
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: "pages",
  //   title: "pages",
  type: "group",
  children: [
    {
      id: "userManagement",
      title: "User Management",
      type: "item",
      url: "",
      icon: icons.GroupsRoundedIcon,
      //   target: true,
    },
    {
      id: "occupantList",
      title: "Occupant List",
      type: "item",
      url: "",
      icon: icons.PolylineRoundedIcon,
    },
    {
      id: "meterLiveliness",
      title: "Meter Liveliness",
      type: "item",
      url: "",
      icon: icons.SpeedRoundedIcon,
    },
    {
      id: "meterList",
      title: "Meter List",
      type: "item",
      url: "",
      icon: icons.LegendToggleRoundedIcon,
    },
    {
      id: "billing",
      title: "Billing",
      type: "item",
      url: "",
      icon: icons.ReceiptLongRoundedIcon,
    },
    {
      id: "payments",
      title: "Payments",
      type: "item",
      url: "",
      icon: icons.PaymentRoundedIcon,
    },
    {
      id: "reports",
      title: "Reports",
      type: "item",
      url: "",
      icon: icons.ReceiptRoundedIcon,
    },
    {
      id: "notifications",
      title: "Notifications",
      type: "item",
      url: "",
      icon: icons.NotificationsRoundedIcon,
    },
    {
      id: "settings",
      title: "Settings",
      type: "item",
      url: "",
      icon: icons.SettingsRoundedIcon,
    },
    {
      id: "support",
      title: "Support",
      type: "item",
      url: "",
      icon: icons.SupportAgentRoundedIcon,
    },
    {
      id: "groupManagement",
      title: "Group Management",
      type: "item",
      url: "",
      icon: icons.Diversity3RoundedIcon,
    },
  ],
};

export default pages;
