import Gla from '../../assets/next6.png'
import { RiArrowRightWideFill } from "react-icons/ri";
import './Glass.css'

const Glass = () => {
  return (
    <div className='glass'>
      <div className="glassimg">
        <img src={Gla} alt="" />
      </div>
      <div className="glassnote">
<h1>Fees as clear glass.</h1>
<p>We’re serious about free banking, and we will never, ever charge you for anything without your consent.</p>
<a href="">See all our fees <RiArrowRightWideFill /> </a>
      </div>
    </div>
  )
}

export default Glass
