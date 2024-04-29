"use client";
import { color } from "@/style/styleRef";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const Button = styled("div")<{
  width: Number;
}>`
  background-color: ${color.purple};
  color: #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 22px -3px rgba(88, 75, 227, 1);
    transform: scale(1.1);
  }
  ${(props) =>
    props.width && `width: ${props.width}px; height: ${props.width}px`};
`;
