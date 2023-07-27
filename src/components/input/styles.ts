import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  background-color: #ebeffc;
`;
const StyledInput = styled.input`
  height: 30px;
  border: 0;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background-color: #d7b4e0;
  border: 0;
  border-radius: 10px;
  width: 100px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const FlexDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FlexDivCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export { StyledDiv, StyledInput, StyledButton, FlexDiv, FlexDivCol };
