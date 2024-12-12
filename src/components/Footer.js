import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import FloralDivider from "./FloralDivider";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        bottom: 0,
        position: "absolute",
        backgroundColor: "white",
        height: 100,
        padding: 2,
      }}
      component={"footer"}
    >
      {/* <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: "#e0ddd5",
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation> */}
      <FloralDivider />
      <Typography
        label=""
        sx={{
          color: "#d4452c",
          fontFamily: "Nunito Sans",
          fontWeight: 800,
          letterSpacing: 1,
          textTransform: "uppercase",
          // textShadow: "1px 2px 0px rgba(255,124,61,0.24)",
          height: "fit-content",
          //backgroundColor: "#e0ddd5",
          alignItems: "center",
          textAlign: "center",
          flexWrap: "wrap",
          padding: 1,
          gap: 2,
        }}
      >
        © 2024 Just the Effing Recipe. All Rights Reserved
      </Typography>
    </Box>
  );
}
