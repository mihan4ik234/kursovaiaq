const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Используем JSX как шаблонизатор
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Парсер тела запроса
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Конфигурация подключения к базе данных PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'kurs',
  password: '1231223',
  port: 5432,
});

// Рендеринг страницы регистрации
app.get('/register', (req, res) => {
  res.render('Register');
});

// Обработка данных из формы регистрации
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Хеширование пароля перед сохранением в базе данных
  const hashedPassword = await bcrypt.hash(password, 10);

  // Сохраняем пользователя в базе данных
  try {
    await pool.query('INSERT INTO users(username, email, password) VALUES($1, $2, $3)', [username, email, hashedPassword]);
    res.redirect('/login');
  } catch (error) {
    console.error('Ошибка при добавлении пользователя в базу данных:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
});

// Рендеринг страницы авторизации
app.get('/login', (req, res) => {
  res.render('Login');
});

// Обработка данных из формы авторизации
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Поиск пользователя в базе данных
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];

    // Если пользователь не найден или пароль не совпадает, перенаправляем на страницу авторизации
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.redirect('/login');
    }

    res.send('Добро пожаловать, ' + user.username + '!');
  } catch (error) {
    console.error('Ошибка при выполнении запроса к базе данных:', error);
    res.status(500).send('Внутренняя ошибка сервера');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
