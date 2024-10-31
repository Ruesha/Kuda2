import Mon from '../../assets/next2.png'
import './Money.css'
const Money = () => {
  return (
    <div className='money'>
      <div className="photo">
<img src={Mon} alt=""  />
      </div>
      <div className="info">
        <h1>It’s your money, we just help you manage it.</h1>
        <p>Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.</p>
      </div>
    </div>
  )
}

export default Money
