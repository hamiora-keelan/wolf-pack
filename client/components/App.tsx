import { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import LoadingAnimation from './util/Loading';

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set a timer to mark the animation as complete after 10 seconds
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 10000); // Change this duration to match your animation duration

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (!animationComplete) {
    return <LoadingAnimation />;
  }

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;