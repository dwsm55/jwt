# jwt
json web token sample

# 패키지 설치
npm install

# 실행
node index.js

# 발급 호출
http://127.0.0.1:8080/api/login

# 발급 응답
{
  "jsonwebtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwib3N0eXBlIjoibW9iaWxlIn0sImlhdCI6MTY0NTAxNjA2OX0.gxovMqMpSD17bGO55wXMdsqRvw4i1lYrkqHwUSiOi3I",
  "mailSubscribe": true,
  "permission": "admin"
}

# 인증 호출
127.0.0.1:8080/api/protected<br>
헤더 추가<br>
key : authorization<br> 
value : bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwib3N0eXBlIjoibW9iaWxlIn0sImlhdCI6MTY0NTAxNjkyM30.SeZ9mOaJIf31lJWA2V3ZUlDXOho_mM1gRZTENIz0gi

# 인증 응답
성공
{
    "message": "this is protected"
}
<br>
실패
Forbidden