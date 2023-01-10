type CardPropsType = {
  key: string,
  title: string;
  cover: string;
};

export const Card: React.FC<CardPropsType> = ({ key, title, cover }) => {
  return (
    <article className="card">
      <img src={cover} />
      <a >
        <h3>{title}</h3>
      </a>
    </article>
  );
};
