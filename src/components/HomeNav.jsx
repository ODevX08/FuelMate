import { Link } from "react-router-dom";
import Icon from "../assets/icons/IconsGalery";

function HomeNav() {
    return (
        <nav className="HomeNav">
            <Link to="/calculator" className="HomeNavIcon">
                <Icon name="calculator" />
                <span>Kalkulator</span>
            </Link>
            <Link to="/history" className="HomeNavIcon">
                <Icon name="hourglass" />
                <span>Historia</span>
            </Link>
            <Link to="/vehicles" className="HomeNavIcon">
                <Icon name="car" />
                <span>Pojazdy</span>
            </Link>
            <Link to="/settings" className="HomeNavIcon">
                <Icon name="gear" />
                <span>Ustawienia</span>
            </Link>
        </nav>
    )
}

export default HomeNav;