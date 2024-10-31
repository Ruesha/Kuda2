import './More.css'
import { FaBriefcase } from "react-icons/fa";
import { GiPaperBagCrumpled } from "react-icons/gi";
import { IoIosSend } from "react-icons/io";
import { RiArrowRightWideFill } from "react-icons/ri";
const More = () => {
  return (
    <div className='morecontain'>
      <div className="morenote">
        <h1>More for you</h1>
      </div>
      <div className="morecards">
<div className="mcard">
<div className="icon">
<FaBriefcase />
    </div>
    <h2>Kuda Business</h2>
    <p>Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more.</p>
    <a href="">Learn More <RiArrowRightWideFill /></a>
</div>
<div className="mcard">
<div className="icon">
<IoIosSend />
    </div>
    <h2>Transfer & Spend</h2>
    <p>Send money for free to any Nigerian account with 25 free transfers every month.</p>
    <a href="">Learn More <RiArrowRightWideFill /></a>
</div>
<div className="mcard">
<div className="icon">
<GiPaperBagCrumpled />
    </div>
    <h2>Loans</h2>
    <p>Get up to ₦150,000 in your Kuda account easily and repay in convenient instalments.</p>
    <a href="">Learn More <RiArrowRightWideFill /></a>
</div>
      </div>
    </div>
  )
}

export default More
