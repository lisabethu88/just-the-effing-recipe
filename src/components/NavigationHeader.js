import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import logo from "../assets/jter-logo.png";
import { Link } from "react-router-dom";
import { categoryPaths } from "../data/Constants";
import FloralDivider from "./FloralDivider";

const drawerWidth = 240;
const navItems = ["All", "Meal Type", "Quick", "Cuisine", "About"];

const NavigationHeader = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);

    // if (mobileOpen) {
    //   // Shift focus back to the menu button when Drawer is closed
    //   const menuButton = document.querySelector('[aria-label="open drawer"]');
    //   if (menuButton) menuButton.focus();
    // }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        component="div"
        fontFamily='"Goudy Bookletter 1911", serif'
        fontWeight={600}
        sx={{
          my: 2,
          color: "#314f37",
        }}
      >
        Just the Effing Recipe
      </Typography>{" "}
      <FloralDivider />{" "}
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={`${categoryPaths[item.toLowerCase()]}`}
            >
              <ListItemText
                primary={item}
                sx={{
                  "& .MuiTypography-root": {
                    textDecoration: "none",
                    color: "#ad1a00",
                    fontWeight: 800,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontFamily: "Nunito Sans",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} component="header">
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", color: "#e0ddd5" }}
      >
        <Toolbar
          sx={{
            justifyContent: {
              xs: "flex-start",
              sm: "space-between",
            },
            gap: 1,
            height: 100,
          }}
        >
          <IconButton
            color="#ad1a00"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* logo */}

          <Link to="/">
            {" "}
            <Tooltip title="Home">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt={
                    "Website logo featuring a tomato designed as a pomodoro timer, with a green vine extending from its top."
                  }
                  sx={{
                    width: { xs: 50, md: 50, lg: 75 },
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  fontFamily='"Goudy Bookletter 1911", serif'
                  fontWeight={600}
                  sx={{
                    textWrap: "wrap",
                    flexGrow: 1,
                    fontSize: { xs: 20, lg: 35, xl: 40 },
                    padding: { xs: 0, md: 2 },
                    color: "#314f37",
                  }}
                >
                  Just the Effing Recipe
                </Typography>{" "}
              </Box>
            </Tooltip>
          </Link>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              textWrap: "nowrap",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "flex-end",
            }}
          >
            {navItems.map((item, index) => (
              <Link
                to={`${categoryPaths[item.toLowerCase()]}`}
                key={index}
                className="custom-link"
              >
                {item}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavigationHeader;
