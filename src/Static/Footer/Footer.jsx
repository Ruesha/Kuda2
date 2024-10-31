import kuda from '../../assets/kuda-bank.svg'
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import './Footer.css'
const Footer = () => {
  return (
    <div className='footcontain'>
      <div className="kuda">
        <img src={kuda} alt="" />
        <div className="knote">
            <div className="knote1">
                <h5>Personal</h5>
                <a>Discover Personal</a>
                <a>Transfer & Spend</a>
                <a>Save</a>
                <a>Investment</a>
                <a>Kuda card</a>
            </div>
            <div className="knote1">
                <h5>Business</h5>
                <a>Discover Business</a>
                <a>Business Registration</a>
                <a>SotPOS</a>
                <a>Invoicing</a>
                <a>Pos Machine</a>
                <a>Business Loan</a>
                <a>Business API</a>
                <a>oin Kuda Business</a>
            </div>
            <div className="knote1">
                <h5>Company</h5>
                <a>Blog</a>
                <a>Press</a>
                <a>Join Our Team</a>
                <a>About Us</a>
            </div>
            <div className="knote1">
                <h5>Help</h5>
                <a>Get Help</a>
                <a>Scam Awareness</a>
                <a>FAQs</a>
                <a>Security</a>
                <a>Contact Us</a>
                <a>Self Help</a>
            </div>
            <div className="knote1">
                <h5>Transparency</h5>
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
                <a>Information Security Policy</a>
                <a>Cookie Policy</a>
                <a>Whistleblowing Policy</a>
            </div>
        </div>
      </div>
      <div className="buttons">
        <button><div className="in"><FaApple /></div><p>Download on the App Store</p></button>
        <button><div className="in"><IoLogoGooglePlaystore /></div><p>Get it on Google Play</p></button>
        <button className="diff"><div className="in"><TbWorldWww /></div><p>Sign in to Kuda on the Web</p></button>
      </div>
      <p className='mid'>Products may vary by country or market.</p>
      <div className="product">
        <div className="init">
            <h5>Contact</h5>
<a href="">help@kuda.com</a>
<p>
    
</p>
        </div>
        <div className="init">
            <h5>Lagos</h5>
<p>
1-11 Commercial Avenue, Yaba, Lagos,  Nigeria
</p>
        </div>
        <div className="init">
            <h5>London</h5>
<p>
5 New Street Square,
London, EC4A 3TW,
United Kingdom
</p>
        </div>
        <div className="init">
            <h5>Cape Town</h5>
<p>
146 Campground Road,
Snakepit Building, Level 4, Newlands, Cape Town
</p>
        </div>
        <div className="init">
            <h5>Canada</h5>
<p>
3080 Yonge Street,
Suite 6060, Toronto,
Ontario M4N 3N1
</p>
        </div>
      </div>
      <div className="story">
    <p>© 2024 Kuda Technologies Ltd (Company No.11472232). All rights reserved.</p>  
<p>If you would like to find out more about which Kuda entity you receive services from, please reach out to us via the in-app chat in the Kuda app. Nigerian banking services offered by Kuda Microfinance Bank (RC796975) with registered address at 1-11 Commercial Avenue, Yaba, Lagos, Nigeria. Kuda Microfinance Bank is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).
</p>
<p>UK services are offered by Kuda EMI Ltd (Company No. 13724208) with registered address at 5 New Street Square, London, EC4A 3TW, United Kingdom.</p>
<p>Canada services will be provided by Kuda Canada Technologies Limited, an Ontario corporation registered under number 1000286176, with its registered address located at 3080 Yonge Street, Suite 6060, Toronto, Ontario M4N 3N1. Kuda Canada Technologies Limited is duly registered with The Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a money service business, bearing registration number M23163015.</p>
      </div>
    </div>
  )
}

export default Footer
