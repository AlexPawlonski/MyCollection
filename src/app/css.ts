"use client";

// import { css } from "@emotion/react";
import styled from "@emotion/styled";

// export const basicStyles = css``;

/**Body style*/
export const Body = styled.body`
  background-color: black;
  color: #FFF;
  margin: 0px;
  padding: 0px;
`;

export const GlowContainer = styled.div`
  position: fixed;
  top: 0px;
  overflow: hidden;
  inset: 0px;
  z-index: -10;
`;

export const Glow = styled.div`
  position: absolute;
  inset: -10px;
`;

/**Home style*/
