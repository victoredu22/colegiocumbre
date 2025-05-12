import { Box, Grid, Typography } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Groups2Icon from "@mui/icons-material/Groups2";

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SchoolIcon from "@mui/icons-material/School";
import { TitleSection } from "../../../components/section/TitleSection";

export const InformationCumbre = () => {
  return (
    <Box sx={{ padding: "9%" }}>
      <Box
        sx={{
          display: "flex",

          textAlign: "center",
        }}
        data-aos="fade-up"
      >
        <Box sx={{ width: "60%", textAlign: "left" }}>
          <TitleSection title="¿Por qué el Colegio Cumbre San Ramón?" />
          <Typography sx={{ textAlign: "left", marginTop: "20px" }}>
            En el Colegio Cumbres San Ramón, nos dedicamos a proporcionar una
            educación de alta calidad mientras creamos un entorno enriquecedor
            donde cada estudiante pueda florecer y alcanzar su máximo potencial.
          </Typography>
          <Typography sx={{ textAlign: "left", marginTop: "10px" }}>
            Desde deportes hasta actividades artísticas y tecnológicas,
            ofrecemos un espacio para cada pasión, fomentando el desarrollo
            integral de nuestros estudiantes. En el Colegio Cumbres San Ramón,
            impulsamos un aprendizaje holístico que nutre tanto la mente como el
            espíritu.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "30%",
            marginLeft: "5%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} padding={2}>
              <Box display={"flex"}>
                <AccessTimeIcon
                  color="primary"
                  sx={{
                    marginTop: "2px",
                    marginRight: "10px",
                    fontSize: "40px",
                  }}
                />{" "}
                <Typography variant="subtitle2">Horarios</Typography>
              </Box>
              <Box display={"flex"}>
                <Typography sx={{ fontSize: "20px" }}>07:45 a 14:30</Typography>
              </Box>
              <Box display={"flex"}>
                <Typography sx={{ fontSize: "20px" }}>
                  Lunes - Viernes
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box display={"flex"}>
                <SportsSoccerIcon
                  color="primary"
                  sx={{
                    marginTop: "2px",
                    marginRight: "10px",
                    fontSize: "40px",
                  }}
                />{" "}
                <Typography variant="subtitle2">Actividades</Typography>
              </Box>
              <Box display={"flex"}>
                <Typography sx={{ textAlign: "left" }}>
                  Contamos con una amplia oferta de actividades deportivas para
                  todos los estudiantes.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box display={"flex"}>
                <SchoolIcon
                  sx={{
                    marginTop: "2px",
                    marginRight: "10px",
                    fontSize: "40px",
                  }}
                  color="primary"
                />{" "}
                <Typography variant="subtitle2">Uniforme</Typography>
              </Box>
              <Box display={"flex"}>
                <Typography sx={{ textAlign: "left" }}>
                  Uniforme propio y pensado para acompañarte todos los días
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box display={"flex"}>
                <Groups2Icon
                  sx={{
                    marginTop: "2px",
                    marginRight: "10px",
                    fontSize: "40px",
                  }}
                  color="primary"
                />{" "}
                <Typography variant="subtitle2">Alumnos</Typography>
              </Box>
              <Box display={"flex"}>
                <Typography sx={{ textAlign: "left" }}>
                  Máximo por grupo: 35 Lista de Espera: Sí
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
