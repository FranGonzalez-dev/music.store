import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../../components"
import { navData } from "../../data"

export const Navbar = () => {    

    const [ toggle, setToggle ] = useState(false);

    const handleClick = () => setToggle( !toggle )

    return (
        <header className="navbar"> 
            <nav className="navbar__container">
                <Link className="navbar__brand" to='/'>
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/guitar-strings.png" alt="music.store logo"/>
                    <span>music.store</span>
                </Link>
                <ul className={`navbar__links ${ toggle ? 'navbar__links--open' :'' }`}>
                    { navData.map(( data, id ) => (
                        <NavLink 
                            key={ id }
                            className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link "}
                            to={ data.link }
                        >
                            { data.text }
                        </NavLink>
                    ))}
                </ul>
                <div className="navbar__main">
                    <a className="navbar__cta" href="#">Iniciar Sesión</a>
                    <CartWidget />
                    <i className={ toggle ? 'ri-close-line' : 'ri-menu-line'} id="menu-button" onClick={ handleClick }></i>
                </div>
            </nav>
        </header>
    )
}
