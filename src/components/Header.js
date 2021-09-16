import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Сегодня</h1>
      <HeaderButton>Править</HeaderButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButton = styled.button`
  width: 85px;
  height: 27px;
  background: #f2f2f2;
  border-radius: 4px;
  border: none;
`;

export default Header;