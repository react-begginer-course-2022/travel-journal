import Logo from '../assets/icons/logo.png'

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo-img" />
      <h3 className="logo-title">my travel journal.</h3>
    </header>
  )
}

export default Header;