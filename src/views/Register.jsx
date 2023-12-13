const React = require('react');

const Register = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <form method="post" action="/register">
        <label>Логин:</label>
        <input type="text" name="username" required />
        <br />
        <label>Почта:</label>
        <input type="email" name="email" required />
        <br />
        <label>Пароль:</label>
        <input type="password" name="password" required />
        <br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

module.exports = Register;
