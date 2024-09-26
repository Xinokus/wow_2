import './header.css'

import Nav from '../nav/nav'

function Header() {
  return (
    <>
      <header>
        <Nav/>
        <div className='header_inside'>
            <div className='header_left'>
                <div className='header_left_text'>
                    <p>Quis et quam quam sem scelerisque odio. Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Nunc leo.</p>
                </div>
                <div className='header_left_more'>
                    <button type="button"><p>Подробнее</p></button>
                </div>
                <div className='header_left_buttons'>
                    <button type="button"></button>
                    <button type="button"></button>
                    <button type="button"></button>
                </div>
            </div>
            <div className='header_right'>
                <div className='header_right_percent'>
                    <div className='header_right_percent_inside'>
                        <p>99,995%</p>
                    </div>
                </div>
                <div className='header_right_percent_under'><p>Nisi nulla ultrices amet cras tincidunt nec. Dolor magna.</p></div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header