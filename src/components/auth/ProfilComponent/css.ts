"use client";
import { background } from "@/style/styleRef";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 420px;
  height: 130px;
  background-color: ${background.backgroundColor};
  backdrop-filter: ${background.backdropFilter};
  border-radius: 25px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserName = styled.h2`
  font-size: 32px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const UserPictureWrapper = styled.div`
  border-radius: 100%;
  overflow: hidden;
  width: 110px;
`;
