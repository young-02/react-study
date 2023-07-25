import { useCallback, useState } from "react";

type UseInputReturn = {
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useInput = (): UseInputReturn => {
  const [value, setValue] = useState("");

  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, handler };
};
export default useInput;
