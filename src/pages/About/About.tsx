import Dropdown from "../../components/Dropdown";
import BannerAbout from "./BannerAbout";

export default function About() {
  return (
    <main className="about">
      <BannerAbout/>
      <section className="dropdowns-container">
        <Dropdown />
      </section>
    </main>
  )
}
