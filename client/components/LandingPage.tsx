import backgroundVideo from '../../public/images/wolf-video.mp4';
import { BlackButton, NoColorButton } from './templates/Buttons';

const LandingPage = () => {
  const handleSignIn = () => {
    console.log('Sign In button clicked');
  };

  const handleSignUp = () => {
    console.log('Sign Up button clicked');
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/4 bg-white flex flex-col justify-center items-start p-8 animate-slideInFromLeft">
        <div className="text-left text-black mb-8">
          <h1 className="text-4xl md:text-7xl font-bold tracking-wide">The Den</h1>
          <h2 className="text-xl md:text-3xl font-medium">A place the wolf pack calls home</h2>
        </div>
        <div className="space-y-4 w-full">
          <BlackButton text="Sign In" onClick={handleSignIn} />
          <NoColorButton text="Sign Up" onClick={handleSignUp} />
        </div>
      </div>
      <div className="w-3/4 h-screen relative animate-slideInFromRight">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default LandingPage;