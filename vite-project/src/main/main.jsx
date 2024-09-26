import './main.css'
import Machine from '../assets/machine.png'
import Material from '../assets/material.png'

import Left from '../assets/left.png'
import Middle from '../assets/middle.png'
import Right from '../assets/right.png'

function Main(){
    return(
        <>
            <main>
                <section className="sect_one">
                    <div className="sect_one_inside">
                        <div className="sect_one_inside_top">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>О компании</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <li><a href="">О нас</a></li>
                                        <li><a href="">Руководство</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>01</p>
                            </div>
                        </div>
                        <div className="sect_one_inside_bot">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>Акционеру и инвестору</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <li><a href="">Подробнее</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>04</p>
                            </div>
                        </div>
                    </div>
                    <div className="sect_one_inside">
                        <div className="sect_one_inside_top">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>Деятельность</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <li><a href="">Продукция</a></li>
                                        <li><a href="">Технология</a></li>
                                        <li><a href="">Сырьевой комплекс</a></li>
                                        <li><a href="">Экология</a></li>
                                        <li><a href="">Результаты спецоценки</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>02</p>
                            </div>
                        </div>
                        <div className="sect_one_inside_bot">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>Пресс центр</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <li><a href="">Новости</a></li>
                                        <li><a href="">Фотогалерея</a></li>
                                        <li><a href="">Видеогалерея</a></li>
                                        <li><a href="">Корпоративная пресса</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>05</p>
                            </div>
                        </div>
                    </div>
                    <div className="sect_one_inside">
                        <div className="sect_one_inside_top">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>Персонал</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <li><a href="">Подготовка и обучение персонала</a></li>
                                        <li><a href="">Отправить резюме</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>03</p>
                            </div>
                        </div>
                        <div className="sect_one_inside_bot">
                            <div className="sect_one_inside_top_left">
                                <div className="sect_one_inside_top_left_title">
                                    <p>Контакты</p>
                                </div>
                                <div className="sect_one_inside_top_left_links">
                                    <ul>
                                        <li><a href="">Как с нами связаться</a></li>
                                        <li><a href="">Реквизиты</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sect_one_inside_top_right">
                                <p>06</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sect_two'>
                    <div className='sect_two_left'>
                        <div className='sect_two_left_title'>
                            <p>Lectus nisi sed id dictum. Adipiscing</p>
                        </div>
                        <div className='sect_two_left_desc'>
                            <p>Commodo faucibus justo turpis id lectus ac fringilla scelerisque accumsan. Fames lectus nibh non ultrices id ut sed praesent in. Ac tristique nunc pellentesque odio. Blandit scelerisque dolor molestie egestas nunc nunc sit. Fermentum at pharetra odio risus malesuada diam laoreet eleifend vulputate. Enim molestie lorem nec ipsum nunc sit commodo non. Euismod rhoncus ut amet diam porta nisi tempus. Posuere suspendisse suscipit dolor enim. A lectus convallis quis elementum. Vitae pretium nunc venenatis felis.
                            <br/> <br /> Urna orci blandit imperdiet feugiat scelerisque dui at velit ac. Sollicitudin placerat in viverra amet in praesent vestibulum. Suscipit interdum odio pellentesque diam et.</p>
                        </div>
                        <div className='sect_two_left_buttons'>
                            <button type="button"><p>aaaddd@test.ru</p></button>
                            <button type="button"><p>dvs@test.ru</p></button>
                        </div>
                    </div>
                    <div className='sect_two_right'>

                    </div>
                </section>
                <section className='sect_three'>
                    <div className='sect_three_title'>
                        <p>Vel pretium pellentesque enim morbi</p>
                    </div>
                    <div className='sect_three_desc'>
                        <p>Et aliquam eu feugiat vel egestas semper elementum. Bibendum eget massa .</p>
                    </div>
                    <div className='sect_three_things'>
                        <div className='sect_three_things_left'>
                            <img src={Machine} alt="" />
                            <p>Enim ac sagittis tempus iaculis blandit. Tellus.</p>
                        </div>
                        <div className='sect_three_things_right'>
                            <img src={Material} alt="" />
                            <p>Ultricies erat sagittis est dictum leo est nibh a.</p>
                        </div>
                    </div>
                </section>
                <section className='sect_four'>
                    <div className='sect_four_title'>
                        <p>Новости компании</p>
                    </div>
                    <div className='sect_four_main'>
                        <div className='sect_four_main_column'>
                            <div className='sect_four_main_column_img'>
                                <img src={Left} alt="" />
                            </div>
                            <div className='sect_four_main_column_title'>
                                <p>Est commodo nulla pulvinar amet dictumst. Tincidunt tincidunt interdum faucibus ipsum quis eleifend amet sit. Ac sociis sodales viverra viverra.</p>
                            </div>
                            <div className='sect_four_main_column_desc'>
                                <p>Tincidunt et ut phasellus euismod eget diam erat ultrices. Eu tristique diam lectus platea orci sed cras. Egestas lorem tincidunt pellentesque dolor vulputate lacus platea. Varius.</p>
                            </div>
                        </div>
                        <div className='sect_four_main_column'>
                            <div className='sect_four_main_column_img'>
                                <img src={Middle} alt="" />
                            </div>
                            <div className='sect_four_main_column_title'>
                                <p>Sapien odio eu et quis ornare. Amet ultrices mauris pellentesque aliquam et. Fermentum cursus.</p>
                            </div>
                            <div className='sect_four_main_column_desc'>
                                <p>Lacus ut in vel blandit lectus et fermentum et vulputate. Amet netus gravida et facilisi sit cursus lobortis pellentesque. Vestibulum a pulvinar eu proin a tincidunt.</p>
                            </div>
                        </div>
                        <div className='sect_four_main_column'>
                            <div className='sect_four_main_column_img'>
                                <img src={Right} alt="" />
                            </div>
                            <div className='sect_four_main_column_title'>
                                <p>Lectus sagittis non id ut eget tellus aenean. Pretium scelerisque pellentesque in lacus ultrices mauris tempor. Est cursus laoreet in dictumst arcu.</p>
                            </div>
                            <div className='sect_four_main_column_desc'>
                                <p>Vestibulum id pulvinar enim molestie erat suscipit montes hendrerit. Integer ac egestas tempor nisl. Vel vitae quam nisi egestas tincidunt facilisi non faucibus. Mi sed et id.</p>
                            </div>
                        </div>
                    </div>
                    <div className='sect_four_button'>
                        <button type="button"><p>Все новости</p></button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main