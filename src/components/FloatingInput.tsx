import React, { FC } from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
}

const FloatingInput: FC<InputProps> = ({
  label,
  name,
  type = "text",
  multiline = false,
  rows = 1,
}) => {
  const inputStyles = {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #ddd8d8",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #00c4ff",
    },
  };

  return (
    <div className="input-container">
      <Field name={name}>
        {({ field, meta }: any) => (
          <>
            <TextField
              {...field}
              label={label}
              type={multiline ? undefined : type}
              multiline={multiline}
              rows={rows}
              fullWidth
              sx={inputStyles}
              variant="outlined"
              error={meta.touched && Boolean(meta.error)}
              helperText={meta.touched && meta.error}
            />
          </>
        )}
      </Field>
    </div>
  );
};

export default FloatingInput;
