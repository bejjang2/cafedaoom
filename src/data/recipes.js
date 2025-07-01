export const coffeeRecipes = [
  {
    id: 1,
    name: "아메리카노",
    category: "에스프레소 베이스",
    difficulty: "쉬움",
    time: "2분",
    ingredients: [
      "에스프레소 샷 2개 (60ml)",
      "뜨거운 물 120ml"
    ],
    instructions: [
      "에스프레소 머신으로 더블샷을 추출합니다",
      "컵에 뜨거운 물을 붓습니다",
      "에스프레소 샷을 천천히 부어줍니다",
      "가볍게 저어서 완성합니다"
    ],
    tips: "물의 온도는 85-90도가 적당합니다",
    keywords: ["아메리카노", "에스프레소", "블랙커피", "기본"]
  },
  {
    id: 2,
    name: "카페라떼",
    category: "에스프레소 베이스",
    difficulty: "보통",
    time: "3분",
    ingredients: [
      "에스프레소 샷 2개 (60ml)",
      "스팀밀크 150ml",
      "우유거품 약간"
    ],
    instructions: [
      "에스프레소 더블샷을 추출합니다",
      "우유를 65-70도로 스팀합니다",
      "컵에 에스프레소를 먼저 붓습니다",
      "스팀밀크를 천천히 부어 라떼아트를 만듭니다"
    ],
    tips: "우유는 전지우유를 사용하면 더 부드럽습니다",
    keywords: ["카페라떼", "라떼", "우유", "스팀밀크", "라떼아트"]
  },
  {
    id: 3,
    name: "카푸치노",
    category: "에스프레소 베이스",
    difficulty: "어려움",
    time: "4분",
    ingredients: [
      "에스프레소 샷 2개 (60ml)",
      "스팀밀크 60ml",
      "우유거품 60ml"
    ],
    instructions: [
      "에스프레소 더블샷을 추출합니다",
      "우유를 스팀하여 부드러운 거품을 만듭니다",
      "컵에 에스프레소를 붓습니다",
      "스팀밀크를 붓고 거품을 올려줍니다",
      "계피가루나 코코아파우더로 장식합니다"
    ],
    tips: "거품의 질감이 중요합니다. 벨벳처럼 부드러워야 합니다",
    keywords: ["카푸치노", "거품", "스팀밀크", "계피", "코코아"]
  },
  {
    id: 4,
    name: "바닐라 라떼",
    category: "플레이버 라떼",
    difficulty: "보통",
    time: "4분",
    ingredients: [
      "에스프레소 샷 2개 (60ml)",
      "바닐라 시럽 15ml",
      "스팀밀크 150ml",
      "우유거품 약간"
    ],
    instructions: [
      "컵에 바닐라 시럽을 먼저 넣습니다",
      "에스프레소 더블샷을 추출하여 붓습니다",
      "우유를 스팀합니다",
      "스팀밀크를 천천히 부어줍니다",
      "가볍게 저어서 완성합니다"
    ],
    tips: "바닐라 시럽 대신 바닐라 빈을 사용하면 더 진한 맛이 납니다",
    keywords: ["바닐라라떼", "바닐라", "시럽", "달콤한", "플레이버"]
  },
  {
    id: 5,
    name: "카라멜 마키아토",
    category: "플레이버 라떼",
    difficulty: "어려움",
    time: "5분",
    ingredients: [
      "에스프레소 샷 2개 (60ml)",
      "바닐라 시럽 15ml",
      "스팀밀크 120ml",
      "우유거품 30ml",
      "카라멜 소스 10ml"
    ],
    instructions: [
      "컵에 바닐라 시럽을 넣습니다",
      "스팀밀크와 거품을 붓습니다",
      "에스프레소 샷을 거품 위에 천천히 붓습니다",
      "카라멜 소스로 격자 무늬를 그려줍니다"
    ],
    tips: "에스프레소를 마지막에 부어 층을 만드는 것이 포인트입니다",
    keywords: ["카라멜마키아토", "카라멜", "마키아토", "층", "달콤한"]
  },
  {
    id: 6,
    name: "모카",
    category: "초콜릿 베이스",
    difficulty: "보통",
    time: "4분",
    ingredients: [
      "에스프레소 샷 2개 (60ml)",
      "초콜릿 시럽 20ml",
      "스팀밀크 120ml",
      "휘핑크림 30ml",
      "코코아파우더 약간"
    ],
    instructions: [
      "컵에 초콜릿 시럽을 넣습니다",
      "에스프레소 샷을 추출하여 붓습니다",
      "잘 저어서 섞어줍니다",
      "스팀밀크를 붓습니다",
      "휘핑크림을 올리고 코코아파우더를 뿌립니다"
    ],
    tips: "초콜릿과 커피의 균형이 중요합니다",
    keywords: ["모카", "초콜릿", "휘핑크림", "코코아", "달콤한"]
  },
  {
    id: 7,
    name: "아이스 아메리카노",
    category: "아이스 커피",
    difficulty: "쉬움",
    time: "2분",
    ingredients: [
      "에스프레소 샷 2개 (60ml)",
      "차가운 물 120ml",
      "얼음 적당량"
    ],
    instructions: [
      "컵에 얼음을 넣습니다",
      "에스프레소 더블샷을 추출합니다",
      "차가운 물을 붓습니다",
      "에스프레소를 천천히 부어줍니다"
    ],
    tips: "얼음이 너무 많으면 맛이 연해집니다",
    keywords: ["아이스아메리카노", "아이스", "차가운", "얼음", "시원한"]
  },
  {
    id: 8,
    name: "콜드브루",
    category: "브루잉 커피",
    difficulty: "어려움",
    time: "12시간",
    ingredients: [
      "굵게 간 원두 100g",
      "차가운 물 1000ml"
    ],
    instructions: [
      "굵게 간 원두를 준비합니다",
      "차가운 물과 원두를 1:10 비율로 섞습니다",
      "12-24시간 냉장고에서 우려냅니다",
      "필터로 걸러서 완성합니다"
    ],
    tips: "원두는 중간 로스팅 정도가 좋습니다",
    keywords: ["콜드브루", "차가운", "우린", "원두", "시간"]
  },
  {
    id: 9,
    name: "플랫 화이트",
    category: "에스프레소 베이스",
    difficulty: "어려움",
    time: "3분",
    ingredients: [
      "에스프레소 샷 2개 (60ml)",
      "스팀밀크 120ml (거품 최소)"
    ],
    instructions: [
      "에스프레소 더블샷을 추출합니다",
      "우유를 스팀하되 거품을 최소화합니다",
      "컵에 에스프레소를 붓습니다",
      "스팀밀크를 천천히 부어 미세한 라떼아트를 만듭니다"
    ],
    tips: "거품이 거의 없는 벨벳 같은 질감이 특징입니다",
    keywords: ["플랫화이트", "거품없는", "벨벳", "부드러운", "호주"]
  },
  {
    id: 10,
    name: "아포가토",
    category: "디저트 커피",
    difficulty: "보통",
    time: "2분",
    ingredients: [
      "바닐라 아이스크림 1스쿱",
      "에스프레소 샷 1개 (30ml)"
    ],
    instructions: [
      "차가운 컵에 바닐라 아이스크림을 담습니다",
      "에스프레소 샷을 뜨겁게 추출합니다",
      "아이스크림 위에 에스프레소를 천천히 부어줍니다",
      "즉시 서빙합니다"
    ],
    tips: "뜨거운 에스프레소와 차가운 아이스크림의 대비가 포인트입니다",
    keywords: ["아포가토", "아이스크림", "디저트", "바닐라", "이탈리아"]
  }
];

export const searchRecipes = (query) => {
  if (!query) return coffeeRecipes;
  
  const lowercaseQuery = query.toLowerCase();
  return coffeeRecipes.filter(recipe => 
    recipe.name.toLowerCase().includes(lowercaseQuery) ||
    recipe.category.toLowerCase().includes(lowercaseQuery) ||
    recipe.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseQuery)) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowercaseQuery))
  );
};