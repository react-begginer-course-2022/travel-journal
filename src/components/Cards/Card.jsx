import point from '../../assets/icons/point.svg'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={props.card.img} alt="place" className="card-img" />
      </div>
      <div className="info">
        <div className="country">
          <img src={point} alt="point" className="country__point-img" />
          <span className="country__name">{props.card.country}</span>
          <a href={props.card.google_maps_link} target="_blank" className="country__link">View on Google Maps</a>
        </div>
        <h2 className="sight-title">{props.card.sight_title}</h2>
        <div className="date">{props.card.date}</div>
        <p className="text">{props.card.sight_description}</p>
      </div>
    </div>
  )
}

export default Card;