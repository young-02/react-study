import { styled } from "styled-components";

type InputBox = {
  label: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputBox({ label, placeholder, name, value, onChange }: InputBox) {
  return (
    <StyledInputBox>
      <label>{label}</label>
      <StyledInput
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`${placeholder}을 작성해주세요`}
      />
    </StyledInputBox>
  );
}

export default InputBox;

const StyledInputBox = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledInput = styled.input`
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #ddd;
`;
