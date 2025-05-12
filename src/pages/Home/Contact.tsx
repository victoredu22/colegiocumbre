import { Box, Typography } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../global/MainTheme";

import { FormContact } from "../../components/FormContact";

export const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex">
        <Box
          sx={{
            flexGrow: 1,
            position: "relative",
            width: "100vw",
            height: "100vh",
            display: "flex",
            backgroundImage: 'url("./assets/img/estudio.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              width: "15%",
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              borderRight: "1px solid rgba(255, 255, 255, 0.3)",
              px: 3,
              py: 5,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="./assets/img/logoCumbre.png"
              alt="Logo Colegio Cumbre"
              sx={{ width: 80, mb: 2, mx: "auto" }}
            />
            <Typography variant="h6" color="primary" fontWeight="bold">
              Colegio Cumbre San Ramón
            </Typography>
            <Typography sx={{ my: 2 }}>
              Formamos personas con valores, disciplina y compromiso.
            </Typography>
            <Typography>Matrículas abiertas para todos los niveles.</Typography>
            <Typography
              sx={{ fontSize: "17px", mt: 1 }}
              color="primary"
              fontWeight="bold"
            >
              Ciclo escolar 2025-2026
            </Typography>
          </Box>
        </Box>
        <Box
          color="red"
          sx={{
            width: "25%",
            padding: "2%",
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="./assets/img/logoCumbre.png"
            alt="Logo Colegio Cumbre"
            sx={{ width: 80, mb: 2, mx: "auto" }}
          />

          <Box alignContent={"center"}>
            <Box>
              <Typography
                color="primary"
                marginBottom={2}
                sx={{ fontSize: "28px", lineHeight: "1.3" }}
              >
                Gracias por su interés en Colegio Cumbre San Ramón
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              color="#64697a"
              sx={{
                fontSize: "14px",
                lineHeight: "1.3",
                marginBottom: "5px",
                textAlign: "left",
              }}
            >
              Los datos aquí recopilados son totalmente resguardados y solo se
              utilizarán con fines informativos. Para mayor detalle, favor de
              consultar nuestro aviso de privacidad en:
            </Typography>
            <FormContact />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
