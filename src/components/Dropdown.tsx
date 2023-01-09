import chevron from "../assets/icons/chevron.svg"

export default function Dropdown() {
  return (
    <div className="dropdown">
        <div className="dropdown-title">
            <h3>Fiablilité</h3>
            <span><img src={chevron} alt="chevron" /></span>
        </div>
        <div className="dropdown-infos">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </div>
    </div>
  )
}
