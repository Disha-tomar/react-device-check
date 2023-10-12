import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  const checkDevice = () => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    checkDevice();
  }, []);

  return (
    <div>
      {isDesktop ? (
        <p>You're on laptop or desktop 💻</p>
      ) : (
        <p>You're on mobile or tablet</p>
      )}
    </div>
  );
}

export default App;
