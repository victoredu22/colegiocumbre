import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        justifyContent: "space-between",
        bgcolor: "black",
        color: "white",
        padding: "5% 10% 5% 10%",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box sx={{ width: { xs: "auto", md: "600px" }, padding: "1%" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          Colegio Cumbre San Ramon
        </Typography>
        <Box
          sx={{
            borderTop: "4px solid white",
            maxWidth: "20px",
            marginBottom: "20px",
            marginLeft: { xs: "48%", md: "0%" },
          }}
        ></Box>
        <Typography>
          Somos una Institución que, a través de un trabajo mancomunado con la
          familia guíe la formación de un alumnado autónomo, reflexivo, crítico,
          responsable de sí mismo, inclusivo; para que contribuyan al bien común
          en una sociedad colaborativa, multicultural y en constante devenir;
          pudiendo ser un referente para toda la comunidad.
        </Typography>
      </Box>
      <Box sx={{ marginTop: { xs: "40px", md: "0px" } }}>
        {" "}
        <Typography variant="h6" sx={{ color: "white" }}>
          Links Utiles
        </Typography>
        <Box
          sx={{
            borderTop: "4px solid white",
            maxWidth: "20px",
            marginBottom: "20px",
            marginLeft: { xs: "48%", md: "0%" },
          }}
        ></Box>
        <Typography>Inicio</Typography>
        <Typography>Comunicación</Typography>
        <Typography>Nuestro Colegio</Typography>
      </Box>
      <Box sx={{ marginTop: { xs: "40px", md: "0px" } }}>
        <Typography>Encuentranos en : </Typography>
        <Typography>S-51, Freire</Typography>
        <Typography>Región de la Araucanía - Chile </Typography>
        <Typography>Telefono: +56963657018</Typography>
        <Typography>Correo: contacto@cumbresanramon.cl</Typography>
      </Box>
    </Box>
  );
};
