import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Container } from './Layout.styled';

function Layout() {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
}

export default Layout;
