import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navbar from "../components/NavBar";
import HRContent from "./HR/Content";
import EmployeeContent from "./Employee/Content";

import Header from "../components/Header";

export default function Main() {
  const identity = "HR";
  const [category, setCategory] = React.useState(
    identity === "HR" ? "Employee Profiles" : "Personal Information"
  );
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />
        <Box component="nav">
          <Navbar
            PaperProps={{ style: { width: "30vw" } }}
            identity={identity}
            setCategory={setCategory}
          />
        </Box>
        <Box
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* header */}
          <Box component="header">
            <Header header={category} />
          </Box>
          <Box component="main" sx={{ flex: 1, bgcolor: "#eaeff1", p: 5 }}>
            {identity === "HR" ? (
              <HRContent category={category} />
            ) : (
              <EmployeeContent category={category} />
            )}
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}></Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

let theme = createTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#081627",
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#4fc3f7",
          },
        },
      },
    },
  },
};

const drawerWidth = 303;
