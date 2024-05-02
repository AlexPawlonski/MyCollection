"use client";
import { background, color } from "@/style/styleRef";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const Container = styled.section`
  width: 780px;
  height: 480px;
  background-color: ${background.backgroundColor};
  backdrop-filter: ${background.backdropFilter};
  border-radius: 20px;
  padding: 30px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;

export const AddIcon = css`
  height: 40px;
  font-weight: 25px;
  color: ${color.green};
  cursor: pointer;
  transition: all;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
`;

export const CancelIcon = css`
  height: 40px;
  font-weight: 25px;
  color: ${color.red};
  cursor: pointer;
  transform: rotate(45deg);
  transition: all;
  &:hover {
    transform: rotate(45deg) scale(1.2);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 50px
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
