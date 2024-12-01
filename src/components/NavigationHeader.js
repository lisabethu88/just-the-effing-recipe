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

const drawerWidth = 240;
const navItems = ["All", "Meal Type", "Quick", "Cuisine", "About"];

const NavigationHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component={"header"} sx={{ display: "flex", height: "fit-content" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", color: "#e0ddd5" }}
      >
        <Toolbar
          sx={{ justifyContent: { xs: "space-between" }, gap: 1, height: 100 }}
        >
          <IconButton
            color="#d4452c"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* logo */}
          <Link to="/">
            <Tooltip title="Home">
              <Box
                component="img"
                src={logo}
                alt={"just the effing recipe logo"}
                sx={{
                  width: { xs: 50, md: 50, lg: 75 },
                }}
              />
            </Tooltip>
          </Link>
          <Typography
            variant="h6"
            component="div"
            fontFamily='"Goudy Bookletter 1911", serif'
            fontWeight={600}
            sx={{
              textWrap: "nowrap",
              flexGrow: 1,
              fontSize: { xs: 20, lg: 35, xl: 40 },
              padding: { xs: 0, md: 2 },
              color: "#314f37",
              //textShadow: "1px 2px 0px #96a87cab",
            }}
          >
            Just the Effing Recipe
          </Typography>
          {/* <SearchBar /> */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              textWrap: "nowrap",
            }}
          >
            {navItems.map((item, index) => (
              <Link to={`${categoryPaths[item.toLowerCase()]}`} key={index}>
                <Button
                  sx={{
                    textDecoration: "none",
                    color: "#e34425",
                    fontWeight: 700,
                    letterSpacing: 2,
                    ":hover": {
                      backgroundColor: "#e0ddd5ab",
                      borderRadius: 0,
                      boxShadow: 2,
                    },
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={undefined}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
