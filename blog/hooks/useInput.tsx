import { useCallback, useState } from 'react';

const useInput = (initialInput: string) => {
  const [textinput, setTextInput] = useState(initialInput);

  //input창에 입력된 todo를 todoText로 설정
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      {
        const {
          target: { value },
        } = e;
        setTextInput(value);
        console.log(value);
      }
    },
    []
  );

  // input창 값 비우기
  const handleInputInitialize = () => {
    setTextInput('');
  };

  return { textinput, handleInputChange, handleInputInitialize };
};
export default useInput;
