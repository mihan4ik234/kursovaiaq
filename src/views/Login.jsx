const React = require('react');

const Login = () => {
    return (
        <>
            <div>
                <h1>Авторизация</h1>
                <form method="post" action="/login">
                    <label>Логин:</label>
                    <input type="text" name="username" required />
                    <br />
                    <label>Пароль:</label>
                    <input type="password" name="password" required />
                    <br />
                    <button type="submit">Войти</button>
                </form>
            </div>
        </>
    );
};

module.exports = Login;
