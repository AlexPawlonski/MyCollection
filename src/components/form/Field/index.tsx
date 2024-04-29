import React from "react";
import { FieldError } from "react-hook-form";
import { Container, ErrorMessage, Header, Label } from "./css";

interface FieldProps {
  label?: string;
  children: React.ReactElement;
  htmlFor?: string;
  error?: FieldError;
}
export const Field = ({ label, children, htmlFor, error }: FieldProps) => {
  const id = htmlFor || getChildId(children);
  return (
    <Container errorState={!!error}>
      <Header>
        {label && <Label htmlFor={id}>{label}</Label>}
        {!!error && <ErrorMessage role="alert">{error.message}</ErrorMessage>}
      </Header>

      {children}
    </Container>
  );
};

const getChildId = (children: FieldProps["children"]) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};
