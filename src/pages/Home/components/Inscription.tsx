import { Box, Typography } from "@mui/material";
import "../../../styles/bubbles.css";
import { ButtonCumbre } from "../../../components/ButtonCumbre";

export const Inscription = () => {
  return (
    <Box
      className="bubble-container"
      id="comunicacion"
      color="black"
      justifyContent="center"
      alignItems="center"
      bgcolor="secondary.main"
      sx={{
        display: { xs: "flex", md: "flex" },
        flexDirection: { xs: "column-reverse", md: "row" },
        padding: "2%",
      }}
    >
      <Box
        textAlign={"center"}
        sx={{ width: { xs: "100%", md: "80%" }, order: { xs: 2, md: "none" } }}
      >
        <Box
          component="img"
          alt="Descripción de la imagen"
          src="./assets/img/inscripcion.jpg"
          sx={{
            width: "65%",
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
        {[1, 2, 3, 4, 5].map((_, index) => (
          <span
            key={index}
            className="bubble"
            style={{
              top: index < 2 ? `${30 + index * 10}%` : `${10 + index * 10}%`, // posiciones verticales distintas
              left: index < 2 ? `${5 + index * 20}%` : `${5 + index * 20}%`, // posiciones horizontales distintas
              animationDuration: `${5 + index}s`, // diferente velocidad
              transformOrigin: "0 0",
            }}
          />
        ))}
        <Box display="block" width={500} textAlign={"center"}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Mukta Mahee', sans-serif",
              marginBottom: "30px",
            }}
            data-aos="fade-up"
          >
            Inscripciones Abiertas
          </Typography>
          <Typography data-aos="fade-up" color="#64697a">
            ¡Bienvenida familia! Forma parte de Colegio Cumbres San Ramón, donde
            tu hijo recibirá la mejor educación y formación cristiana.
          </Typography>

          <ButtonCumbre
            title="¡Inscríbete Hoy!"
            href="/contacto"
            type="button"
          />
        </Box>
      </Box>
    </Box>
  );
};
