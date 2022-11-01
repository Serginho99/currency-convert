import Contacts from 'pages/ContactsPage/Contacts';
import Layout from 'components/Layout/Layout';
import LogInForm from 'pages/LoginPage/LogInForm';
import RegisterForm from 'pages/RegisterPage/RegisterForm';
import HomePage from 'pages/HomePage/HomePage';
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
