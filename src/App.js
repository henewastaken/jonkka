import './App.css';
import { useEffect, useState, useRef } from "react";
import jogga from './jogga.mp4'

function App() {
  
  const [mystream, setmystream] = useState(null);
  const [videoswitch, setvideo] = useState(false);
  const [isHidden, setHidden] = useState(true);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const videoRef = useRef();
  const handleClick = () => {
    setvideo(true)
    setHidden(false)
    videoRef.current.play()
  }
  return (
    <div className="App">
      <header className="App-header"> 
      <div>
    <h3 className={isHidden ? 'App-logo': 'headertext'}>
      JONKKAJONKKAJONKKA</h3>
    { !videoswitch &&
      <button className="jogga-button"
      onClick={handleClick}
      >
        Click here to JONKKAJONKKAJONKKA
      </button>
    
      }
    <video 
      ref={videoRef} 
      hidden={isHidden}
      width={windowSize.current[0]}
      height={windowSize.current[1]*0.9}
    >
       <source src={jogga} type="video/mp4" />
    </video>
    </div>
      </header>
      </div>
  );
}

export default App;

