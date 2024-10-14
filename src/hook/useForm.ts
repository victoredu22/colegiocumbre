import { useState } from "react";

interface FormValues {
  [key: string]: any;
}

type ResetForm = (newFormState?: FormValues) => void;

type HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

type UseFormReturnType = [FormValues, HandleInputChange, ResetForm];

export const useForm = (initialState: FormValues = {}): UseFormReturnType => {
  const [values, setValues] = useState<FormValues>(initialState);

  const reset: ResetForm = (newFormState = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange: HandleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, handleInputChange, reset];
};
