import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './Navbar'; 

const Layout = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;