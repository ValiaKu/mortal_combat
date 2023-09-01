import Logo from "../../assets/images/mk-logo.png";
import "./HeaderWithStatus.scss";
const HeaderWithStatus = ({ turn }) => {
  return (
    <header className='header'>
      <img src={Logo} alt='Mortal Kombat 3 - React version ' />
      <h1>Mortal Kombat III v0.0.1</h1>
      <div className='players-box'>
        <span>Player 1: {turn}</span>
        <span>Player 2: {turn}</span>
      </div>
    </header>
  );
};

export default HeaderWithStatus;
