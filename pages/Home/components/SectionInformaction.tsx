import {
  Box,
  FormControl,
  Grid,
  OutlinedInput,
  TextField,
  Typography,
  createTheme,
  useFormControl,
} from "@mui/material";
import { FormContact } from "../../../components/FormContact";
import { TitleSection } from "../../../components/section/TitleSection";

export const SectionInformaction = () => {
  return (
    <Box marginTop="2%" bgcolor="secondary.main" padding={5}>
      <Box textAlign={"center"}>
        <TitleSection title="DONDE ESTAMOS" />
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          padding: { xs: "10px", md: "40px" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          {" "}
          <Typography sx={{ fontWeight: "bold" }}>NUESTRA UBICACIÓN</Typography>
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49692.43591420312!2d-72.306439!3d-38.883338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614c743a5b16b55%3A0xb39ad1f5854351f6!2sS-51%2C%20Araucan%C3%ADa%2C%20Chile!5e0!3m2!1ses-419!2sus!4v1651558610255!5m2!1ses-419!2sus"
            width="90%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
            marginTop: { xs: "40px", md: "0px" },
          }}
        >
          {" "}
          <Typography sx={{ fontWeight: "700", paddingLeft: "15px" }}>
            INFORMACIÓN CONTACTO
          </Typography>
          <FormContact />
        </Box>
      </Box>
    </Box>
  );
};
