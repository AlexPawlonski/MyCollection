import styled from "@emotion/styled";

export const Button = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  cursor: pointer;
  &:hover {
    background-color: rgba(62, 62, 62, 0.9);
    box-shadow: 0px 4px 22px -3px rgba(88, 75, 227, 1);
  }
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: Bold;
`;

export const IconMargin = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 20px;
  width: 25px;
`;
