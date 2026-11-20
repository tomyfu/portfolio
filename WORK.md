# 프로젝트별 작업 기록

의류 주문, 시장 신호, 알림처럼 상태가 계속 바뀌는 일을 다뤘습니다. 어떤 입력을 받아 어디에 표시할지 정하고, 실제 사용 중 발견한 예외를 다음 버전에 반영했습니다.

[포트폴리오 첫 화면](https://tomyfu.github.io/portfolio/) · [GitHub 개요](README.md)

<a id="fibo-terminal"></a>

## FIBO 터미널

**MT5 분석 화면 시안 · 브라우저 데모**

금(XAUUSD) 5분봉에 피보나치 되돌림선을 겹쳐 보고 손절·익절 설정을 함께 확인하는 분석 화면. 차트와 엔진·주문·세션 패널을 함께 배치한 시안을 바탕으로, 예시 시세에서 피보나치 선과 주문 거리를 조작해 볼 수 있도록 재구성했습니다.

[사례 페이지](https://tomyfu.github.io/portfolio/projects/fibo-terminal.html) · [터미널 체험](https://tomyfu.github.io/portfolio/demos/fibo-terminal.html)

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

## 추가 작업 기록

| 작업 | 단계 | 내용 |
| --- | --- | --- |
| Donchian Pullback Box | MT5 전략 · v1.50 파일 패키지 | 돈키안 채널과 눌림목 조건을 EA로 구성하고 설정값과 실행 파일을 묶었습니다. |
| CrocoBasic · FUMA · CROCEYE Market Brain | MT5 전략 연구 · 소스와 버전 기록 | 거래 상태, 진입 제한, 포지션 보호, 판정 로그의 변경을 버전별로 기록한 일련의 실험입니다. |
| EA 전략분석센터 | 웹 분석 · Partner Trade 관련 작업 | EA별 성과와 종목 적합도를 확인하는 관리자 화면을 구성했습니다. 추천과 승인 후 배정하는 흐름도 기획했습니다. |
| MT5 설치 런처 | Windows 배포 기획 | EA·템플릿·차트 설정을 한 번에 설치하고, 사용자가 자동매매를 직접 켜도록 초기 설정 흐름을 설계했습니다. |
| 댄서 협업 웹 | 서비스 기획·HTML 구조 초안 | 팀의 활동 영상과 의상 사례를 소개하는 페이지를 구상하고, 댄서 프로필·팀원 모집·대회 신청을 포함한 플랫폼 범위를 정의했습니다. |
| 바카라 프로그램 | 제작 경험 기록 | 초기 규칙형 프로그램 제작 경험입니다. 세부 기능과 공개 시연 자료는 보존된 기록에서 확인되지 않았습니다. |
