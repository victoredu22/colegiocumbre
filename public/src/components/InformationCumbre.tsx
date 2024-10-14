import { Box, Grid, Typography } from "@mui/material";
import { TitleSection } from "./section/TitleSection";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Groups2Icon from "@mui/icons-material/Groups2";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
export const InformationCumbre = () => {
  return (
    <Box sx={{ padding: { xs: "7px", sm: "20px", md: "120px" } }}>
      <Box textAlign={"center"} sx={{ marginTop: "40px" }}>
        <TitleSection title="¿Por qué el Colegio Cumbre San Ramón?" />
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: { xs: "4px", md: "40px" },
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Typography sx={{ textAlign: "left", marginTop: "10px" }}>
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
            marginLeft: "10%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} padding={2}>
              <Box display={"flex"}>
                <AccessTimeIcon
                  sx={{ marginTop: "2px", marginRight: "10px" }}
                />{" "}
                <Typography color="black" fontWeight={"bold"}>
                  Horarios
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Typography>07:45 a 14:30</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box display={"flex"}>
                <AccessTimeIcon
                  sx={{ marginTop: "2px", marginRight: "10px" }}
                />{" "}
                <Typography color="black" fontWeight={"bold"}>
                  Extendido
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Typography>a 18:00</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box display={"flex"}>
                <HomeRepairServiceIcon
                  sx={{ marginTop: "2px", marginRight: "10px" }}
                />{" "}
                <Typography color="black" fontWeight={"bold"}>
                  Uniforme
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Typography>Uniforme de colegio</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box display={"flex"}>
                <Groups2Icon sx={{ marginTop: "2px", marginRight: "10px" }} />{" "}
                <Typography color="black" fontWeight={"bold"}>
                  Alumnos
                </Typography>
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
