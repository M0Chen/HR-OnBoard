import * as React from "react";
// import Divider from '@mui/material/Divider';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import TopicIcon from "@mui/icons-material/Topic";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import LogoutIcon from "@mui/icons-material/Logout";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
const EmployeeCategories = [
  {
    id: "Pages",
    children: [
      {
        id: "Personal Information",
        icon: <PeopleIcon />,
        active: true,
      },
      { id: "Visa Status Management", icon: <TopicIcon /> },
      { id: "Housing", icon: <MapsHomeWorkIcon /> },
    ],
  },
  //   {
  //     id: '',
  //     children: [
  //       { id: 'Log out', icon: <LogoutIcon /> },
  //     ],
  //   },
];

//a. Home, Employee Profiles, Visa Status Management, Hiring Management, Housing Management, Logout
const HRCategories = [
  {
    id: "Pages",
    children: [
      {
        id: "Employee Profiles",
        icon: <PeopleIcon />,
        active: true,
      },
      { id: "Visa Status Management", icon: <TopicIcon /> },
      { id: "Hiring Management", icon: <ManageAccountsIcon /> },
      { id: "Housing Management", icon: <MapsHomeWorkIcon /> },
    ],
  },
];

const item = {
  py: "2px",
  px: 4,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 4,
};

export default function Navbar(props) {
  const { identity, setCategory } = props;
  const handleCategoryChange= (id)=>{
    setCategory(id)
  }
  function navigationChoice() {
    return (
      <div>
        {(identity === "HR" ? HRCategories : EmployeeCategories).map(
          ({ id, children }) => (
            <Box key={id} sx={{ bgcolor: "#0B1929", pt: 6 }}>
              {children.map(({ id: childId, icon, active }) => (
                <ListItem disablePadding key={childId} onClick={() => handleCategoryChange(childId)}>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon sx={{ color: "#B6BBBF" }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          )
        )}
      </div>
    );
  }
  return (
    <Drawer variant="permanent" PaperProps={{ style: { width: 303 } }}>
      <List disablePadding sx={{ bgcolor: "#0B1929", minHeight: "100vh" }}>
        <ListItem sx={{ ...itemCategory, fontSize: "5vh", color: "white" }}>
          Beaconfire
        </ListItem>
        <ListItem sx={{ ...itemCategory, color: "rgba(255, 255, 255, 0.7)" }}>
          <ListItemIcon sx={{ color: "#B6BBBF" }}>
            <AccessibilityIcon />
          </ListItemIcon>
          <ListItemText>Welcome, {"Username"}</ListItemText>
        </ListItem>
        {navigationChoice()}
        <ListItem disablePadding sx={{ py: 20 }}>
          <ListItemButton sx={item}>
            <ListItemIcon sx={{ color: "#B6BBBF" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>{"Log out"}</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
