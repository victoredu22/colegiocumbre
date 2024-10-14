import React, { useEffect } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { listItem } from "../utils/constants";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "#1c1b1b",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
  height: "100%",
  textAlign: "center",
};

interface Props {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export const ModalMenu = (props: Props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            p: 1,

            borderRadius: 1,
          }}
        >
          <Box sx={{ flexGrow: 1, textAlign: "left" }}>
            <Box component="img" />
          </Box>
          <Box sx={{ color: "white" }}>
            <Button onClick={props.handleClose} sx={{ color: "white" }}>
              <CloseIcon />
            </Button>
            <Typography>Cerrar</Typography>
          </Box>
        </Box>

        {listItem.map((item) => (
          <Typography
            key={item.id} // Asegúrate de proporcionar una clave única si listItem es una lista de elementos
            id="modal-modal-title"
            variant="h4"
            sx={{
              color: "white",
              margin: "20px 10px 30px 10px",
              "&:hover": {
                background: "#5fcf80",
              },
            }}
          >
            {item.title.toUpperCase()}
          </Typography>
        ))}
      </Box>
    </Modal>
  );
};
