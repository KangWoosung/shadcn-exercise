/*  2024-07-11 07:53:41


*/

import { useFormContext } from "react-hook-form";

export const useFormFieldError = (fieldName: string) => {
  const { getFieldState, formState } = useFormContext();

  const { error } = getFieldState(fieldName, formState);

  return {
    name: fieldName,
    error,
  };
};
