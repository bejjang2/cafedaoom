import React, { useState, useRef } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const recognitionRef = useRef(null);

  // 샘플 레시피 데이터 및 대표 메뉴 이미지
  const recipes = {
    "아메리카노": {
      name: "아메리카노",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8hot.jpg",
      steps: ["에스프레소 샷 1~2잔 추출", "뜨거운 물 180ml 추가", "잘 저어서 제공"]
    },
    "아메리카노(다른이미지)": {
      name: "아메리카노",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.JPG",
      steps: ["에스프레소 샷 1~2잔 추출", "뜨거운 물 180ml 추가", "잘 저어서 제공"]
    },
    "카페라떼": {
      name: "카페라떼",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/in-2.jpg",
      steps: ["에스프레소 샷 1~2잔 추출", "스팀 밀크 180ml 추가", "거품 올려 제공"]
    },
    "카페라떼(다른이미지)": {
      name: "카페라떼",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/in-3.jpg",
      steps: ["에스프레소 샷 1~2잔 추출", "스팀 밀크 180ml 추가", "거품 올려 제공"]
    },
    "카페라떼(다른이미지2)": {
      name: "카페라떼",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/in-1[1].jpg",
      steps: ["에스프레소 샷 1~2잔 추출", "스팀 밀크 180ml 추가", "거품 올려 제공"]
    },
    "쌍화차(HOT,ICE)": {
      name: "쌍화차(HOT,ICE)",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EC%8C%8D%ED%99%94%EC%B0%A8%ED%95%9C%EC%83%81.png",
      steps: ["쌍화차 재료를 끓여 우려냄", "따뜻하게 제공"]
    },
    "대추차(HOT)": {
      name: "대추차(HOT)",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EB%8C%80%EC%B6%94%EC%B0%A8%ED%95%9C%EC%83%81.png",
      steps: ["대추를 달여 우려냄", "따뜻하게 제공"]
    },
    "쌍화밀크티": {
      name: "쌍화밀크티",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EC%8C%8D%ED%99%94%EB%B0%80%ED%81%AC%ED%8B%B0.png",
      steps: ["쌍화차+우유 블렌딩", "따뜻하게 제공"]
    },
    "녹용대보차": {
      name: "녹용대보차",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EB%85%B9%EC%9A%A9%EB%8C%80%EB%B3%B4%EC%B0%A8[1].png",
      steps: ["녹용대보차 재료를 달여 우려냄", "따뜻하게 제공"]
    },
    "십전대보차": {
      name: "십전대보차",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EC%8B%AD%EC%A0%84%EB%8C%80%EB%B3%B4%EC%B0%A8.png",
      steps: ["십전대보차 재료를 달여 우려냄", "따뜻하게 제공"]
    },
    "쌍화에이드": {
      name: "쌍화에이드",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EC%8C%8D%ED%99%94%EB%93%9C.png",
      steps: ["쌍화차+탄산수 블렌딩", "차갑게 제공"]
    },
    "산수국차": {
      name: "산수국차",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EC%82%B0%EC%88%98%EA%B5%AD%EC%B0%A8.png",
      steps: ["산수국차 재료를 달여 우려냄", "따뜻하게 제공"]
    },
    "모과생강차": {
      name: "모과생강차",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EB%AA%A8%EA%B3%BC%EC%83%9D%EA%B0%95%EC%B0%A8[2].gif",
      steps: ["모과와 생강을 달여 우려냄", "따뜻하게 제공"]
    },
    "유자차": {
      name: "유자차",
      image: "http://daoom.365food.com/resource/upload/mini/daoom/%EC%9C%A0%EC%9E%90%EC%B0%A812[1].jpg",
      steps: ["유자청을 뜨거운 물에 풀어 제공"]
    }
  };

  // 브라우저 음성인식 지원 여부 확인
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const startListening = () => {
    if (!SpeechRecognition) {
      alert("이 브라우저는 음성인식을 지원하지 않습니다.");
      return;
    }
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "ko-KR";
      recognitionRef.current.interimResults = false;
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };
      recognitionRef.current.onend = () => setIsListening(false);
    }
    setIsListening(true);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleInputChange = (e) => setInput(e.target.value);

  const handleNext = (e) => {
    e.preventDefault();
    setShowRecipe(true);
  };

  const handleBack = () => {
    setShowRecipe(false);
    setInput("");
  };

  // 입력값으로 레시피 찾기 (간단히 포함 여부로 검색)
  const findRecipe = () => {
    const key = Object.keys(recipes).find((name) => input && name.includes(input.trim()));
    return key ? recipes[key] : null;
  };

  // 모바일 카페다움 스타일 반영
  const containerStyle = {
    width: "100vw",
    minHeight: "100vh",
    background: "#f7f6fa",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
  };
  const topBarStyle = {
    width: "100%",
    background: "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
    color: "#fff",
    padding: "18px 0 10px 0",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: 1,
    boxShadow: "0 2px 8px #0001",
    marginBottom: 8,
  };
  const infoBarStyle = {
    width: "100%",
    background: "#fff",
    color: "#764ba2",
    fontSize: 15,
    padding: "8px 0 6px 0",
    textAlign: "center",
    borderBottom: "1px solid #eee",
    marginBottom: 8,
  };
  const cardStyle = {
    width: "100%",
    maxWidth: 420,
    margin: 0,
    padding: "24px 10px 18px 10px",
    background: "#fff",
    borderRadius: 18,
    boxShadow: "0 2px 16px #0002",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: 320,
  };
  const inputRowStyle = {
    display: "flex",
    gap: 10,
    marginBottom: 18,
    width: "100%",
    alignItems: "center",
  };
  const inputStyle = {
    flex: 1,
    fontSize: 20,
    padding: "12px 14px",
    border: "1.5px solid #bbb",
    borderRadius: 8,
    outline: "none",
    background: "#f8f8ff",
    minWidth: 0,
  };
  const micBtnStyle = {
    fontSize: 24,
    padding: "0 12px",
    border: "none",
    background: isListening ? "#e53e3e" : "#667eea",
    color: "#fff",
    borderRadius: 8,
    height: 48,
    width: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background 0.2s",
  };
  const nextBtnStyle = {
    width: "100%",
    fontSize: 20,
    padding: "14px 0",
    background: "#764ba2",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    marginTop: 4,
    fontWeight: 600,
    letterSpacing: 1,
    cursor: "pointer",
    boxShadow: "0 1px 4px #0001",
  };
  const backBtnStyle = {
    marginTop: 28,
    fontSize: 18,
    padding: "12px 0",
    width: "100%",
    background: "#bbb",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontWeight: 500,
    cursor: "pointer",
  };
  const recipeTitleStyle = {
    fontSize: 26,
    margin: "0 0 18px 0",
    color: "#764ba2",
    fontWeight: 700,
    textAlign: "center",
  };
  const stepStyle = {
    fontSize: 18,
    margin: "8px 0",
    color: "#333",
  };

  if (showRecipe) {
    const recipe = findRecipe();
    return (
      <div style={containerStyle}>
        <div style={topBarStyle}>카페다움</div>
        <div style={infoBarStyle}>경기 수원시 장안구 정조로 1088 | 031-252-8298 | 11:00~22:00</div>
        <div style={cardStyle}>
          <h1 style={recipeTitleStyle}>레시피 결과</h1>
          {recipe ? (
            <div style={{ width: "100%", textAlign: "center" }}>
              {recipe.image && (
                <img src={recipe.image} alt={recipe.name} style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 16, marginBottom: 10, boxShadow: "0 2px 8px #0001" }} />
              )}
              <h2 style={{ fontSize: 22, color: "#222", marginBottom: 12 }}>{recipe.name}</h2>
              <ol style={{ paddingLeft: 20, textAlign: "left" }}>
                {recipe.steps.map((step, idx) => (
                  <li key={idx} style={stepStyle}>{step}</li>
                ))}
              </ol>
            </div>
          ) : (
            <div style={{ color: "#c00", fontSize: 18, margin: "24px 0" }}>레시피를 찾을 수 없습니다.</div>
          )}
          <button onClick={handleBack} style={backBtnStyle}>돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={topBarStyle}>카페다움</div>
      <div style={infoBarStyle}>경기 수원시 장안구 정조로 1088 | 031-252-8298 | 11:00~22:00</div>
      <div style={cardStyle}>
        <h1 style={{ fontSize: 26, color: "#764ba2", marginBottom: 8, fontWeight: 700 }}>메뉴 검색</h1>
        <p style={{ fontSize: 15, color: "#555", marginBottom: 16 }}>음성 또는 텍스트로 메뉴를 입력하세요.</p>
        <form onSubmit={handleNext} style={{ width: "100%" }}>
          <div style={inputRowStyle}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="메뉴명을 입력... (예: 아메리카노)"
              style={inputStyle}
              autoFocus
            />
            <button type="button" onClick={isListening ? stopListening : startListening} style={micBtnStyle} aria-label="음성 입력">
              {isListening ? "🛑" : "🎤"}
            </button>
          </div>
          <button type="submit" style={nextBtnStyle}>검색</button>
        </form>
        {/* 전체 메뉴 미리보기 - 터치 시 레시피 보기 */}
        <div style={{ marginTop: 18, width: "100%", textAlign: "center", paddingBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {Object.entries(recipes).map(([key, menu], idx) => (
              <div
                key={menu.name + idx}
                style={{ width: 80, marginBottom: 8, cursor: "pointer", userSelect: "none" }}
                onClick={() => {
                  setInput(menu.name);
                  setShowRecipe(true);
                }}
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setInput(menu.name); setShowRecipe(true); } }}
                aria-label={menu.name + " 레시피 보기"}
              >
                <img src={menu.image} alt={menu.name} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 12, boxShadow: "0 1px 4px #0001" }} />
                <div style={{ fontSize: 14, color: "#764ba2", marginTop: 4 }}>{menu.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 14, width: "100%", textAlign: "left", fontSize: 14, color: "#888" }}>
          <strong>입력값:</strong> {input}
        </div>
      </div>
    </div>
  );
}
