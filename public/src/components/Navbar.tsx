import { AppBar, Button, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Logo from "../assets/img/logoCumbre.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import { ModalMenu } from "./ModalMenu";
import { listItem } from "../utils/constants";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

export const Navbar = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <ModalMenu
        open={openModal}
        handleOpen={() => setOpenModal(true)}
        handleClose={() => handleCloseModal()}
      />

      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "white", height: "40px" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              paddingLeft: { xs: "0px", md: "90px" },
              justifyContent: "left",
              borderRight: "solid 1px rgba(0,0,0,0.05)",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 44,
                borderRadius: "85%",
              }}
              alt="Your logo."
              src={Logo}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
            }}
          >
            <MenuIcon onClick={handleOpenModal} sx={{ color: "black" }} />
          </Box>

          <Box
            sx={{
              flexGrow: 22,
              display: { xs: "none", sm: "block" },
              color: "black",
            }}
          >
            {listItem.map((item) => (
              <Button
                color="primary"
                href={item.url}
                key={item.id}
                sx={{ fontWeight: "bold" }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <Box
            color="primary.main"
            sx={{
              display: { xs: "none", sm: "block" },
              paddingLeft: { xs: "3px", md: "30px" },
              marginRight: { xs: "3px", md: "30px" },
              borderLeft: "solid 2px rgba(0,0,0,0.05)",
            }}
          >
            <MailOutlineIcon sx={{ height: 90 }} />
          </Box>

          <Box
            color="primary.main"
            sx={{
              display: { xs: "none", sm: "block" },
              paddingLeft: { xs: "3px", md: "30px" },
              marginRight: { xs: "3px", md: "30px" },
              borderLeft: "solid 2px rgba(0,0,0,0.05)",
            }}
          >
            <PhoneIcon sx={{ height: 90 }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
