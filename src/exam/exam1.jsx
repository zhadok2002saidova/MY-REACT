import { useState, useEffect } from "react";
import "./exam.css";

function Register({ onRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    onRegister(user);
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Зарегестрироваться</button>
    </div>
  );
}

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email == email && user.password == password) {
      onLogin(user);
    } else {
      alert("Email или пароль неверный");
    }
  };

  const handleGuestLogin = () => {
    onLogin({ name: "Guest" });
  };

  return (
    <div>
      <h2>Войти</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
      <button onClick={handleGuestLogin}>Войти как гость</button>
    </div>
  );
}

function Home({ user, onLogout, onDeleteAccount }) {
  return (
    <div>
      <h2>Привет, {user.name}!</h2>
      <button onClick={onLogout}>Выйти</button>
      <button onClick={onDeleteAccount}>Удалить Аккаунт</button>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleRegister = (user) => {
    setUser(user);
  };

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <Home
          user={user}
          onLogout={handleLogout}
          onDeleteAccount={handleDeleteAccount}
        />
      ) : (
        <>
          <Register onRegister={handleRegister} />
          <Login onLogin={handleLogin} />
        </>
      )}
    </div>
  );
}