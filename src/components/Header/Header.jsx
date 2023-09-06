import Logo from "../../assets/images/mk-logo.png";
import "../../components/Header/Header.scss";

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='Mortal Kombat 3 - React version ' />
      <h1>Mortal Kombat III v0.0.1</h1>
    </header>
  );
};

export default Header;
