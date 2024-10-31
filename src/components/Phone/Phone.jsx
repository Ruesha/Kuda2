import PhoneImg from '../../assets/next1.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import './Phone.css'

const Phone = () => {
  return (
    <div className='Container'>
      <div className="note">
        <h1>Your phone +<span>our app + </span> <span>a debit card =</span><span> a simpler life.</span>

</h1>
<p>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
<a href="">Open An Account in Minutes <MdKeyboardArrowRight /></a>
      </div>
      <div className="image">
<img src={PhoneImg} alt="" />
      </div>
    </div>
  )
}

export default Phone
