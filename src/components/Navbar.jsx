import Icon from "../assets/icons/IconsGalery";

function Navbar() {
    const strokeWidth = 1.7;

    return (
        <nav className="Navbar">
            <button className="NavbarIcon">
                <Icon name="calculator" />
            </button>
            <button className="NavbarIcon">
                <Icon name="hourglass" />
            </button>
            <button className="NavbarIcon">
                <Icon name="car" />
            </button>
            <button className="NavbarIcon">
                <Icon name="gear" />
            </button>
        </nav>
    )
}

export default Navbar;