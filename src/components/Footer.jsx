import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FiMapPin } from "react-icons/fi"
import { mobile } from "../responsive";

 
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.h1`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
margin-bottom: 30px;

`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;


const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PRANAV.</Logo>
        <Desc>
          {" "}
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <AiFillFacebook />
          </SocialIcon>

          <SocialIcon color="#E4405f">
            <AiOutlineInstagram />
          </SocialIcon>

          <SocialIcon color="#55ACEE">
            <AiFillFacebook />
          </SocialIcon>

          <SocialIcon color="#00BFFF">
            <AiFillTwitterCircle />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
           <Title>Contact</Title>
        <ContactItem>
          <FiMapPin style={{marginRight:"10px"}}/> Sallaghar,bhaktapur
        </ContactItem>
        <ContactItem>
          <AiOutlinePhone style={{marginRight:"10px"}}/> 0141234
        </ContactItem>
        <ContactItem>
          <AiOutlineMail style={{marginRight:"10px"}} /> Pranavrajbhandari123@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
