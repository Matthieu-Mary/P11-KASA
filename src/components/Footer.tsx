import Logo from "../assets/images/LOGOFOOTER.svg";

console.log(Logo)

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
