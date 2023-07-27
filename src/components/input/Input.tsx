import { useState } from "react";
import InputBox from "../common/InputBox";
import * as S from "./styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../../api/todos";
import { Todo, TodoContent } from "../Todo/TodoList";

export interface InputValue {
  title: string;
  contents: string;
}

const Input = () => {
  const [inputValue, setInputValue] = useState<InputValue>({
    title: "",
    contents: "",
  });

  const { title, contents } = inputValue;

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const onSubmitValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: TodoContent = {
      title,
      contents,
      isDone: false,
    };
    mutation.mutate(newTodo);
  };

  return (
    <S.StyledDiv>
      <form onSubmit={onSubmitValue}>
        <S.FlexDiv>
          <S.FlexDivCol>
            <InputBox
              label={"제목"}
              placeholder={"제목"}
              name="title"
              value={title}
              onChange={onChangeValue}
            />
            <InputBox
              label={"내용"}
              placeholder={"내용"}
              name="contents"
              value={contents}
              onChange={onChangeValue}
            />
          </S.FlexDivCol>
          <S.StyledButton>제출</S.StyledButton>
        </S.FlexDiv>
      </form>
    </S.StyledDiv>
  );
};

export default Input;
