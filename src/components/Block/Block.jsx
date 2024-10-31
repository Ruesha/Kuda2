import B from '../../assets/next4.png'
import { RiArrowRightWideLine } from "react-icons/ri";
import './Block.css'
const Block = () => {
  return (
    <div className='block'> 
     <div className="blockimage">
        <img src={B} alt="" />
     </div>
     <div className="blocknote">
        <h1>Turn off access, turn on safety.</h1>
        <p>Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.</p>
        <a href="">Learn more about Cards <RiArrowRightWideLine /></a>
     </div>
    </div>
  )
}

export default Block
