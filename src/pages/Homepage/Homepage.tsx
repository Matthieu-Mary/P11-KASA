import Banner from "./Banner";
import Card from "./Card";

export default function Homepage() {
  return (
    <div className="home">
      <Banner />
      <section className="cards-container">
        <Card />
      </section>
    </div>
  )
}
