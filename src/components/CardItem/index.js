// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsListDetails} = props
  const {title, description, className, imgUrl} = cardsListDetails
  return (
    <li className={`${className} card`}>
      <div className="eachCard">
        <h1 className="heading">{title}</h1>
        <p className="para">{description}</p>
        <img src={imgUrl} className="img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
