import BannerHome from "../../assets/images/banner_home.jpg"

export default function Banner() {
  return (
    <section className="banner-home">
      <img src={BannerHome} alt="Falaises au bord de mer" />
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  )
}
