"use client";
import { color } from "@/style/styleRef";
import styled from "@emotion/styled";

export const Button = styled("div")<{
  width: Number;
  height: Number;
}>`
  background-color: ${color.lithGrey};
  color: #fff;
  border-radius: 10px;
  gap: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${color.red};
  }
  ${(props) =>
    props.width && `width: ${props.width}px; height: ${props.height}px`};
`;

export const ButtonTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;
