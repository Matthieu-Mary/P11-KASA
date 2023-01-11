import { useParams } from "react-router-dom";
import { Carousel } from "../../components/Carousel";
import data from "../../data/data.json";
import { Tag } from "../../components/Tag";
import starImg from "../../assets/images/star.svg";

export const Apartment = () => {
  const { id } = useParams();
  const rightApartment: any = data.find((apartment) => apartment.id === id);

  return (
    <main className="apartment">
      <Carousel pictures={rightApartment.pictures} />
      <div className="container-apartment-infos">
        <div className="titles-tags">
          <h1>{rightApartment.title}</h1>
          <h3>{rightApartment.location}</h3>
          <div className="container-tags">
            {rightApartment.tags.map((tag: string, index: number) => (
              <Tag text={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="host">
          <div className="infos-host">
            <p>{rightApartment.host.name}</p>
            <img
              src={rightApartment.host.picture}
              alt={`${rightApartment.host.name} profil picture`}
            />
          </div>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                className={star <= rightApartment.rating ? "colorized" : ""}
                src={starImg}
                alt="star"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
