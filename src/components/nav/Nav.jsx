import ChatIcon from './img/chat-icon.jpg'
import LibraryIcon from './img/library-icon.jpg'
import PersonalAccountIcon from './img/personal-account-icon.jpg'
import ScheduleIcon from './img/schedule-icon.jpg'
import LeafBackground from './img/leaf-background.jpg'
import CubeBackground from './img/cube-background.jpg'

export default function Nav () {

    const buttonArray = [
        {
            title: 'Личный кабинет',
            img: PersonalAccountIcon,
            alt: 'PersonalAccountIcon',
            class: 'nav-link border-radius-11-px-top-right border-radius-11-px-top-left'
        },

        {
            title: 'Расписание',
            img: ScheduleIcon,
            alt: 'ScheduleIcon',
            class: 'nav-link'
        },

        {
            title: 'Библиотека',
            img: LibraryIcon,
            alt: 'ScheduleIcon',
            class: 'nav-link'
        },

        {
            title: 'Чат',
            img: ChatIcon,
            alt: 'ChatIcon',
            class: 'nav-link border-radius-11-px-bottom-right border-radius-11-px-bottom-left '
        }

    ]


    return (
        <nav className="nav">
        <section className="nav-mainbox">
            <div className="nav-logo-box">
                <h1 className="nav-logo">Freak <span>School</span> </h1>
            </div>
            
            <div className="nav-link-box">
                {buttonArray.map((buttonItem) => {
                    return (
                        <button className={buttonItem.class}>
                            <img style={{width: '32px'}} src={buttonItem.img} alt={buttonItem.alt} />
                            {buttonItem.title}
                        </button>
                    )
                })}
            </div>

            
        </section>
        <img className="nav-leaf-img" src={LeafBackground} alt="" />
        <img className="nav-cube-img" src={CubeBackground} alt="" />
        <h6 className="nav-footer-text">Учебная платформа © 2024</h6>
    </nav>
    )
}