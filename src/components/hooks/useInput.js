import { useState } from 'react';

export default function useInput(ref, initialValue) {
  const [value, setValue] = useState(initialValue);

  const onClick = () => {
    ref.current.value = '';
  };

  const onChange = e => setValue(e.target.value);

  return { value, onClick, onChange };
}
