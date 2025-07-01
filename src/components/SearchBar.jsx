import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search, Mic, MicOff, X } from 'lucide-react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 3rem 1rem 3rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  font-size: 1rem;
  color: #333;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 1);
  }
  
  &::placeholder {
    color: #888;
  }
`;

const IconButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

const SearchIcon = styled(IconButton)`
  left: 0.5rem;
  color: #666;
`;

const MicButton = styled(IconButton)`
  right: 0.5rem;
  color: ${props => props.isListening ? '#ff4444' : '#666'};
  
  ${props => props.isListening && `
    animation: pulse 1.5s infinite;
    background: rgba(255, 68, 68, 0.1);
  `}
  
  @keyframes pulse {
    0% { transform: translateY(-50%) scale(1); }
    50% { transform: translateY(-50%) scale(1.1); }
    100% { transform: translateY(-50%) scale(1); }
  }
`;

const ClearButton = styled(IconButton)`
  right: 3rem;
  color: #999;
`;

const StatusText = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
`;

const SearchBar = ({ onSearch, searchQuery, setSearchQuery }) => {
  const {
    isListening,
    transcript,
    isSupported,
    startListening,
    stopListening,
    resetTranscript
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setSearchQuery(transcript);
      onSearch(transcript);
    }
  }, [transcript, onSearch, setSearchQuery]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
    resetTranscript();
  };

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const getStatusText = () => {
    if (!isSupported) return '음성인식이 지원되지 않습니다';
    if (isListening) return '음성을 인식하고 있습니다...';
    return '';
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="커피 이름이나 재료를 검색하세요... (음성 검색 가능)"
        value={searchQuery}
        onChange={handleInputChange}
      />
      
      <SearchIcon>
        <Search size={20} />
      </SearchIcon>
      
      {searchQuery && (
        <ClearButton onClick={handleClear}>
          <X size={18} />
        </ClearButton>
      )}
      
      {isSupported && (
        <MicButton onClick={handleMicClick} isListening={isListening}>
          {isListening ? <MicOff size={20} /> : <Mic size={20} />}
        </MicButton>
      )}
      
      {getStatusText() && (
        <StatusText>{getStatusText()}</StatusText>
      )}
    </SearchContainer>
  );
};

export default SearchBar;