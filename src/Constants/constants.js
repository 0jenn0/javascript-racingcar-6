const CONSTANTS = Object.freeze({
  LOTTO_PRICE: 1000,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  NUMBERS_PER_LOTTO: 6,
});

const WINNING_RANKS = Object.freeze({
  FIRST: { MATCH_COUNT: 6, PRIZE: 2000000000 },
  SECOND: { MATCH_COUNT: 5, BONUS: true, PRIZE: 30000000 },
  THIRD: { MATCH_COUNT: 5, PRIZE: 1500000 },
  FOURTH: { MATCH_COUNT: 4, PRIZE: 50000 },
  FIFTH: { MATCH_COUNT: 3, PRIZE: 5000 },
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_NUMBER_RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_PURCHASE_AMOUNT: '구입 금액은 1,000원 단위로 입력해야 합니다.',
  INVALID_BONUS_NUMBER: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  // 추가적인 에러 메시지는 여기에 정의
});

export { CONSTANTS, WINNING_RANKS, ERROR_MESSAGES };
