import './index.css'

const Item = props => {
  const {id, itemDetails, isActive, changeLanguage} = props
  const {buttonText} = itemDetails
  const buttonClassName = isActive ? 'active' : 'not-active'

  const onClickButton = () => {
    changeLanguage(id)
  }

  return (
    <li className="list">
      <button type="button" className={buttonClassName} onClick={onClickButton}>
        {buttonText}
      </button>
    </li>
  )
}
export default Item
