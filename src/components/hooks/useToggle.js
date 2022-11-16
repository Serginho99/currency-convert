import { useState } from 'react';

export default function useToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const [isConfirm, setIsConfirm] = useState(false);

  function toggle() {
    setIsOpen(state => !state);
  }

  function toggleConfirm() {
    setIsConfirm(state => !state);
  }

  return { isOpen, setIsOpen, toggle, isConfirm, setIsConfirm, toggleConfirm };
}
