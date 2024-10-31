import newimg from '../../assets/next5.png'
import { RiArrowRightWideLine } from "react-icons/ri";
import './Hello.css'
const Hello = () => {
  return (
    <div className='new'>
      <div className="newnote">
        <h1>We’re always happy to help you.</h1>
        <p>You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.</p>
        <a href="">Get Help <RiArrowRightWideLine /></a>
      </div>
      <div className="newimage">
        <img src={newimg} alt="" />
      </div>
    </div>
  )
}

export default Hello
