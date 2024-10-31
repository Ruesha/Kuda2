import { BiLogoPlayStore } from "react-icons/bi"
import { FaApple } from "react-icons/fa"
import styled from 'styled-components'
import HeroImage from '../assets/Begin.png'

const Hero = () => {
    return(
        <Container>
            <Wrapper>
                <TextBox>
                   <h1>The money app for Africans.</h1>
                   <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                   <Buttons>
                    <button> <FaApple /> <span>App store</span></button>
                    <button> <BiLogoPlayStore /> <span>Play store</span></button>
                   </Buttons>
                </TextBox>
                <ImageBox>
                    <img src={HeroImage} alt="Hero" />
                </ImageBox>

            </Wrapper>
           
        </Container>
    )
}

export default Hero


const Container = styled.div`
/* background-color: yellow; */
max-width: 1280px;
margin-left: auto;
margin-right: auto;
padding: 0px 10px;
min-height: calc(100vh - 70px);
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 85%;
/* background-color: pink; */
display: flex;
flex-wrap: wrap;
justify-content: space-between;
/* @media (max-width: 800px) {
    width: 90%;
} */
`
const TextBox = styled.div`
max-width: 400px;
/* background-color: aqua; */
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 800px) {
    max-width: 100%;
   align-items: center;
   text-align: center;
}
h1{
    color: #40196D;
    font-size: 42px;
    font-weight: 800;
    
}
    p{
    font-size:20px;
    line-height:30px;
    }
`
const ImageBox = styled.div`
img{
width:500px
}
img{
    @media (max-width: 800px) {
    width:100%;
}
}
`

const Buttons = styled.div`
display:flex;
gap:30px;
color:#ffff;
button{
width:150px;
height:45px;
color:#ffff;
background-color:#000;
border:none;
border-radius:8px;

}


`