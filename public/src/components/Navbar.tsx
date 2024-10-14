import {
  AppBar,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Logo from "../assets/img/logoCumbre.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import { ModalMenu } from "./ModalMenu";
import { listItem } from "../utils/constants";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "Inicio",
  "Comunicacion",
  "Nuestro Colegio",
  "Contacto",
  "Iniciar Sesion",
];

export const Navbar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

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

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
