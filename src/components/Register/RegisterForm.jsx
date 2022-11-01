import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const options = { name: setName, email: setEmail, password: setPassword };

  function onChange({ target: { name, value } }) {
    options[name](value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Name{' '}
          <input type="text" name="name" value={name} onChange={onChange} />
        </label>
        <label>
          Email{' '}
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <label>
          Password{' '}
          <input
            type="text"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
