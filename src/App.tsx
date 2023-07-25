import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

interface Todo extends TodoTitle {
  id: number;
}
interface TodoTitle {
  title: string;
}

interface Edit {
  targetId?: number | null;
  content: string;
}

function App() {
  const [todosLists, setTodosLists] = useState<Todo[] | null>(null);
  const [todos, setTodos] = useState<TodoTitle>({
    title: "",
  });
  const [edit, setEdit] = useState<Edit>({
    targetId: null,
    content: "",
  });

  const fetchTodo = async () => {
    const { data } = await axios.get(`http://localhost:4001/todos`);
    setTodosLists(data);
  };

  const onCreateTodos = async () => {
    const { data } = await axios.post(`http://localhost:4001/todos`, todos);

    setTodosLists((prev: Todo[] | null) =>
      prev !== null ? [...prev, data] : [data]
    );

    // 또는
    // fetchTodo();
  };

  const onClickDeleteButton = async (id: number) => {
    axios.delete(`http://localhost:4001/todos/${id}`);
    if (todosLists !== null) {
      setTodosLists(todosLists?.filter((it) => it.id !== id));
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="할 일 추가"
          value={todos.title}
          onChange={(e) => {
            setTodos({ title: e.target.value });
          }}
        />
        <button onClick={onCreateTodos}>추가</button>
      </div>
      <div>
        {todosLists?.map((it) => (
          <div key={it.id}>
            {it.id} : {it.title}
            <button
              style={{
                border: "1px solid red",
                padding: ".2rem .4rem",
                margin: ".5rem",
              }}
              onClick={() => onClickDeleteButton(it.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minWidth: "320px",
        }}
      >
        <input
          type="number"
          style={{ width: "10%" }}
          placeholder="숫자"
          value={edit.targetId ?? ""}
          onChange={(e) => {
            setEdit({ ...edit, targetId: parseInt(e.target.value) });
          }}
        />
        <input type="text" placeholder="변경할 텍스트" />
        <button>수정</button>
      </div>
    </div>
  );
}

export default App;
