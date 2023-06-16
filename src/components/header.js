import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Navbar = () => {  
    
    function Navt() {

        var element = document.getElementById('nav_toggle');
        element.classList.toggle('active');

        var x = document.getElementById('nav');
        x.classList.toggle('active');
    }

    return (
        <header className="header fixed" id="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink exect to="/"  className="header__logo">
                        <FontAwesomeIcon icon={faHouse} />
                    </NavLink>

                    <nav className="nav" id="nav">
                        <NavLink className="nav__link" to="/aboutcompany">
                            О компании
                        </NavLink>
                        <NavLink className="nav__link" to="/projects">
                            Проекты
                        </NavLink>
                    </nav>
                    <button className="nav-toggle" id="nav_toggle" type="button" onClick={Navt}>
                    <span className="nav-toggle__item">Menu</span>
                    </button>
                </div>

            </div>
        </header>
    );
}
 
export default Navbar;