import React, { useState } from 'react';
import styled from 'styled-components';
import { Clock, Users, ChefHat, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  flex: 1;
`;

const Category = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  margin-left: 1rem;
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #666;
  font-size: 0.9rem;
`;

const DifficultyBadge = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => {
    switch (props.difficulty) {
      case '쉬움': return '#e6fffa';
      case '보통': return '#fef5e7';
      case '어려움': return '#fed7d7';
      default: return '#f7fafc';
    }
  }};
  color: ${props => {
    switch (props.difficulty) {
      case '쉬움': return '#065f46';
      case '보통': return '#92400e';
      case '어려움': return '#c53030';
      default: return '#2d3748';
    }
  }};
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
  }
`;

const ExpandedContent = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h4`
  color: #2d3748;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const IngredientItem = styled.li`
  padding: 0.3rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  
  &:before {
    content: '•';
    color: #667eea;
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const InstructionsList = styled.ol`
  padding-left: 1.2rem;
  margin: 0;
`;

const InstructionItem = styled.li`
  padding: 0.3rem 0;
  color: #4a5568;
  line-height: 1.5;
`;

const TipsBox = styled.div`
  background: linear-gradient(135deg, #fef5e7 0%, #fed7aa 100%);
  padding: 1rem;
  border-radius: 12px;
  border-left: 4px solid #f59e0b;
`;

const TipsText = styled.p`
  color: #92400e;
  margin: 0;
  font-style: italic;
`;

const RecipeCard = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card onClick={toggleExpanded}>
      <CardHeader>
        <Title>{recipe.name}</Title>
        <Category>{recipe.category}</Category>
      </CardHeader>
      
      <MetaInfo>
        <MetaItem>
          <Clock size={16} />
          {recipe.time}
        </MetaItem>
        <MetaItem>
          <ChefHat size={16} />
          <DifficultyBadge difficulty={recipe.difficulty}>
            {recipe.difficulty}
          </DifficultyBadge>
        </MetaItem>
      </MetaInfo>
      
      <ExpandButton>
        {isExpanded ? '접기' : '레시피 보기'}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </ExpandButton>
      
      {isExpanded && (
        <ExpandedContent onClick={(e) => e.stopPropagation()}>
          <Section>
            <SectionTitle>
              <Users size={16} />
              재료
            </SectionTitle>
            <IngredientsList>
              {recipe.ingredients.map((ingredient, index) => (
                <IngredientItem key={index}>{ingredient}</IngredientItem>
              ))}
            </IngredientsList>
          </Section>
          
          <Section>
            <SectionTitle>
              <ChefHat size={16} />
              만드는 방법
            </SectionTitle>
            <InstructionsList>
              {recipe.instructions.map((instruction, index) => (
                <InstructionItem key={index}>{instruction}</InstructionItem>
              ))}
            </InstructionsList>
          </Section>
          
          {recipe.tips && (
            <Section>
              <SectionTitle>
                <Lightbulb size={16} />
                팁
              </SectionTitle>
              <TipsBox>
                <TipsText>{recipe.tips}</TipsText>
              </TipsBox>
            </Section>
          )}
        </ExpandedContent>
      )}
    </Card>
  );
};

export default RecipeCard;