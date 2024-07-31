import HamburgerMenu from './templates/Hamburger';
import backgroundImage from '../../public/images/main-background.jpg';

const LandingPage = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute top-0 left-0 p-4">
        <HamburgerMenu />
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-brand-500">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">The Den</h1>
          <h2 className="text-xl md:text-3xl font-medium">A place the wolf pack calls home</h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;