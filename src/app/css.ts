"use client";
import styled from "@emotion/styled";

/**Body style*/
export const Body = styled.body`
  background-color: black;
  color: #fff;
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

/**Margin */

export const Wrapper = styled.div`
  padding: 30px;
`;

/**Home style*/

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
