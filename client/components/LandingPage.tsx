import backgroundImage from './path-to-your-image.jpg'; // Replace with the path to your image

const LandingPage = () => {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Site</h1>
        <h2 className="text-xl md:text-3xl font-light">Your success is our priority</h2>
      </div>
    </div>
  );
};

export default LandingPage;