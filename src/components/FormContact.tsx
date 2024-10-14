import { Box, Button, OutlinedInput, TextField } from "@mui/material";
import { useForm } from "../hook/useForm";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const FormContact: React.FC = () => {
  const [formValues] = useForm({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    nombreNiño: "",
    edadNiño: "",
    message: "",
  });

  const inputStyles = {
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid #ddd8d8 !important`,
      color: "blue !important",
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: `5px dotted red`,
      },
    },
  };

  const boxStyles = {
    display: "block",
    flexDirection: "row",
    p: 1,
    m: 1,
    bgcolor: "#F5F5F5",
    borderRadius: 1,
  };

  // Definir el esquema de validación Yup
  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .required("El nombre es obligatorio"),
    apellido: Yup.string()
      .min(2, "El apellido debe tener al menos 2 caracteres")
      .required("El apellido es obligatorio"),

    email: Yup.string()
      .min(2, "El email debe tener al menos 2 caracteres")
      .required("El email es obligatorio"),
    telefono: Yup.string()
      .min(2, "El telefono debe tener al menos 2 caracteres")
      .required("El telefono es obligatorio"),

    nombreNiño: Yup.string()
      .min(2, "El nombre niño debe tener al menos 2 caracteres")
      .required("El nombre niño es obligatorio"),
    edadNiño: Yup.string()
      .min(2, "El edad niño debe tener al menos 2 caracteres")
      .required("El edad niño es obligatorio"),

    message: Yup.string().required("El mensaje es obligatorio"),
  });

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Aquí puedes manejar la acción de envío del formulario con los valores validados
        console.log("Datos enviados:", values);
      }}
    >
      <Form>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "50%", padding: "10px" }}>
            <Field name="nombre">
              {({ field, meta }: any) => (
                <>
                  <OutlinedInput
                    {...field}
                    placeholder="Ingresa tu Nombre"
                    sx={inputStyles}
                    fullWidth
                  />
                  {meta.touched && meta.error && (
                    <>
                      <br></br>
                      <div style={{ color: "red" }}>{meta.error}</div>
                    </>
                  )}
                </>
              )}
            </Field>
          </Box>
          <Box sx={{ width: "50%", padding: "10px" }}>
            <Field name="apellido">
              {({ field, meta }: any) => (
                <>
                  <OutlinedInput
                    {...field}
                    placeholder="Ingresa tu Apellido"
                    sx={inputStyles}
                    fullWidth
                  />
                  {meta.touched && meta.error && (
                    <>
                      <br></br>
                      <div style={{ color: "red" }}>{meta.error}</div>
                    </>
                  )}
                </>
              )}
            </Field>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "50%", padding: "10px" }}>
            <Field name="email">
              {({ field, meta }: any) => (
                <>
                  <OutlinedInput
                    {...field}
                    placeholder="Email"
                    sx={inputStyles}
                    fullWidth
                  />
                  {meta.touched && meta.error && (
                    <>
                      <br></br>
                      <div style={{ color: "red" }}>{meta.error}</div>
                    </>
                  )}
                </>
              )}
            </Field>
          </Box>
          <Box sx={{ width: "50%", padding: "10px" }}>
            <Field name="telefono">
              {({ field, meta }: any) => (
                <>
                  <OutlinedInput
                    {...field}
                    placeholder="Telefono"
                    sx={inputStyles}
                    fullWidth
                  />
                  {meta.touched && meta.error && (
                    <>
                      <br></br>
                      <div style={{ color: "red" }}>{meta.error}</div>
                    </>
                  )}
                </>
              )}
            </Field>
          </Box>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "50%", padding: "10px" }}>
            <Field name="nombreNiño">
              {({ field, meta }: any) => (
                <>
                  <OutlinedInput
                    {...field}
                    placeholder="Nombre del/a niño/a"
                    sx={inputStyles}
                    fullWidth
                  />
                  {meta.touched && meta.error && (
                    <>
                      <br></br>
                      <div style={{ color: "red" }}>{meta.error}</div>
                    </>
                  )}
                </>
              )}
            </Field>
          </Box>
          <Box sx={{ width: "50%", padding: "10px" }}>
            <Field name="edadNiño">
              {({ field, meta }: any) => (
                <>
                  <OutlinedInput
                    {...field}
                    placeholder="Edad del/a niño/a"
                    sx={inputStyles}
                    fullWidth
                  />
                  {meta.touched && meta.error && (
                    <>
                      <br></br>
                      <div style={{ color: "red" }}>{meta.error}</div>
                    </>
                  )}
                </>
              )}
            </Field>
          </Box>
        </Box>

        <Box sx={boxStyles}>
          <Field name="message">
            {({ field, meta }: any) => (
              <>
                <TextField
                  {...field}
                  placeholder="Ingresa tu Mensaje"
                  sx={inputStyles}
                  fullWidth
                  multiline
                  rows={10}
                />
                {meta.touched && meta.error && (
                  <div style={{ color: "red" }}>{meta.error}</div>
                )}
              </>
            )}
          </Field>
        </Box>

        <Box
          sx={{
            display: "block",
            flexDirection: "row",
            p: 1,
            m: 1,

            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: "20px",
              padding: { xs: "2px", md: "10px" },
              width: { xs: "120px", md: "200px" },
              marginTop: "20px",
              fontWeight: "600",
            }}
          >
            Enviar
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};
