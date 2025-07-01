import React from 'react';
import styled from 'styled-components';
import { Coffee } from 'lucide-react';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin: 0;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CoffeeIcon = styled(Coffee)`
  color: #f7fafc;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <CoffeeIcon size={40} />
        <Title>커피 레시피북</Title>
      </Logo>
      <Subtitle>
        전문 바리스타의 레시피로 완벽한 커피를 만들어보세요
      </Subtitle>
    </HeaderContainer>
  );
};

export default Header;