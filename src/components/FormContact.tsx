import { Box } from "@mui/material";
import { useForm } from "../hook/useForm";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FloatingInput from "./FloatingInput";
import { ButtonCumbre } from "./ButtonCumbre";

export const FormContact: React.FC = () => {
  const [formValues] = useForm({
    nombre: "",
    email: "",
    telefono: "",
    message: "",
  });

  // Definir el esquema de validación Yup
  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .required("El nombre es obligatorio"),

    email: Yup.string()
      .min(2, "El email debe tener al menos 2 caracteres")
      .required("El email es obligatorio"),
    telefono: Yup.string()
      .min(2, "El telefono debe tener al menos 2 caracteres")
      .required("El telefono es obligatorio"),
    message: Yup.string().required("El mensaje es obligatorio"),
  });

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Datos enviados:", values);
      }}
    >
      {() => (
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: 2,
            }}
          >
            <FloatingInput name="nombre" label="Nombre completo" />
            <FloatingInput name="email" label="Correo electrónico" />
            <FloatingInput name="telefono" label="Teléfono" />
            <FloatingInput name="message" label="Mensaje" multiline rows={5} />

            <ButtonCumbre title="Enviar" href="/contacto" />
          </Box>
        </Form>
      )}
    </Formik>
  );
};
