import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import styled from 'styled-components';
import HeaderLogo from '../../assets/kuda-bank.svg';
import NigIcon from '../../assets/nigeria.png';
import { IoReorderTwoOutline } from "react-icons/io5";

const Header = () => {
    const [isOpen, setIsOpen] = useState({});
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleDropdown = (section) => {
        setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    return (
        <Container>
            <LogoNav>
                <Logo>
                    <img src={HeaderLogo} alt="Kuda Bank Logo" />
                </Logo>
                <Navigations>
                    <nav>
                        <span onClick={() => toggleDropdown('personal')}>Personal</span>
                        <MdArrowDropDown size={20} />
                        {isOpen.personal && (
                            <Dropdown>
                                <a href="/Products">Product 1</a>
                                <a href="/Products">Product 2</a>
                            </Dropdown>
                        )}
                    </nav>
                    <nav>
                        <span onClick={() => toggleDropdown('business')}>Business</span>
                        <MdArrowDropDown size={20} />
                        {isOpen.business && (
                            <Dropdown>
                                <a href="/Business">Business 1</a>
                                <a href="/Business">Business 2</a>
                            </Dropdown>
                        )}
                    </nav>
                    <nav>
                        <span onClick={() => toggleDropdown('company')}>Company</span>
                        <MdArrowDropDown size={20} />
                        {isOpen.company && (
                            <Dropdown>
                                <a href="/Company">Company 1</a>
                                <a href="/Company">Company 2</a>
                            </Dropdown>
                        )}
                    </nav>
                    <nav>
                        <span onClick={() => toggleDropdown('help')}>Help</span>
                        <MdArrowDropDown size={20} />
                        {isOpen.help && (
                            <Dropdown>
                                <a href="/Help">Help 1</a>
                                <a href="/Help">Help 2</a>
                            </Dropdown>
                        )}
                    </nav>
                </Navigations>
            </LogoNav>
            <Buttons>
                <SignBtn>Sign In</SignBtn>
                <JoinBtn>Join Kuda</JoinBtn>
                <ConBtn>
                    <img src={NigIcon} alt="Nigeria Flag" />
                </ConBtn>
                <SideNav onClick={toggleSideNav}>
                    <IoReorderTwoOutline />
                </SideNav>
            </Buttons>
            {isSideNavOpen && (
                <MobileNav>
                    <nav onClick={toggleSideNav}>
                        <a href="/Products">Personal</a>
                        <a href="/Business">Business</a>
                        <a href="/Company">Company</a>
                        <a href="/Help">Help</a>
                    </nav>
                </MobileNav>
            )}
        </Container>
    );
};

export default Header;

const Container = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: fixed; 
    top: 0; 
    width: 100%; 
    background-color: white; 
    z-index: 1000; 
`;

const LogoNav = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    margin: 0px 80px 0px 50px;
    img {
        width: 100px;
    }
`;

const Navigations = styled.div`
    display: flex;
    nav {
        display: flex;
        align-items: center;
        color: #40196D;
        margin: 0px 20px;
        span {
            margin-right: 3px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer; /* Change cursor to pointer for dropdown */
        }
    }

    @media (max-width: 800px) {
        display: none; /* Hide default navigation on small screens */
    }
`;

const Dropdown = styled.div`
    position: absolute;
    background-color: white;
    border: 1px solid lightgray;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px;
    margin-top: 10px;
    padding: 10px;
    z-index: 1001;

    a {
        display: block;
        margin: 5px 0;
        text-decoration: none;
        color: #40196D;
    }

    a:hover {
        text-decoration: underline;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
        margin-right: 30px;
    }
`;

const SignBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 600;
    color: #40196D;

    @media (max-width: 800px) {
        display: none;
    }
`;

const JoinBtn = styled.button`
    width: 100px;
    height: 45px;
    border-radius: 10px;
    outline: none;
    border: none;
    color: #fff;
    font-weight: 700;
    background-color: #40196D;
    margin: 0px 25px;

    @media (max-width: 800px) {
        display: none;
    }
`;

const ConBtn = styled.button`
    background-color: #a4e3c6;
    outline: none;
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;

    img {
        width: 20px;
    }
`;

const SideNav = styled.div`
    display: none;
    font-size: 30px;
    margin-left: -30px;

    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`;

const MobileNav = styled.div`
position: absolute;
top: 50px;
right: 0;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 10px;
z-index: 1001;
width: 250px; /* Increased width for better usability */
border-radius: 8px; /* Rounded corners */
padding: 15px; /* Added padding for better spacing */
transition: all 0.3s ease; /* Smooth transition */
animation: fadeIn 0.3s; /* Animation for appearing */

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

nav {
    display: flex;
    flex-direction: column;

    a {
        margin: 10px 0; /* Increased margin for better spacing */
        text-decoration: none;
        color: #40196D;
        font-weight: 600;
        padding: 10px; /* Added padding for clickable area */
        border-radius: 5px; /* Rounded corners for links */
        transition: background-color 0.2s; /* Smooth background change */
    }

    a:hover {
        background-color: #f0f0f0; /* Subtle background on hover */
        color: #40196D; /* Change text color on hover */
    }
}
`;
