type CardPropsType = {
  title: string,
  cover: string
}

export const Card:React.FC<CardPropsType> = ({title, cover}) => {
  return (
    <article className="card" style={{backgroundImage: `url(${cover})`}}>
      <h4>{title}</h4>
    </article>
  )
}
