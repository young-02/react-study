import TodoList from "../components/Todo/TodoList";
import Input from "../components/input";

const Main = () => {
  return (
    <>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </>
  );
};

export default Main;
