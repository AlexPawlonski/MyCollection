import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { Field } from "../Field";
import { Input } from "./css";
import { IForm } from "@/interface/Iform";

interface Props {
  label: string;
  error?: FieldError;
  register: UseFormRegister<IForm>;
  required?: boolean;
  errorMessage?: string;
}

export default function InputText({
  label,

  error,
  register,
  required = false,
  errorMessage = "Required !",
}: Props) {
  const inputRegister = register("name", {
    required: required && errorMessage,
  });

  return (
    <Field label={label} htmlFor={"title"} error={error}>
      <Input type="text" id={"title"} {...inputRegister} />
    </Field>
  );
}
