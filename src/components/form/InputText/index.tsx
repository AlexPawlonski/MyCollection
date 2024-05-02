import { FieldError, UseFormRegister } from "react-hook-form";
import { Field } from "../Field";
import { Input } from "./css";
import { IForm } from "@/interface/Iform";
import { useEffect, useState } from "react";

interface Props {
  label: string;
  error?: FieldError;
  register: UseFormRegister<IForm>;
  required?: boolean;
  errorMessage?: string;
  value?: string;
}

export default function InputText({
  label,
  error,
  register,
  required = false,
  errorMessage = "Required !",
  value = "",
}: Props) {
  const inputRegister = register("name", {
    required: required && errorMessage,
  });

  const [defaultValue, setDefaultValue] = useState<string>(value);

  useEffect(() => {
    setDefaultValue(value);
  }, [value]);

  return (
    <Field label={label} htmlFor={"title"} error={error}>
      <Input
        type="text"
        id={"title"}
        {...inputRegister}
        value={defaultValue}
        onChange={(e) => setDefaultValue(e.currentTarget.value)}
      />
    </Field>
  );
}
