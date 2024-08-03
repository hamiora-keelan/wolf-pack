import { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import LoadingAnimation from './util/Loading';

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 8000); 

    return () => clearTimeout(timer); 
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