import { useState } from "react";

export default function WelcomePage({ socket, setAuth }) {
  const [inputValue, setInputValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("setUsername", inputValue);
  };

  socket.on("userData", () => setAuth(true));

  return (
    <form className="welcome">
      <h1 className="welcome__title">Добро пожаловать</h1>
      <input
        className="welcome__input"
        type="text"
        placeholder="Имя"
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button className="btn welcome__button" onClick={handleSubmit}>
        Войти
      </button>
    </form>
  );
}
