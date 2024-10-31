import save from '../../assets/next3.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import './Spend.css'

const Spend = () => {
  return (
    <div className='spend'>
      <div className="spendnote">
<h1>Save money as you spend it, seriously.</h1>
<p>You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.</p>
<a href="">See all our Savings <MdKeyboardArrowRight /> </a>
      </div>
      <div className="spendimage">
        <img src={save} alt="" />
      </div>
    </div>
  )
}

export default Spend
