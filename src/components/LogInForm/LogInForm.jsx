import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from 'redux/auth/authOperations';

export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const options = { email: setEmail, password: setPassword };

  function onChange({ target: { name, value } }) {
    options[name](value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Email{' '}
          <input type="email" name="email" value={email} onChange={onChange} />
        </label>
        <label>
          Password{' '}
          <input
            type="password"
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
