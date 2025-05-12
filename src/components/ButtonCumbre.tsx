import { Button } from "@mui/material";
import { ReactNode } from "react";
type ButtonCumbreProps = {
  title: string;
  type?: "button" | "submit" | "reset"; // Opcional, con tipado específico
  href?: string;
  children?: ReactNode;
};

export const ButtonCumbre = ({
  title,
  type = "button",
  href,
  children,
}: ButtonCumbreProps) => {
  return (
    <Button
      component="a"
      href={href}
      type={type}
      variant="contained"
      sx={{
        borderRadius: "20px",
        padding: { xs: "2px", md: "10px" },
        width: "100%",
        marginTop: "20px",
        fontWeight: "600",
      }}
    >
      {title}
      {children}
    </Button>
  );
};
