import { Box, Grid, Typography } from "@mui/material";
import { galeryItems } from "../../../utils/constants";

export const SectionGallery = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",

        padding: { xs: "10%", sm: "10%", md: "3% 130px 130px 130px" },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#aaaaaa",
          "&::after": {
            content: '""',
            width: "200px",
            height: "2px",
            display: "inline-block",
            background: "#9ae1af",
            margin: "4px 10px 7px",
          },
        }}
      >
        VIDA ESCOLAR
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>GALERIA IMAGENES</Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "20px", marginBottom: "20px" }}
        spacing={3}
      >
        {galeryItems.map((item) => (
          <Grid item xs={12} sm={12} md={3} display="grid">
            <Box
              component="img"
              sx={{
                filter: "brightness(90%)",
                height: { xs: "auto", md: "220px" },
                width: "100%",
              }}
              alt="Your logo."
              src={item.url}
            />

            <Typography
              component="span"
              sx={{ color: "rgb(238, 108, 5)", fontWeight: "bold" }}
            >
              {item.section}
            </Typography>

            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
