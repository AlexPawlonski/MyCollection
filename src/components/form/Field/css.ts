import styled from "@emotion/styled";
export const Container = styled.div<{ errorState: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  padding: 0;
  border: none;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: bold;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 20px;
  font-weight: bold;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  
`;
