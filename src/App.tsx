import useInput from "./hooks/useInput";

function App() {
  const nameInput = useInput();
  const passwordInput = useInput();

  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  // const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
  // };
  // const onChangePasswordHandler = () => {};

  return (
    <>
      <input type="text" {...nameInput} />
      <input type="text" {...passwordInput} />
    </>
  );
}

export default App;
