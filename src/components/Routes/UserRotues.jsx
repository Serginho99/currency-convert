import Contacts from 'components/Contacts/Contacts';
import Layout from 'components/Layout/Layout';
import LogInForm from 'components/LogInForm/LogInForm';
import RegisterForm from 'components/Register/RegisterForm';
import HomePage from 'HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

export default function UserRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LogInForm />} />
        </Route>
      </Routes>
    </>
  );
}
