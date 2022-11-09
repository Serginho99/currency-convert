import { useState } from 'react';

export default function useToggle() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(state => !state);
  }

  return { isOpen, setIsOpen, toggle };
}
