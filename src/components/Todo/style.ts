import { styled } from "styled-components";

export const TodoWrap = styled.div`
  padding: 20px;
`;

export const flexBox = styled.div`
  display: flex;
  justify-items: center;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
`;

export const TodoItem = styled.div`
  flex: 0 1 calc((100% / 3) - (16px * 2));
  background: pink;
  border-radius: 8px;
  padding: 10px;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Content = styled.div`
  font-size: 14px;
  margin-top: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;

  > button {
    flex: 1;
  }
`;
