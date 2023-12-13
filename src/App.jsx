import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import photo from './assets/photo.png'
import { useNavigate } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();

  const NavLogo = () => {
    navigate("/")
  }
  const NavFrilanser = () => {
    navigate("/frilanser");
  }

  const NavWork = () => {
    navigate("/works")
  }
  const NavReg = () =>{
    navigate("./views/Register")
  }

  return (
    <>
      <div className='NAVBAR'>
        <div onClick={NavLogo} className='logo'><img src={logo} alt="/" /></div>
        <div onClick={NavFrilanser} className='textnav'>Фрилансеры</div>
        <div onClick={NavWork} className='textnav'>Работа</div>
        <div className='textnav'>Разместить<br />заявку</div>
        <div className='textnava'>
          <div onClick={NavReg} className='auth'>Регистрация</div>
          <div className='auth'>Вход</div>
        </div>
      </div>
      <div className='zaiavka'>
        <img className='photo' src={photo} alt="/" />
        <div className='zapros'>
          <div className='textzapros'>
            Фрилансеры со всей страны готовы взяться за ваше задание
          </div>
          <div className='textzapros2'>
            Создайте задание <br />и уже сегодня получайте предложения от фрилансеров <br />с ценой и сроками исполнения
          </div>

          <div class="form-container">
            <div class="form-content">
              <div className='username'><label for="username"></label></div>
              <textarea type="text" id="username" name="username" placeholder='Введите запрос' />
              <br />
              <div className='zaebalo'>
                <button id='button' type="submit">Отправить</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='nado'>
        <div className='potomu'>
          <div className='pochemu'><p>Почему именно мы?</p></div>
        </div>
        <div className='plus'>
          <div className='pervi'>
            <p className='tolsti'>Не нужно переплачивать фирме</p>
            <p className='tonki'>Услуги фрилансеров стоят в разы дешевле, <br /> чем в студиях.</p>
          </div>
          <div className='vtori'>
            <p className='tolsti'>Без посредников и прочих "безопасных" сделок</p>
            <p className='tonki'>Платите на прямую исполнителю, <br /> нет коммисий и дополнительных переплат.</p>
          </div>
          <div className='treti'>
            <p className='tolsti'>Удобная схема работы</p>
            <p className='tonki'>Выбирайте фрилансера по портфолио,<br />рекомендациями и отзывам.</p>
          </div>
        </div>
      </div>
      <div className='text'>
        <p className='tolsti'>Фриланс биржа FreeJOB предлагает удаленную работу для начинающих<br /> фрилансеров (с опытом и без) и профессионалов</p>
        <p className='tolsti'>Приглашаем зарегистироваться на популярной фриланс-бирже в России. <br /> Сайт по удаленной работе существует с 2015 года и за это время множество<br />новичков и опытных фрилансеров получили тысячи заказов. </p>
        <p className='tolsti'>Мы гордимся тем, что уже много лет бесплатно предлагаем заказчикам найти<br />
          фрилансеров, а фрилансерам найти новых постоянных клиентов по удаленной работе. <br />Очень много удаленный вакансий для новичков без опыта работы. На<br />
          вопрос, а какой резон? Ответим: биржа зарабатывает на контекстной рекламе,<br />и нас это вполне устраивает.</p>
      </div>

      <div className='punktir'>
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
      <p className='tolsti'>Коротко о наших отличиях среди популярных фриланс-бирж в интернете</p>
      <div className='blok'>
        <p className='blokone'><p className='kursiv'>Для фрилансеров:</p>1. Никаких вложений. Не нужно<br /> вкладывать деньги для того<br /> чтобы найти работу.<br />
          2.Нет «дикой» конкуренции за проект,<br /> когда демпинг отвлекает<br /> работодателя от выбора<br /> толкового фрилансера.<br />
          3.Ежедневно появляются свежие<br /> актуальные заказы от прямых<br /> работодателей.<br />
          4.Красивая подача графических<br /> работ в портфолио.</p>
        <p className='blokone'><p className='kursiv'>Для работодателей:</p>1.Поиск резюме бесплатно.<br />
          2.За многие года существования, у <br />нас сложился большой каталог <br />фрилансеров, которым не могут <br />похвастаться небольшие биржи <br />удаленной работы на дому.<br />
          3.Удобный поиск фрилансеров по <br />специальности или по портфолио.<br />
          4.Мало неопытных специалистов и <br />халтурщиков из-за «ручной»<br />модерации.<br />
          5.Добавление тендера или конкурса –<br />бесплатно.</p>
      </div>


    </>
  )
}

export default App;
