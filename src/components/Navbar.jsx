import Icon from "../assets/icons/IconsGalery";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <Link to="/calculator" className="NavbarIcon">
                <Icon name="calculator" />
            </Link>
            <Link to="/history" className="NavbarIcon">
                <Icon name="hourglass" />
            </Link>
            <Link to="/vehicles" className="NavbarIcon">
                <Icon name="car" />
            </Link>
            <Link to="/settings" className="NavbarIcon">
                <Icon name="gear" />
            </Link>
        </nav>
    )
}

export default Navbar;