"use client";

import { color } from "@/style/styleRef";
import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const CollectionPictureWrapper = styled("div")<{
  isActive: boolean;
}>`
  border-radius: 100%;
  overflow: hidden;
  width: 110px;
  z-index: 0;
  ${(props) => props.isActive && `box-shadow: ${color.purple} 0px 8px 10px;`};
`;

export const IsSelected = styled("div")<{
  isActive: boolean;
}>`
  ${(props) =>
    props.isActive
      ? `
    display: block;
    width: 50%;
    height: 5px;
    background-color: #fff;
    box-shadow: ${color.purple} 0px 2px 10px;
    border-radius: 5px;
    z-index: 10;
  `
      : `display: none;`};
`;

export const ButtonWrapper = styled("div")<{
  isActive: boolean;
}>`
  ${(props) =>
    props.isActive
      ? `
    display: block;
    position: absolute; 
    top: 0px;
    right: 0px;
    z-index: 10;
  `
      : `display: none;`};
`;
