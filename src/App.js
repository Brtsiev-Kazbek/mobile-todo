import React from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Container>
        <Header />
        <TodoList/>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 40px;
`;

export default App;