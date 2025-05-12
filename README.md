<div align=center>
  <img width="636" alt="image" src="https://github.com/user-attachments/assets/0af48bc6-0594-492f-b030-e44ee2654a0f">
</div>

<h1 align=center style="text-align: center; font-size: 1.5em">친해지길: Road to Friendly</h3>

<div align=center>

<p>서먹서먹한 팀의 분위기를 타파하기 위해 공감 포인트를 수집하고,<br>이야기를 나누며 자연스레 아이스 브레이킹을 진행해봅시다!</p>

https://road-to-friendly.kro.kr/

<br/>


<p align=center>
  <a href="https://lime-mall-d34.notion.site/Road-to-friendly-2d8db233c6da4aaf8c3696a80ec83555?pvs=4">팀 노션</a>
  &nbsp; | &nbsp; 
  <a href="https://github.com/orgs/boostcampwm-2024/projects/13/views/6">백로그</a>
  &nbsp; | &nbsp;
  <a href="https://www.figma.com/design/wEa4zPVSbR94NPZ4rpgXpX/%EC%B9%9C%ED%95%B4%EC%A7%80%EA%B8%B8-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=0-1&t=DG0578d4l8h9ZfxJ-1">피그마</a>
  &nbsp; | &nbsp; 
  <a href="https://github.com/boostcampwm-2024/web11-road_to_friendly/wiki">위키</a>
</p>

<div align=center>
  <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fboostcampwm-2024%2Fweb11-road_to_friendly&count_bg=%23B681FF&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</div>
</div>
<br/>

## 소개
본 레포지토리는 [roadtofriendly](https://github.com/boostcampwm-2024/web11-road_to_friendly)의 웹 접근성 개선 프로젝트를 기반으로, 스크린 리더 구현 기능을 추가 확장한 프로젝트입니다.
실시간 키워드 표시 phase에 한정하여 스크린리더 기능을 구현했습니다.<br/>
프로젝트의 소개 및 주요 기능, 프로젝트 플로우는 해당 레포지토리를 참고해주시기 바랍니다.

## 🌈 기술적 도전 및 트러블 슈팅
### [FE] 시각적 정보 없이도 함께 하고 있음을 전달하기 – 스크린 리더 구현하기

스크린 리더 사용자도 실시간 활동에 참여하고 있다는 느낌을 받을 수 있도록, `aria-live`를 활용해 정보 변화 알림을 제공하고, 알림 트리거 방식, 알림 빈도, 우선순위(`polite` / `assertive`)를 조절, 포커싱 처리 등 다양한 설계 고민을 거쳐 구현했습니다.  

👉 알림 전달 시점과 방식에 대한 UX 고민<br/>
👉 `aria-live`를 안정적으로 적용하기 위한 라이브 리전 구조 설계 (`Context + Ref`)<br/>
👉 시간 경과, 질문 전환, 키워드 선택 등 다양한 맥락에서 알림 우선순위 조정<br/>
👉 키보드 사용자와 스크린 리더 사용자 모두를 고려한 키워드 인터랙션 구현<br/>

🔗 [스크린리더 설계 및 구현 노션 문서 보기](https://www.notion.so/1f157172b71f8077acf6d4680d901c55?pvs=4)
