import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import { coffeeRecipes, searchRecipes } from './data/recipes';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-bottom: 2rem;
`;

const MainContent = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ResultsContainer = styled.div`
  margin-top: 2rem;
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
`;

const ResultsCount = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin: 0;
  font-weight: 500;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.active ? '#2d3748' : 'rgba(255, 255, 255, 0.9)'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const NoResultsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
`;

const NoResultsText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const categories = ['전체', '에스프레소 베이스', '플레이버 라떼', '아이스 커피', '브루잉 커피', '초콜릿 베이스', '디저트 커피'];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(coffeeRecipes);
  const [activeCategory, setActiveCategory] = useState('전체');

  const handleSearch = useCallback((query) => {
    let results = searchRecipes(query);
    
    if (activeCategory !== '전체') {
      results = results.filter(recipe => recipe.category === activeCategory);
    }
    
    setFilteredRecipes(results);
  }, [activeCategory]);

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    
    let results = searchRecipes(searchQuery);
    
    if (category !== '전체') {
      results = results.filter(recipe => recipe.category === category);
    }
    
    setFilteredRecipes(results);
  };

  return (
    <AppContainer>
      <Header />
      
      <MainContent>
        <SearchBar 
          onSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <ResultsContainer>
          <ResultsHeader>
            <ResultsCount>
              {filteredRecipes.length}개의 레시피
              {searchQuery && ` "${searchQuery}" 검색 결과`}
            </ResultsCount>
            
            <FilterButtons>
              {categories.map(category => (
                <FilterButton
                  key={category}
                  active={activeCategory === category}
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </FilterButton>
              ))}
            </FilterButtons>
          </ResultsHeader>
          
          {filteredRecipes.length === 0 ? (
            <NoResults>
              <NoResultsTitle>검색 결과가 없습니다</NoResultsTitle>
              <NoResultsText>
                다른 키워드로 검색하거나 음성 검색을 이용해보세요.<br />
                예: "아메리카노", "라떼", "달콤한", "초콜릿" 등
              </NoResultsText>
            </NoResults>
          ) : (
            filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          )}
        </ResultsContainer>
      </MainContent>
    </AppContainer>
  );
}

export default App;