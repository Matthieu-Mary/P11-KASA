import { Card } from "./Card"
import data from "../../data/data.json"

export default function CardsList() {
  return (
    <>
        {data.map((card:any) => (
            <Card key={card.key} title={card.title} cover={card.cover} />
        ))}
    </>
  )
}
