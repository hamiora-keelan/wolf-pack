import backgroundVideo from '../../public/images/wolf-video.mp4';
import { BlackButton, NoColorButton } from './templates/Buttons';
import { useAuth0 } from '@auth0/auth0-react';

const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignIn = () => {
    loginWithRedirect({
      // screen_hint: 'login',
    });
  };

  const handleSignUp = () => {
    loginWithRedirect({
      // screen_hint: 'signup',
    });
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