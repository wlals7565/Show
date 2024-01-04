## 서버주소
- 52.78.24.132

## swagger api 문서
- 52.78.24.132/api
- 미완성입니다.

## ERD URL
https://www.erdcloud.com/d/AfHDLqD4ZWySWj2wK
- 미완성입니다.

## admin 계정
- 공연을 등록하고 싶다면 admin계정을 이용해야 합니다.
- email: admin123@admin.com
- password: admin123456
- 위 계정은 admin권한을 테스트 하기 위해 만든 어드민 계정입니다.
- 마음대로 사용하셔도 됩니다.
- 위 테스트 계정외에는 직접 만드셔서 사용해야합니다.

## 환경변수 설정
- 루트 디렉토리에서 config폴더를 만듭니다.
- default.yaml 파일을 만듭니다.
-server:
  -port: ???

-db:
  -type: ???
  -port: ???
  -database: ???
  -host: ???
  -username: ???
  -password: ???

-jwt:
  -expiresIn: ???
  -secretKey: ???
  
-위 형태에 맞게 채워주시면 됩니다.