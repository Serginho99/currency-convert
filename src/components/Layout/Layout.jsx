import NavBar from 'components/NavBar/NavBar';
import Section from 'components/section/Section';
// import { Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <Section>
          <NavBar />
        </Section>
      </Header>
      {/* <main> */}
      {/* <Section> */}
      {/* <Outlet /> */}
      {/* </Section> */}
      {/* </main> */}
    </>
  );
}
