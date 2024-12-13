import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FloralDivider from "./FloralDivider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function DisclaimerModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: "white",
          fontWeight: 800,
          fontFamily: "Nunito Sans",
          letterSpacing: 1,
          borderRadius: 0,
          color: "#ad1a00",
          boxShadow: 2,
          margin: 2,
        }}
      >
        View Disclaimer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontFamily="Nunito Sans"
          >
            Disclaimer
          </Typography>
          <FloralDivider />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please note that the AI-powered recipe customization feature on Just
            the Effing Recipe is designed to assist users by providing general
            suggestions for dietary modifications. While the AI strives to
            deliver accurate and helpful advice, it is an assistant, not an
            authority. We strongly recommend that you verify any dietary
            adjustments or modifications with a qualified professional, such as
            a registered dietitian or healthcare provider, especially if you
            have specific health conditions, allergies, or dietary requirements.
            Just the Effing Recipe and its creators are not responsible for any
            inaccuracies, omissions, or adverse outcomes that may result from
            using the AI-generated suggestions. By using this feature, you
            acknowledge and agree to take full responsibility for any decisions
            made based on the AI’s recommendations. Thank you for understanding
            and for using Just the Effing Recipe!{" "}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
