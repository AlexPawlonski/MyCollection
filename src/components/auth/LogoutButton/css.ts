"use client";
import { color } from "@/style/styleRef";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const Title = styled.h3`
  font-size: 32px;
`;

export const IconCss = css`
  height: 30px;
  color: ${color.red};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  &:hover ${Title} {
    text-shadow: ${color.purple} 10px 0px 22px;
  }
`;
