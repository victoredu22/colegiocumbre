import { Box, Button, Typography } from "@mui/material";

export const SectionEnrollment = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(./assets/img/fondoEspecial.jpg)",
        backgroundColor: "#005A5C",
        backgroundAttachment: "fixed",
        width: "auto",
        height: { xs: "50vh", md: "30vh" },
        backgroundSize: "cover",
        position: "relative",
        textAlign: "center",
        padding: {
          xs: "30px 10px 10px 10px",
          sm: "30px 130px 25% 130px",
          md: "80px 130px 250px 130px",
        },
        color: "white",
        filter: "brightness(90%)",
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "30px", md: "2rem" }, fontWeight: "bold" }}
      >
        Consulta tu matricula
      </Typography>
      <Typography>
        Las inscripciones para el segundo ciclo del año 2022 ya se encuentra
        disponible, haz click aqui para mayor información .
      </Typography>
      <Button
        sx={{
          color: "white",
          border: "2px solid",
          borderColor: "white",
          width: 220,
          height: 30,
          padding: "20px",
          marginTop: "2%",
        }}
        variant="outlined"
      >
        Conocenos
      </Button>
    </Box>
  );
};
