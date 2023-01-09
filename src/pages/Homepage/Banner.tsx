import BannerHome from "../../assets/images/banner_home.jpg"

export default function Banner() {
  return (
    <section className="banner-home" style={{backgroundImage: `url(${BannerHome})`}}>
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  )
}
