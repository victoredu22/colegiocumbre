import { Box, Button, Typography } from "@mui/material";
import "../../../styles/bubbles.css";
import { ButtonCumbre } from "../../../components/ButtonCumbre";

export const SectionModell = () => {
  return (
    <Box display="flex" className="bubble-container">
      <Box flex={1} textAlign="center" padding={5}>
        <Box
          component="img"
          sx={{
            width: "80%",
            height: "auto",
            zIndex: 99,
          }}
          alt="Your logo."
          src="./assets/img/integracion1.jpg"
        />
      </Box>
      <Box flex={1} textAlign="center" p={2}>
        <Box textAlign={"left"} marginTop={10} color="#64697a">
          <Typography variant="h4" color="primary">
            Modelo educativo
          </Typography>
          <Typography marginTop={4} width={450} fontSize={20} lineHeight={1.3}>
            Aplicamos un modelo educativo bilingüe, con base en el
            constructivismo y la formación en valores.
          </Typography>
          <ul>
            <li>Formación bilingüe</li>
            <li>Programa de valores</li>
            <li>Perfil de egresados</li>
            <li>Clases extraescolares</li>
          </ul>
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
          <Box sx={{ minWidth: "140px", flex: 1, maxWidth: "200px" }}>
            <ButtonCumbre title="Información" href="/contacto" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
