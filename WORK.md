# 프로젝트별 작업 기록

의류 주문, 시장 신호, 알림처럼 상태가 계속 바뀌는 일을 다뤘습니다. 어떤 입력을 받아 어디에 표시할지 정하고, 실제 사용 중 발견한 예외를 다음 버전에 반영했습니다.

[포트폴리오 첫 화면](https://tomyfu.github.io/portfolio/) · [GitHub 개요](README.md)

<a id="fibo-terminal"></a>

## FIBO Terminal 0.5.4

**Windows 데스크톱 프로그램 · MT5 시세 연결**

주식·통화·원자재 등 여러 시장을 탐색하고, 선택한 종목의 차트와 호가·주문을 한 화면에서 확인하는 Windows 거래 터미널. 3M(MMM.xnys)의 5분봉, 이동평균과 거래량, 호가와 주문 입력, 하단의 거래 기록을 한 화면에 배치했습니다.

[프로젝트 설명](https://tomyfu.github.io/portfolio/projects/fibo-terminal.html)

<a id="partner"></a>

## Partner Trade

**웹·API 구현** · Next.js · TypeScript · PostgreSQL · Prisma

엑셀 이력과 실시간 거래를 함께 다루면 하나의 포지션이 두 줄로 보이거나 청산 정보가 떨어져 보일 수 있습니다. 회원이 읽는 거래내역과 운영자가 확인하는 수집 상태를 구분했습니다. 시세를 받는 경로와 거래를 받는 경로를 나누고, 거래는 계좌와 포지션을 조합해 식별하도록 설계했습니다.

저장소에 시세 수집 API, 진입·청산을 같은 기록에 반영하는 처리, 거래내역·파트너·관리자 분석 화면이 구현되어 있습니다.

- 산출물 — Next.js 페이지 · 거래 수집 및 시세 수집 라우트 · 데이터베이스 스키마
- 공개 범위 — 공개 사례는 데이터 처리 방식과 화면 구성까지 다룹니다.

[사례 페이지](https://tomyfu.github.io/portfolio/projects/partner.html)

<a id="datadesk"></a>

## DataDesk

**주문대장 UI 시안** · 업무 분석 · 데이터 대조 · 데스크톱 UI

발주서에는 36장, 사내 데이터에는 40장이 적혀 있으면 담당자는 어느 자료에서 차이가 시작됐는지 찾아야 합니다. 의류 제작 현장에서 쓰는 주문번호·옵션·수량을 중심으로 목록을 구성했습니다. 주문을 선택하면 원본별 값과 확인 상태가 바로 아래에 나타나도록 화면을 다듬었습니다.

통합 주문대장 시안을 만들었습니다. 공개용으로 재구성한 예시 화면에서는 수량이 다른 주문만 골라 두 기록의 차이를 확인할 수 있습니다.

- 산출물 — DataDesk_OrderDesk.png · 주문 2건을 사용한 포트폴리오용 비교 데모
- 공개 범위 — 원 작업은 화면 설계입니다. 공개 데모에서 쓰는 주문은 모두 예시 데이터입니다.

[사례 페이지](https://tomyfu.github.io/portfolio/projects/datadesk.html) · [주문 수량 대조해 보기](https://tomyfu.github.io/portfolio/demos/datadesk.html)

<a id="fibo"></a>

## FiboSwitch

**마켓 공개** · MQL5 · MetaTrader 5 · Strategy Tester

시장 방향을 판단하는 시간봉과 실제 진입을 판단하는 시간봉이 달라 사용자가 결과를 재현할 수 있는 설명이 필요했습니다. M15·M5에서 방향을 읽고 M1에서 진입을 판단하도록 규칙을 정리했습니다. 버전별 동작을 비교하고, 심볼 설정과 전략 테스터의 첫 실행 절차를 문서화했습니다.

2026년 11월 15일 MQL5 마켓에 FiboSwitch를 등록하고 다음 날 v6.472 설정 가이드를 공개했습니다. 제품 페이지에서 무료 데모와 입력 항목을 확인할 수 있습니다.

- 산출물 — MQL5 제품 페이지 · FiboSwitch MT5 Inputs and Setup Guide v6.472
- 공개 범위 — 공개 사례는 제품의 동작과 검증 절차를 다룹니다.

[사례 페이지](https://tomyfu.github.io/portfolio/projects/fibo.html) · [MQL5 제품 보기](https://www.mql5.com/ko/market/product/208585) · [설정 가이드](https://www.mql5.com/en/blogs/post/780817)

<a id="news"></a>

## WhiteShark FX News

**MT5 배포 패키지** · MQL5 · MT5 경제 캘린더 · Telegram

발표 한 시간 전부터 매분 같은 알림이 도착하면 정작 필요한 두 번째 안내를 놓치기 쉽습니다. 실제 반복 수신 사례를 바탕으로 알림 조건을 ‘발표 60분 전과 30분 전, 각각 한 번’으로 정의했습니다. 같은 시각의 지표는 하나의 메시지로 묶도록 수정했습니다.

수정한 MT5 패키지 v1.01과 설치 안내를 정리했습니다. 일정 조회·발송 주기와 한 이벤트의 실제 알림 횟수를 구분한 사례입니다.

- 산출물 — WhiteSharkFXNews_MT5_v1.01.zip · 수정·설치 기록
- 공개 범위 — 공개 페이지의 알림 예시는 동작 설명용입니다.

[사례 페이지](https://tomyfu.github.io/portfolio/projects/news.html)

<a id="croceye"></a>

## CROCEYE

**웹사이트 2종 배포** · 브랜드 웹 · 랜딩 페이지 · 제품 카탈로그

처음 방문한 사람과 특정 프로그램을 찾는 사람이 한 화면에서 서로 다른 정보를 찾고 있었습니다. 브랜드와 서비스의 쓰임을 소개하는 랜딩 페이지, 제품을 둘러보는 상점 페이지를 각각 기획했습니다. 프로젝트 전반에서 쓴 시각 자산과 이름을 일관되게 정리했습니다.

CROCEYE Private Wealth와 CROCEYE EA Shop 두 사이트의 배포 기록이 있습니다. 포트폴리오에는 브랜드 이미지와 각 화면의 목적을 담았습니다.

- 산출물 — Private Wealth · EA Shop 배포 이력 및 CROCEYE 브랜드 배너
- 공개 범위 — 두 사이트는 접근 권한이 설정되어 있습니다.

[사례 페이지](https://tomyfu.github.io/portfolio/projects/croceye.html)

<a id="modernglow"></a>

## ModernGlow 맞춤제작 웹

**홈페이지 시안** · 제조 도메인 · 정보구조 · 문의 UX

문의 첫 메시지에서 품목과 수량, 납기를 다시 묻는 일이 많아 제작 가능 여부를 판단하는 데 시간이 걸렸습니다. 공연복·팀복·맞춤 생산 경험을 바탕으로 메인 소개, 제작 사례, 문의로 이어지는 구성을 잡았습니다. 고객이 참고 이미지와 수량, 희망 납기를 준비하도록 문의 흐름을 설계했습니다.

첫 화면에서 제조사가 어떤 일을 하는지 이해하고 실제 제작 문의까지 이어지는 세 화면의 웹 콘셉트를 만들었습니다.

- 산출물 — ModernGlow_Custom_Web_Concept.png · 맞춤제작 문의 화면 기획
- 공개 범위 — 공개한 범위는 홈페이지 기획과 시안입니다.

[사례 페이지](https://tomyfu.github.io/portfolio/projects/modernglow.html)

<a id="stochastic"></a>

## Stochastic Speed & Strength

**지표 소스 구현** · MQL5 · 지표 버퍼 · 멀티타임프레임

1분·5분·15분 차트 사이를 이동하면서 지표 변화를 비교하기 번거로웠습니다. 한 보조창에 %K와 %D를 그리고 세 시간대의 정보를 함께 보는 패널을 구성했습니다. 확정봉 기준 옵션과 패널 위치 복원 설정을 포함했습니다.

MQL5 지표 소스 v1.10을 작성했습니다. 사용자는 차트 위에서 패널 위치를 조절하고 관찰 기준을 선택할 수 있습니다.

- 산출물 — StochasticSpeedStrength_1455_v110_Subwindow.mq5
- 공개 범위 — 세 시간대의 변화를 관찰하는 지표입니다.

[사례 페이지](https://tomyfu.github.io/portfolio/projects/stochastic.html)

## 전체 색인

분야별 73개 작업을 정리했습니다. [웹에서 전체 작업 보기](https://tomyfu.github.io/portfolio/work.html)

<a id="clothing"></a>

## 의류 제조·납품

ModernGlow에서 맡은 교복, 무대의상과 브랜드 제품.

| 작업 | 단계 | 내용 |
| --- | --- | --- |
| 교복 바지·치마 OEM | 생산·납품 | 기준 샘플에 맞춰 허리조절 바지와 주름치마를 재단·봉제했습니다. 바지는 허리 조절 폭과 인심을, 치마는 여밈과 주름 방향을 검수했습니다. |
| 학교별 교복 맞춤 제작 | 생산·사후관리 | 학교가 제공한 사이즈표를 기준으로 수량을 나눠 생산하고 피팅 후 수선과 추가 제작을 진행했습니다. |
| 롤링핸즈 팀 의상 | 공연복 제작 | 화이트 재킷과 와이드 팬츠를 한 세트로 구성한 팀 의상을 제작했습니다. |
| 락앤롤크루 공연복 | 공연복 제작 | 카키색 재킷과 팬츠에 보라색 조끼를 조합해 팀 전체의 배색을 맞췄습니다. |
| 런피플 컬러 수트 | 공연복 제작 | 재킷과 팬츠의 형태를 통일하고 팀원별로 색을 바꿔 공연 의상을 제작했습니다. |
| 코이 & 페퍼맨 배틀 의상 | 맞춤 제작 | 브이넥 조끼와 홀터넥 상의에 같은 청록색을 사용해 서로 다른 실루엣을 한 팀으로 연결했습니다. |
| 리드미컬라이프 배색 팬츠 | 브랜드 제품 제작 | 검정과 노랑 원단을 절개선에서 이어 붙인 캐주얼 팬츠를 제작했습니다. |
| 크루·학원 팀복과 키즈댄스 의상 | 단체복 제작 | AIM Crew와 SAYCREW 등 크루·학원용 팀복, 키즈댄스 의상으로 작업 범위를 넓혔습니다. |
| 개인 맞춤·소량 제작 | 제작 실무 | 맞춤 정장, 스트릿웨어, 단체 티셔츠와 베개커버 등 품목별로 샘플, 사이즈, 마감 사양을 맞췄습니다. |
| 원단 소싱·샘플·납기 관리 | 생산 운영 | 의뢰 내용을 작업 사양으로 정리하고 원단과 부자재 준비, 샘플 피팅, 봉제, 검수, 출고 일정을 조율했습니다. |

<a id="brand"></a>

## 브랜드·쇼핑몰 콘텐츠

제품을 설명하고 제작 문의를 받기 위해 만든 자료.

| 작업 | 단계 | 내용 |
| --- | --- | --- |
| [ModernGlow 맞춤제작 홈페이지](https://tomyfu.github.io/portfolio/projects/modernglow.html) | 웹 시안 | 메인·제작 사례·문의 화면을 설계했습니다. 주문자가 품목, 수량, 참고 이미지와 희망 납기를 준비할 수 있도록 구성했습니다. |
| 댄스 의상 작업 포트폴리오 | Canva 웹 포트폴리오 | 공연복과 스트릿댄스 의상 사례를 모아 의뢰자가 팀의 스타일과 제작 범위를 살펴볼 수 있게 구성했습니다. |
| ModernGlow 회사소개서 | 4쪽 PDF | 교복 하의 생산 실적, 팀별 공연복, 브랜드 배색 팬츠, 공장 설비와 문의 방법을 실제 제품 사진과 함께 편집했습니다. |
| 교복 생산 협력 제안서 | B2B 제안 자료 | 스마트학생복에 제안할 바지·치마 추가 생산 범위와 샘플 검토 순서를 한 장에 정리했습니다. 원부자재 제공 조건과 품목별 검수 기준을 명시했습니다. |
| 쇼핑몰 팬츠·대여복 생산 제안 | 영업 기획 | 쇼핑몰의 소량 바지 생산과 대여 교복의 추가 물량을 대상으로, 참고 샘플과 수량에 맞춰 공임을 제시하는 방식을 기획했습니다. |
| [인스타그램 스토리·하이라이트](https://www.instagram.com/modernglow_cloth/) | 디자인·콘텐츠 제작 | 연도별 제작 사례와 문의용 스토리를 구성했습니다. 표지, 제작 문의 예시와 오픈채팅 QR의 배치를 다듬었습니다. |
| DTF 캐릭터와 단체 티셔츠 | 그래픽·제품 기획 | 봉남·누리 캐릭터를 활용한 의류 그래픽과 단체 티셔츠 작업을 진행했습니다. |
| 스트릿웨어 온라인 판매 | 브랜드 운영 | 자체 스트릿웨어를 온라인으로 소개하고 판매하며 의류 제작과 고객 응대를 함께 담당했습니다. |
| 댄서 팬츠 콘텐츠 캠페인 | 마케팅 기획 | 댄서용 팬츠를 소재로 착용 후기와 퍼포먼스 영상, 업로드용 문안을 연결하는 캠페인을 구상했습니다. |
| 제작 문의·견적·출고 절차 | 운영 문서 | 첫 문의에서 받을 품목·수량·납기를 정리하고 샘플비, 생산 선금, 출고 전 잔금과 배송 안내의 순서를 문서화했습니다. |
| 제조·유통 연계 운영안 | 사업 기획 | 생산관리표, 협력 공장, 룩북, B2B 제안과 독립몰을 단계별로 구성하고 월별 제조·영업 계획을 정리했습니다. |

<a id="software"></a>

## 데스크톱·업무 도구

시장 탐색, 주문 조회, 설치와 일정 알림에 쓰는 화면과 도구.

| 작업 | 단계 | 내용 |
| --- | --- | --- |
| [FIBO Terminal 0.5.4](https://tomyfu.github.io/portfolio/projects/fibo-terminal.html) | Windows 프로그램 | 마켓 탐색에서 종목을 고르면 차트, 호가와 주문 패널을 함께 볼 수 있습니다. 3M의 5분봉과 이동평균·거래량·스토캐스틱이 표시된 실행 화면을 기준으로 정리했습니다. |
| [DataDesk 통합 주문대장](https://tomyfu.github.io/portfolio/demos/datadesk.html) | UI 시안·공개 데모 | 발주서와 사내 주문대장의 수량을 비교하고, 주문별 원본 값과 확인 상태를 한 화면에서 살펴보도록 설계했습니다. |
| 사내 데이터 연결·열 매핑 | 화면 설계 | DB·엑셀·외부 API에 흩어진 데이터를 가져오는 과정을 설계했습니다. 원본의 열 이름과 주문 항목을 연결해 저장하는 흐름을 시안으로 만들었습니다. |
| [WhiteShark FX News](https://tomyfu.github.io/portfolio/projects/news.html) | MT5·Telegram 패키지 | 한 경제지표가 매분 반복 발송되던 문제를 수정했습니다. 발표 60분 전과 30분 전에 각각 한 번씩 알리도록 구성했습니다. |
| MT5 설치 런처·SHARK PLAY | 설치 흐름 기획 | 터미널과 EA, 차트 템플릿을 준비하고 첫 실행 때 사용자가 자동매매를 켜는 절차를 설계했습니다. |
| FUMA BASIC MODE PRO 설치 패키지 | Inno Setup 설계 | MT5 폴더에 EA와 안내 파일을 배치하는 Windows 설치 스크립트와 패키지 구성을 작성했습니다. |
| EA 고객용·관리자용 빌드 | MQL5 소스 | 같은 EA에서 배포용과 개발용 설정을 분리하고, 허용 계좌와 서버를 확인하는 동작을 테스트했습니다. |
| 거래 도구 운영 환경 | 환경 구성 | VPS에서 MT5 도구를 운영하기 위한 원격 접속과 파일 배치 절차를 정리했습니다. |

<a id="web"></a>

## 웹서비스·데이터

서비스 화면에서 데이터 수집과 운영자 도구까지 이어지는 작업.

| 작업 | 단계 | 내용 |
| --- | --- | --- |
| [Partner Trade](https://tomyfu.github.io/portfolio/projects/partner.html) | 웹·API 구현 | Next.js, TypeScript, Prisma, PostgreSQL을 사용해 회원 대시보드·거래내역·파트너·관리자 화면을 구성했습니다. |
| MT5 시세·거래 수집 | API·EA 연동 | CrocoMarketFeed가 보내는 시세와 EA의 거래 기록을 별도 경로로 수집하고 계좌·포지션을 기준으로 진입과 청산을 연결했습니다. |
| 엑셀 거래이력 가져오기 | 데이터 처리 | 엑셀에서 읽은 이력과 실시간 수집 결과를 함께 보여주는 흐름을 다뤘습니다. 중복 기록과 진입·청산의 대응 관계를 점검했습니다. |
| EA 전략분석센터 | 관리 화면·기획 | EA별 성과와 종목 적합도를 비교하는 화면을 구성하고, 추천 결과를 운영자가 승인해 배정하는 절차를 기획했습니다. |
| 파트너·입출금 운영 화면 | 서비스 모듈 | 파트너 신청과 회원 입출금 요청을 관리하는 화면, 송금 처리 상태와 거래 식별값을 기록하는 흐름을 구성했습니다. |
| [CROCEYE Private Wealth](https://tomyfu.github.io/portfolio/projects/croceye.html) | 브랜드 웹 배포 | 브랜드 첫 화면과 소개 섹션을 구성하고 모바일 레이아웃과 대표 이미지 배치를 조정했습니다. |
| [CROCEYE EA Shop](https://tomyfu.github.io/portfolio/projects/croceye.html) | 카탈로그 웹 배포 | 프로그램을 찾는 방문자가 제품을 둘러볼 수 있도록 소개용 사이트에서 카탈로그를 분리했습니다. |
| CROCEYE 대시보드·거래 API 스타터 | 웹 패키지 | 모바일 대응 대시보드, 상단 메뉴 호환 수정과 거래 API 스타터를 버전별로 정리했습니다. |
| FUMA 브랜드와 거래 UI | 디자인 시안 | 로그인, 스플래시, 라이트·다크 대시보드 시안을 만들고 퓨마 모티프와 화면 간 색 사용을 정리했습니다. |
| 한빛산부인과 홈페이지 리디자인 | 자율 디자인 시안 | 모바일 첫 화면에서 진료시간, 의료진, 오시는 길을 빠르게 찾도록 정보 순서를 재구성하고 PC·모바일 시안을 만들었습니다. |
| 댄서 협업 웹 | 서비스 기획·HTML 초안 | 공연 영상과 제작 의상을 소개하는 페이지에서 출발해 댄서 프로필, 팀원 모집, 대회 신청으로 서비스 범위를 설계했습니다. |
| 댄서·예술학교용 AI 프로그램 | 아이디어 기획 | 댄서와 예술학교의 현장 업무를 대상으로 안무 외에도 활용할 수 있는 프로그램 아이디어를 검토했습니다. |
| [작업 포트폴리오 웹](https://tomyfu.github.io/portfolio/index.html) | GitHub Pages 배포 | 데스크톱 도구, 웹서비스, 제조 사례와 기획 자료를 찾아볼 수 있는 정적 포트폴리오를 구성했습니다. |

<a id="mt5"></a>

## MT5 제품·전략 연구

제품화한 EA와 전략·보조지표의 버전별 연구 기록.

| 작업 | 단계 | 내용 |
| --- | --- | --- |
| [FiboSwitch](https://tomyfu.github.io/portfolio/projects/fibo.html) | MQL5 마켓 공개 | 방향을 판단하는 M15·M5와 진입을 판단하는 M1을 구분했습니다. EX5 제품, 심볼 프리셋과 v6.472 설정 가이드를 공개했습니다. |
| Fibo Direction Refine · Case43 | EA 버전 연구 | 박스 돌파·되돌림과 추세·횡보 판정의 조합을 테스트했습니다. ReverseProfit, R2·R3, H1, ULTRA, NewsCollector 등 변형도 비교했습니다. |
| CrocoBasic · BASIC MODE | EA 시리즈 | 기본 진입 규칙에서 보호 엔진, 라우터, 선행 신호, 라이브 틱까지 버전별로 확장했습니다. 보호 설정과 판정 로그를 함께 점검했습니다. |
| FUMA EA BASIC·PRO · RegimeBreakout | EA 시리즈 | FUMA 재설계와 시장 국면에 따른 돌파형 전략을 다루고 BASIC·PRO 버전으로 설정을 비교했습니다. |
| CROCEYE Market Brain | EA 연구 | 시장 판정과 포지션 보호 조건을 바꾸며 추적 청산과 손익 관리 버전을 비교했습니다. |
| CROCEYE AIR Reload · PatternVolume · ZoneRecovery | EA 연구 | 재진입, 거래량 패턴, 구간 회복을 주제로 한 개별 EA와 화면 패널을 정리했습니다. |
| CROCEYE Forex Retest · Pullback | EA 연구 | 외환 종목에서 재시험과 눌림 조건을 적용한 전략을 버전별로 정리했습니다. |
| Donchian Pullback Box | v1.50 패키지 | 돈키안 채널과 눌림 조건, 손절과 추적 청산 설정을 EA로 묶었습니다. |
| BrianWyckoff · Wyckoff TrapBox | EA·보조지표 패키지 | 프랙탈로 정한 박스의 이탈과 복귀를 관찰했습니다. M1 보조지표, 단독 실행 EA, 통합 패키지, 실시간 판정 버전을 작업했습니다. |
| Continuous Smart VWAP M5 | EA·지표 패키지 | 거래량가중평균가격을 기준으로 보는 M5 패키지입니다. ContinuousMain, ColorLine, ClosedM5와 EMA Volume Retest 변형을 다뤘습니다. |
| VWAP Router · DiamondSwitch · ORBIT SHEA | EA 연구 | VWAP를 활용한 외환 라우터와 신호 전환 버전을 비교했습니다. |
| SMA20·200 Squeeze · TitanFlow | EA·보조지표 | 두 이동평균의 수렴을 다룬 M5 EA와 지표를 제작하고 Exact, NoTitan, FSM 설정을 비교했습니다. |
| TriplePivot EMA30 MTF · Laf SuperTrend ADX Peak | EA·지표 연구 | 피벗·EMA 다중 시간봉 버전과 SuperTrend·ADX를 활용한 지표 및 EA를 작업했습니다. |
| [Stochastic Speed & Strength](https://tomyfu.github.io/portfolio/projects/stochastic.html) | MQL5 지표 소스 | 드래그할 수 있는 패널에서 M1·M5·M15의 %K·%D와 변화 속도를 확인하도록 구성했습니다. |
| MRA H1 Retention Asymmetry | EA 연구 | H1 보유 조건을 다루는 Retention Asymmetry 전략과 재설계 버전을 작업했습니다. |
| MD18 RepeatGuard · 문도그 비교 | 비교 분석·수정본 | 마켓 버전과 17·18차 테스트의 차이를 보고서로 정리하고, M5 반복 진입을 점검한 수정본을 다뤘습니다. |
| RSI·거래량·EMA·MACD 스캘퍼 | EA 연구 | 여러 지표를 결합한 스캘퍼와 RSI MACD Live Momentum 버전의 신호를 비교했습니다. |
| HAS ZZ · TrendPaint | 차트 시각화 | HAS, 지그재그, SuperTrend, SAR를 조합한 차트 표시와 추세 색상 변형을 작업했습니다. |
| CROCO Manual Scalper · TripleScalp · Hybrid Tick Structure | EA 연구 | 수동 스캘핑 보조, TripleScalp SL80과 틱 구조를 다루는 전략 버전을 작업했습니다. |
| CROCO APEX HYBRID · Legendary Hybrid D | EA 연구 | 여러 신호를 결합한 하이브리드 전략의 소스와 수정 이력을 정리했습니다. |
| Twin Fracture · Wolf Router | EA 연구 | XAU·US 계열을 대상으로 한 Twin Fracture와 Wolf Router 전략 파일을 다뤘습니다. |
| CROCO Evolution · Bloodline · Heyman Brock · Beast · IAC | EA 연구 | 금·지수 계열 EA의 독립적인 실험 버전을 관리했습니다. |
| LiveLead Gold · CROCO GPT · TSR · Regime Flow | EA 연구 | 틱 반응, 재진입 대기, 조기 청산, 시장 흐름을 다룬 버전을 비교했습니다. |
| State Event · Predator Recoil · Void Pulse · Void Snap | EA 연구 | 가격 상태 변화와 신호 반응을 주제로 한 실험 EA 소스를 정리했습니다. |
| MetalIndex Flip Mosquito · ChaosMode Gold Silver | EA 연구 | 금속·지수용 Flip Mosquito의 Hyper Rage·Rabid 버전과 금·은용 ChaosMode를 다뤘습니다. |
| 멀티심볼 크립토 전략 | 시스템 기획 | 여러 심볼의 EMA·VWAP와 거래량 돌파를 한 차트에서 관찰하는 구조와 통합 리스크 설정을 설계했습니다. |

<a id="docs"></a>

## 검증·설명서·디자인

사용자가 제품을 설정하고 테스트 결과를 읽을 수 있도록 만든 자료.

| 작업 | 단계 | 내용 |
| --- | --- | --- |
| MT5 전략 테스터·실험 기록 | 테스트·분석 | 진입 지연, 횡보장 오판, 오래 보유한 포지션을 사례별로 분류했습니다. 같은 기간과 종목에서 설정별 결과를 비교했습니다. |
| 거래 시뮬레이션·엑셀 | 계산 자료 | Exponential Profit Simulation과 전략 테스터의 엑셀 기록을 정리해 초기 조건과 결과의 차이를 살펴봤습니다. |
| [FiboSwitch 다국어 설정 가이드](https://www.mql5.com/en/blogs/post/780817) | 제품 문서 | 설치, 심볼별 프리셋, 데모 테스트 순서를 정리하고 해외 사용자용 설명과 문의 답변을 준비했습니다. |
| MT5 맞춤 제작 소개·FAQ | 서비스 소개 콘텐츠 | 제작을 의뢰할 때 필요한 조건, 예시 규칙과 테스트 절차를 문의자가 이해할 수 있도록 설명하고 상세페이지와 표지 시안을 제작했습니다. |
| FIBO 제품 그래픽 | 마켓용 디자인 | 피보 캐릭터와 제품 표지, 지표 카드, 설정 안내용 이미지 시안을 작업했습니다. |
