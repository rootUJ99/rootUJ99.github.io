import React, {useReducer, useEffect} from 'react'
import styled from 'styled-components';
const TerminalArea = styled.div`
  background: #011627;
  color: #24a5a0ad;
  width: 65vw;
  height: 80vh;
  border-radius: 0.7rem;
  box-shadow: 20px 20px 0px 1px rgba(0,0,0,0.75);
  overflow: scroll;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const HightLight = styled.span`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: #877c3e;
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
const LineBlocks = styled.div`
  margin-bottom: 1rem;
`;
const initialState = {
  intro: true,
  skills: false,
  experiance: false,
  personal: false,
  hobbies: false,
  newLearnings: false,
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
    case 'show_hobbies': 
      return {...state, hobbies : true}
    case 'show_newLearnings': 
      return {...state, newLearnings : true}
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
    newLearnings,
    hobbies,
  }, dispatch] = useReducer(reducer, initialState)
  return (
    // <TerminalContainer>
      <TerminalArea>
        <TerminalHeader>
          <Circle background="#FF5F56"/>
          <Circle background="#FFBD2E"/>
          <Circle background="#27C93F"/>
        </TerminalHeader>
        <>
          <button>
            skip
          </button>
          <button>
            next
          </button>
        </>
        <PaddedBox>
          {intro && 
          <LineBlocks>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>Hey there, my name is 
            <HightLight>Ujwal Arak</HightLight>currently working as a Software Engineer in Symbo Insurance based in Mumbai</Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_skills'})}}/> <br/>
          </LineBlocks>
          }
          {skills && 
          <LineBlocks>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>I hold knowledge in
            <HightLight>Javascript and Python</HightLight>
             with frameworks like 
            <HightLight>React, Django and Node/Express</HightLight></Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_experiance'})}}/> <br/>
          </LineBlocks>
          }
          {experiance && 
          <LineBlocks>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>I have Worked with 
            <HightLight>React Redux</HightLight>for making intuitive UI/UX with data intensive applications which includes showing widgets, API integrations and dyanmic forms</Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_personal'})}}/> <br/>
          </LineBlocks>
          }
          {personal && 
          <LineBlocks>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>I've made some personal projects such as an Anime Rating Webapp with 
          <HightLight>MERN stack</HightLight>
            for personal use and simple quora clone using <HightLight>Django and Vue</HightLight></Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_newLearnings'})}}/> <br/>
          </LineBlocks>
          }
          {newLearnings && 
          <LineBlocks>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>I try to learn new things on regular basis for now I'm targeting Applied Machine Learning with
          <HightLight>Tensorflow</HightLight>
             and Cross Platform App Development using 
             <HightLight>Flutter</HightLight>
             </Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_hobbies'})}}/> <br/>
          </LineBlocks>
          }
          {hobbies && 
          <LineBlocks>
          <UserCol>portfolio@ujwal ~ </UserCol>
          <Pre>Other than that I'm a big Anime and Manga nerd, who also enjoys reading books and sometimes little bit of sketching</Pre>
          <InvisibleInput name="ignore-input"autoFocus onKeyPress={()=>{dispatch({type: 'show_hobbies'})}}/> <br/>
          </LineBlocks>
          }
        </PaddedBox>
      </TerminalArea>
    // </TerminalContainer>
  )
}

export default Terminal;