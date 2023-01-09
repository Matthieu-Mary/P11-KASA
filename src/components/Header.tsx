import { Link } from 'react-router-dom';
import Logo from "../assets/images/LOGO.svg"

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo KASA" />
      <ul>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </ul>
    </header>
  )
}
