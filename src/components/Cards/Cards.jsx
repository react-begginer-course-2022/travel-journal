import { cardInfo } from '../../data/data'
import Card from './Card';

const Cards = () => {
  return (
    <div className="cards-container">
      {cardInfo.map(card => {
        return <Card key={card.id} card={card} />
      })}
    </div>
  )
}

export default Cards;