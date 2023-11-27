// 브라우저에서 현재 클라이언트의 호스트 이름 얻어오기
const clientHostName = window.location.hostname;

let backEndHostHame; // 백엔드 서버 호스트 이름

if (clientHostName === 'localhost') {
  // 개발 중
  backEndHostHame = 'http://localhost:8181';
} else if (clientHostName === 'spring.com') {
  backEndHostHame = 'https://api.spring.com';
}

export const API_BASE_URL = backEndHostHame;
export const TODO = '/api/todos';
export const USER = '/api/auth';
