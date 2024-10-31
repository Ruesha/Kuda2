import styled from 'styled-components'
import { FaCreditCard } from "react-icons/fa6";
import { BiSolidPieChart } from "react-icons/bi";
import { LuNetwork } from "react-icons/lu";
import { IoIosSend } from "react-icons/io";
import { FaPiggyBank } from "react-icons/fa";

const Info = () => {
    const cardArray = [
        {
            title: <FaCreditCard />,
            dsc: 'Order a Kuda card on the app with pickup and delivery options.'
        },
        {
            title: <BiSolidPieChart />,
            dsc: "Enjoy cashless payment options online and offline."
        },
        {
            title: <LuNetwork />,
            dsc: "Pay your essential bills and buy gift cards easily."
        },
        {
            title: <IoIosSend />,
            dsc: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            title: <FaPiggyBank />,
            dsc: "Save money automatically any time you spend."
        },
    ];

    return (
        <Container>
            {cardArray.map((infoo, i) => (
                <Card key={i}>
                    <Him>
                        <h1>{infoo.title}</h1>
                    </Him>
                    <p>{infoo.dsc}</p>
                </Card>
            ))}
        </Container>
    );
};

export default Info;

const Card = styled.div`
    height: 90px;
    width: 280px; /* Fixed width for consistency */
    background-color: white;
    color: #40196d;
    font-weight: bold;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    font-size: 13px;
    padding: 20px;
    margin: 20px; /* Added margin for spacing */
`;

const Him = styled.div`
    h1 {
        font-size: 20px;
        background-color: #dfe3ff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap; /* Allow wrapping of cards */
    justify-content: center; /* Center cards horizontally */
    padding: 30px;
    margin: 0 auto; /* Center the container horizontally */

    /* Add a media query for smaller screens */
    @media (max-width: 768px) {
        justify-content: center; /* Ensure centering on smaller screens */
    }
`;
