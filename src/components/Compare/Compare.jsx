
import './Compare.css'
import { FaMinusCircle } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BsEmojiFrown } from "react-icons/bs";
const Compare = () => {
  return (
    <div className='tablecontain'>
        <h1>
        Choose the freedom you need.
        </h1>
      <div className="table">
<div className="left">
    <div className="line">
        <h5>Transfer Fee</h5>
         <p><FaMinusCircle />Up to N50 plus V.A.T</p>
         <p><IoCheckmarkCircleSharp /> 25 free transfers every month</p>
    </div>
    <div className="line">
        <h5>Card Delivery</h5>
         <p><FaMinusCircle /><BsEmojiFrown /></p>
         <p><IoCheckmarkCircleSharp /> Yes</p>
    </div>
    <div className="line">
        <h5>Card Maintenance Fee </h5>
         <p><FaMinusCircle />Up to N50 per quater</p>
         <p><IoCheckmarkCircleSharp /> No</p>
    </div>
    <div className="line">
        <h5>Transfer </h5>
         <p><FaMinusCircle />Up to N50 plus V.A.T</p>
         <p><IoCheckmarkCircleSharp /> 25 free transfers every month</p>
    </div>
    <div className="line">
        <h5>Alerts </h5>
         <p><FaMinusCircle />Charge for SMS alerts</p>
         <p><IoCheckmarkCircleSharp /> Free instant notification</p>
    </div>
    <div className="line">
        <h5>Transfer </h5>
         <p><FaMinusCircle />Up to N50 plus V.A.T</p>
         <p><IoCheckmarkCircleSharp /> 25 free transfers every month</p>
    </div>
    <div className="line">
        <h5>Transfer </h5>
         <p><FaMinusCircle />Up to N50 plus V.A.T</p>
         <p><IoCheckmarkCircleSharp /> 25 free transfers every month</p>
    </div>
    <div className="line">
        <h5>Transfer </h5>
         <p><FaMinusCircle />Up to N50 plus V.A.T</p>
         <p><IoCheckmarkCircleSharp /> 25 free transfers every month</p>
    </div>
</div>
      </div>
    </div>
  )
}

export default Compare
