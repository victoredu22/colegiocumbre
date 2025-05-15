import { Box, Typography } from "@mui/material";
import "../../../styles/bubbles.css"; // Importa los estilos
import PlaceIcon from "@mui/icons-material/Place";
import { TitleSection } from "../../../components/section/TitleSection";
import EmailIcon from "@mui/icons-material/Email";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { ButtonCumbre } from "../../../components/ButtonCumbre";
export const Competence = () => {
  return (
    <Box sx={{ padding: "2%" }}>
      <Box textAlign="center">
        <LocationCityIcon color="primary" sx={{ fontSize: "40px" }} />
        <TitleSection title="Nuestro Campus" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Asegura que los hijos se apilen verticalmente
          alignItems: "center", // Centra horizontalmente
          textAlign: "center",
          padding: { xs: "4px", md: "20px" },
          marginTop: "20px",
        }}
        data-aos="fade-up"
        color="#64697a"
      >
        <Typography sx={{ maxWidth: 600 }}>
          Diseñado y construido para dar a nuestros alumnos excelentes
          condiciones de SEGURIDAD, COMODIDAD e HIGIENE.
        </Typography>
        <Typography sx={{ marginTop: "10px", maxWidth: 600 }}>
          Colegio Cumbre de San Ramón, Padre Las Casas, Araucanía.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // <--- mejor que alignContent
          padding: { xs: "4px", md: "20px" },
          marginTop: "20px",
          gap: { xs: "8px", md: "24px" },
          flexWrap: "wrap", // permite que bajen si no hay espacio
        }}
      >
        <Box sx={{ minWidth: "140px", flex: 1, maxWidth: "200px" }}>
          <ButtonCumbre title="Email" href="/contacto">
            <EmailIcon sx={{ paddingLeft: "5px" }} />
          </ButtonCumbre>
        </Box>

        <Box sx={{ minWidth: "140px", flex: 1, maxWidth: "200px" }}>
          <ButtonCumbre title="¿Cómo llegar?" href="/contacto">
            <PlaceIcon sx={{ paddingLeft: "5px" }} />
          </ButtonCumbre>
        </Box>
      </Box>
    </Box>
  );
};
