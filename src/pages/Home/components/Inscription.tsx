import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

export const Inscription = () => {
  return (
    <Box
      id="comunicacion"
      color="black"
      justifyContent="center"
      alignItems="center"
      bgcolor="secondary.main"
      sx={{
        display: { xs: "flex", md: "flex" },
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Box
        textAlign={"center"}
        sx={{ width: { xs: "100%", md: "50%" }, order: { xs: 2, md: "none" } }}
      >
        <Box
          component="img"
          alt="Descripción de la imagen"
          src="./assets/img/inscripcion.jpg"
          sx={{
            width: "100%",
          }}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: { xs: "100%", md: "50%" },
          order: { xs: 1, md: "none" },
          margin: { xs: "6px", sm: "20px", md: "none" },
        }}
      >
        <Box display="block" width={400} textAlign={"center"}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Mukta Mahee', sans-serif",
              marginBottom: "30px",
            }}
          >
            Inscripciones Abiertas
          </Typography>
          <Typography>
            ¡Bienvenida familia! Forma parte de Cumbres, donde tu hijo recibirá
            la mejor educación y formación cristiana.
          </Typography>

          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: "20px",
              padding: { xs: "2px", md: "10px" },
              width: { xs: "120px", md: "200px" },
              marginTop: "20px",
              fontWeight: "600",
            }}
          >
            ¡Inscríbete Hoy!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
