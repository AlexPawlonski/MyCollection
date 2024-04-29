"use client";
import { color } from "@/style/styleRef";
import styled from "@emotion/styled";

export const Input = styled.input`
  box-sizing: border-box;
  padding: 0px 20px;
  width: 100%;
  height: 60px;
  background-color: ${color.darkGrey};
  opacity: 0.8;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 20px;
  &:focus {
    background-color: ${color.lithGrey};
    opacity: 1;
    outline: none;
    box-shadow: 0px 4px 22px -3px rgba(88, 75, 227, 1);
  }
  &:hover {
    background-color: ${color.lithGrey};
    opacity: 1;
    box-shadow: 0px 4px 22px -3px rgba(88, 75, 227, 1);
  }
`;
