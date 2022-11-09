import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
// import ChangeContact from 'components/ChangeContact/ChangeContact';

const Layout = lazy(() => import('components/Layout/Layout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Contacts = lazy(() => import('pages/ContactsPage/Contacts'));
const LogInForm = lazy(() => import('pages/LoginPage/LogInForm'));
const RegisterForm = lazy(() => import('pages/RegisterPage/RegisterForm'));
const ChangeContact = lazy(() =>
  import('components/ChangeContact/ChangeContact')
);

export default function UserRoutes() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterForm />} />
              <Route path="login" element={<LogInForm />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<Contacts />}>
                <Route path="contacts/:contactId" element={<ChangeContact />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
