import { background } from "@/style/styleRef";
import styled from "@emotion/styled";

export const BackgroundCss = styled("span")<{
  isActive: boolean;
  type: "collection" | "item" | "collection-update" | "item-update" | null;
}>`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  background-color: ${background.backgroundColor};
  backdrop-filter: ${background.backdropFilter};
  ${(props) => (props.isActive ? `display: block;` : `display: none;`)};
  ${(props) =>
    props.type === "collection" &&
    `display: flex; 
    justify-content: center;
    align-items: center;`}
`;
