//axios 요청이 들어가는 모든 모듈

import axios from "axios";

import { InputValue } from "../components/input/Input";
import { IdAndIsDone } from "../components/Todo/TodoList";

//조회
const getTodos = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/todos`
  );
  return response.data;
};

//추가
const addTodo = async (newTodo: InputValue) => {
  await axios.post(`${import.meta.env.VITE_API_BASE_URL}/todos`, newTodo);
};

//삭제
const deleteTodo = async (id: number) => {
  await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/todos/${id}`);
};

//switch
const switchTodo = async ({ id, isDone }: IdAndIsDone) => {
  return axios.patch(`${import.meta.env.VITE_API_BASE_URL}/todos/${id}`, {
    isDone: isDone,
  });
};

export { getTodos, addTodo, deleteTodo, switchTodo };
