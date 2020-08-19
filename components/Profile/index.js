import React from 'react'
import styled from 'styled-components'
import profile from 'url:../../assets/profile.jpg'
import insta from 'url:../../assets/insta.svg'
import twitter from 'url:../../assets/twitter.svg'
import github from 'url:../../assets/github.svg'

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 0.3fr 1fr;
`;

const Image = styled.img`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.3rem;
  margin-top: 1rem;
  border-radius: 1rem;
  background: #434753;
  box-shadow: 7px 10px 0px 1px rgba(0,0,0,0.75);

`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;
  transition-timing-function: ease-out;
  :hover {
    transform: scale(1.2);
  }
`;

function Profile() {
  return (
    <Container>
      <div></div>
      <div>
      <Image src={profile}/>
      <Description>
        <Icon src={insta} onClick={()=> window.open('https://www.instagram.com/rootuj/')}/>
        <Icon src={twitter} onClick={()=> window.open('https://twitter.com/rootuj99/')}/>
        <Icon src={github} onClick={()=> window.open('https://github.com/rootUJ99/')}/>
      </Description>
      </div>
    </Container>
  )
}

export default Profile
