import { useAuth0 } from '@auth0/auth0-react';
import HamburgerMenu from './templates/Hamburger';
import { BlackButton } from './templates/Buttons';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth0();

  const handleSignOut = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent flex justify-between items-center p-4 z-10">
      <div className="flex items-center">
        <HamburgerMenu />
      </div>
      <div className="flex items-center">
        <BlackButton text="Sign Out" onClick={handleSignOut} />
      </div>
    </nav>
  );
};

export default Navbar;