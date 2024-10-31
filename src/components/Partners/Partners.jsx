import './Partners.css'
import val from '../../assets/valar.svg'
import ent from '../../assets/entree.svg'
import sbi from '../../assets/sbiHoldings.svg'
import vis from '../../assets/visa.svg'
import tar from '../../assets/target.svg'

const Partners = () => {
  return (
    <div className='Part'>
      <div className="partnote">
        <h1>Our Partners</h1>
      </div>
      <div className="partimg">
<img src={val} alt="" />
<img src={ent} alt="" />
<img src={sbi} alt="" />
<img src={tar} alt="" />
<img src={vis} alt="" />
      </div>
    </div>
  )
}

export default Partners
