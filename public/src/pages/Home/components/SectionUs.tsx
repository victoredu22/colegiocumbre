import { Box, Typography } from "@mui/material";

export const SectionUs = () => {
  return (
    <Box
      id="comunicacion"
      bgcolor="primary.main"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        textAlign={"center"}
        sx={{
          margin: {
            xs: "5% 20% 5% 20%",
          },
        }}
      >
        <Typography variant="h4" color="white" marginBottom={3}>
          NOSOTROS
        </Typography>
        <Typography>
          Tenemos como misión desarrollar en cadas uno de sus estudiantes
          saberes y competencias de carácter intelectual, físicas, emocionales y
          sociales que les permitan resolver satisfactoria y constructivamente
          los desafíos que le presenta el diario vivir, en un ambiente de sana
          convivencia democrática.
        </Typography>
      </Box>
    </Box>
  );
};
