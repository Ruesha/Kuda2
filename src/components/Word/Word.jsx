import { MdPerson4 } from "react-icons/md";
import './Word.css';
import Tech from '../../assets/techcrunch.svg'
import Wef from '../../assets/wef.svg'
import bbc from '../../assets/bbc.svg'
import cnbc from '../../assets/cnbc.svg'
import euro from '../../assets/euromoney.svg'
import fintech from '../../assets/fintech.svg'
const Word = () => {
    const cardArray = [
        {
            title: 'Well done to the guys at @kudabank! Had a dispensing error on Friday night and reached out to ',
            dsc: <MdPerson4 />
        },
        {
            title: 'I love the app so much! It has made my banking experience so much easier.',
            dsc: <MdPerson4 />
        },
        {
            title: 'Great customer service! I had an issue, and they resolved it in no time.',
            dsc: <MdPerson4 />
        },
        {
            title: 'The user interface is so intuitive. I can find everything I need without any hassle.',
            dsc: <MdPerson4 />
        },
        {
            title: 'Fast transactions! I transferred money, and it was instant.',
            dsc: <MdPerson4 />
        },
        {
            title: 'The notifications are super helpful! I always know what’s happening with my account.',
            dsc: <MdPerson4 />
        },
        {
            title: 'I appreciate the security features. I feel safe using this app.',
            dsc: <MdPerson4 />
        },
        {
            title: 'Love the budgeting tools! They help me keep track of my expenses easily.',
            dsc: <MdPerson4 />
        },
        {
            title: 'Kudos to the team for continuous updates and improvements!',
            dsc: <MdPerson4 />
        },
        {
            title: 'Highly recommend this app to anyone looking for a reliable banking solution!',
            dsc: <MdPerson4 />
        }
    ];

    return (
        <div className="center">
        <div className="midcontain">
            <h1>Don't just take our word for it</h1>
            <div className="newflex">
                {cardArray.map((infoo, i) => (
                    <div className='new2' key={i}>
                        <p>{infoo.title}</p>
                        <h2>{infoo.dsc}</h2>
                    </div>
                ))}
            </div>
        </div>
        <div className="centerimg">
            <img src={Tech} alt="" />
            <img src={Wef} alt="" />
            <img src={fintech} alt="" />
            <img src={bbc} alt="" />
            <img src={cnbc} alt="" />
            <img src={euro} alt="" />
        </div>
        </div>
    );
}

export default Word;
