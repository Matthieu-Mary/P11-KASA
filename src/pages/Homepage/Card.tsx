type CardPropsType = {
  title: string;
  cover: string;
};

export const Card: React.FC<CardPropsType> = ({ title, cover }) => {
  return (
    <article className="card">
      <img src={cover} />
      <a>
        <h3>{title}</h3>
      </a>
    </article>
  );
};
