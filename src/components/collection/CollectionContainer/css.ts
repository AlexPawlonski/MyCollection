"use client";
import { background, color } from "@/style/styleRef";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
export const Title = styled.h2`
  font-size: 32px;
`;

export const Main = styled.div`
  width: 100%;
  height: 170px;
  background-color: ${background.backgroundColor};
  backdrop-filter: ${background.backdropFilter};
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 45px;
`;
