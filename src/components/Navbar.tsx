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
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Limita la opacidad entre 0 y 1 en los primeros 300px
      const newOpacity = Math.min(scrollY / 20, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <ModalMenu
        open={openModal}
        handleOpen={() => setOpenModal(true)}
        handleClose={() => handleCloseModal()}
      />

      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            position: "fixed",
            top: 0,
            width: "100%",
            padding: "0px",
            color: opacity < 1 ? "white" : "#0c2b72",
            backgroundColor: `rgba(255, 255, 255, ${opacity})`,
            boxShadow: opacity > 0 ? "0 2px 6px rgba(0,0,0,0.1)" : "none",
            transition: "background-color 0.3s linear",
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
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
            }}
          >
            {listItem.map((item) => (
              <Button
                href={item.url}
                key={item.id}
                sx={{
                  fontWeight: "bold",
                  padding: "25px",
                  color: opacity < 1 ? "white" : "#0c2b72",
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              paddingLeft: { xs: "3px", md: "40px" },
              marginRight: { xs: "3px", md: "30px" },
              borderLeft: "solid 2px rgba(0,0,0,0.05)",
            }}
          >
            <Box component="a" href="/contacto">
              <MailOutlineIcon
                sx={{ height: opacity < 1 ? 90 : 1, color: "white" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              paddingLeft: { xs: "3px", md: "30px" },
              marginRight: { xs: "3px", md: "30px" },
              borderLeft: "solid 2px rgba(0,0,0,0.05)",
            }}
          >
            <Box component="a" href="/contacto">
              <PhoneIcon
                sx={{ height: opacity < 1 ? 90 : 1, color: "white" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
