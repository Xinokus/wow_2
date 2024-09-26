import './nav.css'
import Logo from '../assets/logo.png'
import Search from '../assets/search.png'

function Nav() {
  return (
    <>
      <nav>
        <div className='nav_top'>
          <div className='nav_logo'>
            <img src={Logo} alt="" />
          </div>
          <div className='nav_search'>
            <label htmlFor="search"><p>Быстрый поиск по сайту</p></label>
            <input type="text" name="" id="search" />
            <button type="button"><img src={Search} alt="" /></button>
          </div>
          <div className='nav_language'>
            <button type="button"><p>Ru</p></button>
            <button type="button"><p>En</p></button>
          </div>
        </div>
        <div className='nav_bot'>
          <a href="" className="nav_link">О компании</a>
          <a href="" className="nav_link">Деятельность</a>
          <a href="" className="nav_link">Персонал</a>
          <a href="" className="nav_link">Клиенту</a>
          <a href="" className="nav_link">Акционеру и инвестору</a>
          <a href="" className="nav_link">Пресс-центр</a>
          <a href="" className="nav_link">Торги</a>
          <a href="" className="nav_link">Контакты</a>
        </div>
      </nav>
    </>
  )
}

export default Nav
