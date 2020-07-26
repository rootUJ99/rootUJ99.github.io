import React, {useReducer} from 'react'
import styled from 'styled-components';
const TerminalArea = styled.div`
  background: #011627;
  color: #24a5a0ad;
  width: 80vw;
  height: 80vh;
  border-radius: 0.7rem;
`;
const TerminalContainer = styled.div`
  background: black;
  height: 100%;
  display: grid;
  place-content: center;
`;

const TerminalHeader = styled.div`
  width: inherit;
  height: 2rem;
  /* background: blue; */
  display: flex;
  align-items: center;
  padding: 1rem 1rem 0.5rem 1rem;
`;
const Circle = styled.button`
  background: ${props => props.background || 'white'};
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 0.2rem;
  border: none;
`;

const InvisibleInput = styled.input`
  background: transparent;
  border: none;
  width: 0.5rem;
  outline:none;
  caret-color: #24a5a0ad;
`;
const Pre = styled.div`
  white-space: pre-wrap;
  display: inline;
`;

const PaddedBox = styled.div`
  padding: 2rem;
  line-height: 1.8;
`;
const UserCol = styled.p`
  color: #b4bebdad;
  display: inline;
`;
const initialState = {
  intro: true,
  skills: false,
  experiance: false,
  personal: false,
  habits: false,
  contact: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'show_skills': 
      return {...state, skills : true}
    case 'show_experiance': 
      return {...state, experiance : true}
    case 'show_personal': 
      return {...state, personal : true}
    case 'show_habits': 
      return {...state, habits : true}
    case 'show_contact': 
      return {...state, contact : true}
    default:
      return false
  }
}

const Terminal = () => {
  const [{
    intro,
    skills,
    experiance,
    personal,
    habits,
  }, dispatch] = useReducer(reducer, initialState)
  return (
    <TerminalContainer>
      <TerminalArea>
        <TerminalHeader>
          <Circle background="#FF5F56"/>
          <Circle background="#FFBD2E"/>
          <Circle background="#27C93F"/>
        </TerminalHeader>
        <PaddedBox>
          {intro && 
          <>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>Holla, my name is Ujwal Arak I'm a Software Engineer from Mumbai currenly working in Symbo Insurance India</Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_skills'})}}/> <br/>
          </>
          }
          {skills && 
          <>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>JavaScript and Python are the languages which i speak, frontend with react and backend with django, node-express</Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_experiance'})}}/> <br/>
          </>
          }
          {experiance && 
          <>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>Worked with react redux for making intuitive UI/UX and data intensive applications which includes showing widgets, api integration and dyanmic forms</Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_personal'})}}/> <br/>
          </>
          }
          {personal && 
          <>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>Made a Anime Rating Webapp with MERN stack for myself, made a simple quora clone using django</Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_habits'})}}/> <br/>
          </>
          }
          {habits && 
          <>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>Big anime and manga nerd, other than that i love reading books and sometimes little sketching</Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_habits'})}}/> <br/>
          </>
          }
        </PaddedBox>
      </TerminalArea>
    </TerminalContainer>
  )
}

export default Terminal;