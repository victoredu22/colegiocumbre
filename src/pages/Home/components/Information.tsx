import { Box, Typography } from "@mui/material";
export const Information = () => {
  return (
    <Box
      id="comunicacion"
      color="black"
      bgcolor="white"
      sx={{ display: { sx: "block", md: "flex" } }}
    >
      <Box
        sx={{ width: { xs: "100%", sm: "100%", md: "34%" } }}
        bgcolor="#F5F5F5"
      >
        <Box sx={{ padding: "50px" }}>
          <Typography variant="h4">Kinder</Typography>
          <Typography>
            Fomentamos un enfoque educativo que potencia el aprendizaje
            significativo. Guiamos a nuestros alumnos para que construyan su
            propio conocimiento a partir de sus experiencias previas, lo cual
            les permite relacionar los nuevos conceptos con lo que ya conocen.
            Este método de "aprendizaje significativo" les facilita aplicar lo
            aprendido en su vida diaria, dotándolos de herramientas útiles y
            prácticas.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "33%" },
          backgroundColor: "#F5F5F5",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
          }}
          alt="Your logo."
          src="./assets/img/estudio.jpg"
        />
      </Box>
      <Box
        sx={{ width: { xs: "100%", sm: "100%", md: "33%" } }}
        bgcolor="#F5F5F5"
      >
        <Box sx={{ padding: "50px" }}>
          <Typography variant="h4">Primaria</Typography>
          <Typography>
            En el Colegio Cumbres San Ramón, reconocemos que el aprendizaje
            implica el desarrollo y la puesta en práctica de diversas
            habilidades. Nuestro programa educativo se enfoca en cultivar
            aquellas destrezas fundamentales para el éxito académico. Entre las
            habilidades clave para el aprendizaje escolar, nuestro enfoque se
            centra en potenciar la atención, percepción, memoria, pensamiento
            crítico, estructuración espacial, comprensión del tiempo,
            coordinación rítmica, lenguaje, expresión artística, habilidades
            matemáticas y el autoconocimiento.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
