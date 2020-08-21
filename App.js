import React from 'react'
import Terminal from './components/Terminal';
import Profile from './components/Profile';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  grid-gap: 1rem;
  justify-content: center;
  padding: 2rem;
  background: #242730;
  width: 100%;
  height: 100%;
  @media (max-width: 640px) {
    grid-template-rows: 1fr;
    grid-template-columns: none;
    height: auto;

  }
`;
const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Wrapper>
        <Profile/>
        <Terminal/>
      </Wrapper>
    </>
  )
}
export default App;