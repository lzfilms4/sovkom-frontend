import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import { images } from '../../constants'
import sidebarNav from '../../configs/sidebarNav'
import MyModal from "./MyModal";
import myModal from "./MyModal";


const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                {/* <img src={images.logo} alt="" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 180 21"><g fill="none" fill-rule="nonzero"><path fill="#003791" d="M12.713.221v5.416h-2.131c-2.692 0-4.861 2.137-4.861 4.79 0 2.652 2.169 4.789 4.86 4.789h2.132v5.416c4.86-.921 8.488-5.121 8.488-10.206 0-5.047-3.627-9.247-8.488-10.205"></path><path fill="#fc5055" d="M10.582 16.91C6.955 16.91 4 14 4 10.427c0-3.573 2.954-6.484 6.58-6.484h.412V0h-.411C4.749 0 0 4.679 0 10.426 0 16.211 4.749 20.89 10.582 20.89h.411v-3.978h-.411z"></path><g><path fill="#003791" d="M36.157 14.074a4.799 4.799 0 0 1-3.028 1.068c-2.655 0-4.786-2.1-4.786-4.716 0-2.615 2.13-4.715 4.786-4.715a4.72 4.72 0 0 1 3.14 1.178l1.683-1.657a7.177 7.177 0 0 0-4.823-1.843c-3.964 0-7.142 3.169-7.142 7.037 0 3.869 3.178 7.074 7.142 7.074 1.832 0 3.477-.663 4.711-1.768l-1.683-1.658zM112.249 3.942l-5.272 6.263-5.31-6.263-.037.074v-.074h-2.132v12.969h2.132V7.405l5.347 6.263 5.272-6.115v9.358h2.094V3.942zM53.806 10.426c0 3.906-3.216 7.037-7.142 7.037-3.963 0-7.141-3.168-7.141-7.037 0-3.868 3.215-7.037 7.141-7.037s7.142 3.169 7.142 7.037m-2.393 0c0-2.615-2.131-4.715-4.786-4.715s-4.786 2.1-4.786 4.715c0 2.616 2.131 4.716 4.786 4.716s4.786-2.1 4.786-4.716M97.33 10.426c0 3.906-3.216 7.037-7.142 7.037-3.964 0-7.142-3.168-7.142-7.037 0-3.868 3.216-7.037 7.142-7.037 3.963 0 7.142 3.169 7.142 7.037m-2.356 0c0-2.615-2.131-4.715-4.786-4.715s-4.786 2.1-4.786 4.715c0 2.616 2.131 4.716 4.786 4.716 2.617 0 4.786-2.1 4.786-4.716M83.009 3.942h-2.88l-5.421 5.453h-2.206V3.942h-2.094v12.969h2.094v-5.416h2.168l5.422 5.416h2.842l-6.431-6.448z"></path><path fill="#003791" d="M171.7 3.942h-2.84l-5.46 5.453h-2.206V3.942H159.1v12.969h2.094v-5.416h2.206l5.384 5.416h2.842l-6.394-6.448zM140.74 16.91h2.32l-5.797-12.968h-2.393l-5.795 12.969h2.318l1.271-2.8h6.806l1.27 2.8zm-7.14-4.863l2.467-5.452 2.468 5.452h-4.936z"></path><path fill="#003791" d="M67.716 13.153a3.704 3.704 0 0 0-1.197-2.727c.71-.7 1.197-1.658 1.197-2.726a3.77 3.77 0 0 0-3.777-3.758h-7.702v13.005h7.702c2.094-.036 3.777-1.731 3.777-3.794zm-9.348-7.11h5.534c.935 0 1.682.736 1.682 1.657s-.747 1.658-1.682 1.658h-5.534V6.042zm5.534 8.804h-5.534v-3.352h5.571c.935 0 1.683.773 1.683 1.658-.038.92-.785 1.694-1.72 1.694z"></path><path fill="#003791" d="M154.351 3.979v5.416h-7.665V3.979h-2.131v12.895h2.131v-5.38h7.665v5.38h2.132V3.979zM128.327 13.153c0-2.064-1.72-3.758-3.814-3.758h-5.534V6.042h8.077v-2.1h-10.208v13.005h7.665c2.094-.036 3.814-1.731 3.814-3.794zm-3.814 1.694h-5.534v-3.352h5.534c.935 0 1.683.773 1.683 1.658 0 .92-.748 1.694-1.683 1.694z"></path></g></g></svg>
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">

                <div className="sidebar__menu__block">
                    <div className="sidebar__menu__title"> Сотрудники</div>
                    <div className="sidebar__menu__line"></div>

                    <Link to={'/search'} className={`sidebar__menu__item`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                            <i className='bx bx-search'></i>
                            </div>
                            <div className="sidebar__menu__item__txt">
                                Поиск
                            </div>
                    </Link>
                    <div className="sidebar__menu__line"></div>
                    <Link to={'/top-list'} className={`sidebar__menu__item`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                            <i className='bx bx-search'></i>
                            </div>
                            <div className="sidebar__menu__item__txt">
                                Топ-лист
                            </div>
                    </Link>
                    <div className="sidebar__menu__line"></div>
                    <Link to ="MyModal" className={`sidebar__menu__item add`}>

                            <div className="sidebar__menu__item__txt add__txt" onClick={closeSidebar}>
                                Добавить / Удалить
                            </div>
                    </Link>

                </div>

                <div className="sidebar__menu__block">
                    <div className="sidebar__menu__title"> Тестирование</div>
                    <div className="sidebar__menu__line"></div>

                    <Link to={'/search'} className={`sidebar__menu__item`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                            <i className='bx bx-search'></i>
                            </div>
                            <div className="sidebar__menu__item__txt">
                                Поиск
                            </div>
                    </Link>
                    <div className="sidebar__menu__line"></div>
                    <Link to={'/top-list'} className={`sidebar__menu__item`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                            <i className='bx bx-search'></i>
                            </div>
                            <div className="sidebar__menu__item__txt">
                                Топ-лист
                            </div>
                    </Link>
                    <div className="sidebar__menu__line"></div>
                    <Link to={'/add'} className={`sidebar__menu__item add`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__txt add__txt">
                                Добавить/Удалить
                            </div>
                    </Link>
                </div>

                <div className="sidebar__menu__block">
                    <div className="sidebar__menu__title"> Предложения по повышению</div>
                    <div className="sidebar__menu__line"></div>

                    <Link to={'/search'} className={`sidebar__menu__item`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                            <i className='bx bx-search'></i>
                            </div>
                            <div className="sidebar__menu__item__txt">
                                Тарасов Г.
                            </div>
                    </Link>
                    <div className="sidebar__menu__line"></div>
                    <Link to={'/top-list'} className={`sidebar__menu__item`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                            <i className='bx bx-search'></i>
                            </div>
                            <div className="sidebar__menu__item__txt">
                                Тарасов Г.
                            </div>
                    </Link>
                    <div className="sidebar__menu__line"></div>
                    <Link to={'/add'} className={`sidebar__menu__item add`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__txt add__txt">
                                Добавить/Удалить
                            </div>
                    </Link>
                </div>
                {/* {
                    sidebarNav.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                } */}
                
            </div>

        </div>
    )
}




export default Sidebar
