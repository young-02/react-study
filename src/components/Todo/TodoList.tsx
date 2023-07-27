import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteTodo, getTodos, switchTodo } from "../../api/todos";
import * as S from "./style";
import { useState } from "react";

export interface Todo extends TodoContent {
  id: number;
}

export interface TodoContent {
  title: string;
  contents: string;
  isDone: boolean;
}

export interface IdAndIsDone {
  id: number;
  isDone: boolean;
}

type TodoItem = {
  isActive: boolean;
};

const TodoList = ({ isActive }: TodoItem) => {
  const { isLoading, isError, data } = useQuery(["todos"], getTodos);

  const queryClient = useQueryClient();
  const deleteMutate = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      console.log("삭제");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const isDoneMutate = useMutation(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      console.log("성공");
    },
  });

  const onClickDeleteButton = (id: number) => {
    deleteMutate.mutate(id);
  };

  const onSwitchButton = (id: number, isDone: boolean) => {
    isDoneMutate.mutate({ id, isDone: !isDone });
  };

  if (isLoading) {
    return <h2>로딩중...</h2>;
  }

  if (isError) {
    return <h2>오류를...</h2>;
  }

  return (
    <S.TodoWrap>
      <h3>{isActive ? "진행중" : "완료"}</h3>
      <S.flexBox>
        {data
          .filter((done: Todo) => done.isDone === !isActive)
          .map((item: Todo) => (
            <S.TodoItem key={item.id}>
              <S.Title>{item.title}</S.Title>
              <S.Content>{item.contents}</S.Content>
              <S.ButtonWrapper>
                <button onClick={() => onClickDeleteButton(item.id)}>
                  삭제
                </button>
                <button onClick={() => onSwitchButton(item.id, item.isDone)}>
                  {isActive ? "완료" : "취소"}
                </button>
              </S.ButtonWrapper>
            </S.TodoItem>
          ))}
      </S.flexBox>
    </S.TodoWrap>
  );
};

export default TodoList;
