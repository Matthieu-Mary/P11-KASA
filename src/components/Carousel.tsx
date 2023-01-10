type CarouselPropsType = {
    pictures: string[];
}

export const Carousel: React.FC<CarouselPropsType> = ({pictures}) => {
  return (
    <div className="carousel">
        <img src={pictures[0]} alt="" />
    </div>
  )
}
