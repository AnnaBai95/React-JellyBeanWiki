
import LogoNoBg from "../../images/logo-no-background.png";

function NavBar() {
  return (
    <header className="border-b-2 shadow-custom bg-white">
      <nav className="p-5">
        <img src={LogoNoBg} alt="Jelly Belly Logo with no background" className="w-36"></img>
      </nav>
    </header>
  );
}

export default NavBar;
