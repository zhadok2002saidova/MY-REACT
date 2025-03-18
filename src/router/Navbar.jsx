//1 tapsyrma
import { useState, useEffect } from "react";

function Navbar() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "white";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme == "white" ? "black" : "white"));
    };

    return (
        <nav style={{ backgroundColor: theme, padding: "10px" }}>
            <button onClick={toggleTheme}>Түсін өзгерту</button>
        </nav>
    );
}

export default Navbar;


//2 tapsyrma
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("*");
    }, 5000);
  }, []);

  return <h1>Contact Us</h1>;
}


export default Contact;
/
// 3 tapsyrma
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>🏠 Home</h1>
      <a href="/about" className="text-blue-500">
        Go to About
      </a>
    </div>
  );
}

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ℹ️ About Us</h1>
      <button onClick={() => navigate(-1)}>🔙 Go Back</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//4 tapsyrma
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Home onLogout={() => setUser(null)} />
            ) : (
              <Login onLogin={() => setUser("User")} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate("/");
  };

  return <button onClick={handleLogin}>🔑 Кіру</button>;
}

function Home({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div>
      <h1>🏠 Home Page</h1>
      <button onClick={handleLogout}>🚪 Шығу</button>
    </div>
  );
}

export default App;

