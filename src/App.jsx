// project import
import Routes from "./routes";
import ThemeCustomization from "./themes";
import ScrollTop from "./components/ScrollTop";
import { AuthProvider } from "oidc-react";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //
const App = () => {
  const oidcConfig = {
    onSignIn: async (user) => {
      console.log(user);
      console.log("hi");
      localStorage.setItem("user", JSON.stringify(user));
      window.location.hash = "";
    },
    // issuer: "https://localhost:10001/",
    redirectUri: "https://localhost:4200",
    clientId: "Onebill_App",
    requireHttps: true,
    responseType: "code",
    scope: "AdministrationService IdentityService BillingService TenantService",
    authority: "https://localhost:10001/",
    post_logout_redirect_uri: "https://localhost:4200",
    // token_endpoint: "https://localhost:10001/connect/token",
    // userinfo_endpoint: "https://localhost:10001/connect/userinfo",
    loadUserInfo: false,
    // signoutRedirect: "https://localhost:10001/Account/Login",
  };
  useEffect(() => {
    oidcConfig;
  }, []);
  return (
    <>
      <AuthProvider {...oidcConfig}>
        <ThemeCustomization>
          <ScrollTop>
            <Routes />
          </ScrollTop>
        </ThemeCustomization>
      </AuthProvider>
    </>
  );
};

export default App;
