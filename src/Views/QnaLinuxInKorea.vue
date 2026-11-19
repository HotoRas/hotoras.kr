<script setup lang=ts>
import QnaComponent from '../components/QnaComponent.vue';
</script>
<template>
    <h2>한국에서 리눅스를 메인으로 쓰는 사람에 대한 Q&amp;A</h2>
    <span class="information-qna">
        한국에서 리눅스를 메인으로 쓰는 사람인 저에게, 질문을 주시면 답변을 드리고 있습니다.<br>
        어느 정도 답변이 쌓일 때마다 여기에 업로드 중입니다.<br><br>
        <a href="https://serafuku.moe/notes/atiby52wj2">질문하기</a>
    </span>
    <div class="content qna-linux-in-korea">
        <QnaComponent title="한국 업무 3신기는 어떻게 하고 계신가요?" tag="faq">
            한국 업무 3신기라고 하면 주로 카카오톡, MS 오피스, 아래아한글을 가리키는데...
            <ul>
                <li class="koreaworker koreaworker-kakaotalk">
                    카카오톡은 원래 PC버전을 WineHQ에 올려 돌렸는데,
                    지금은 정상 작동하고 있지 않아 관뒀습니다.
                </li>
                <li class="koreaworker koreaworker-msoffice">
                    MS Office의 경우 LibreOffice로 대부분의 작업을 하고 있습니다.
                    굳이 MS 오피스를 써야 한다면 구글 독스나 웹으로 합니다.
                </li>
                <li class="koreaworker koreaworker-hwp">
                    아래아한글의 경우 HOP를 설치는 해 놨는데 지금은 웹한글 씁니다.<br>
                    Bottles에 아래아한글 네이티브 깔아서 돌려보려고 하는데 뭔가 이상할지도...
                </li>
            </ul>
            다른 프로그램이 궁금하시다면 질문 주세요!
        </QnaComponent>
        <QnaComponent title="온라인 뱅킹은 어떻게 하고 계신가요?" tag="faq">
            NVIDIA 그래픽카드를 쓰면 사실상 못 하는 것도 있고,
            소스코드와 바이너리 둘 다 소실에 가까운 UNIX 라이브러리를 공수해 깔던 해야 하는
            그런 보안 취약점을 깔 수는 없잖아요?<br>
            그냥 모바일 뱅킹 쓰고 있습니다.
        </QnaComponent>
        <QnaComponent title="우분투 쓰면 안 됨?" tag="distro">
            Ubuntu는 캐노니컬이라는 곳에서 배포하고 있는 리눅스 배포판인데요,<br>
            (짧은 답변) 거기 요즘 좀 이상해요.
            <br>
            <span>
                (긴 답변)
                <ul>
                    <li>일단 무료판에 Ubuntu Pro라고 유료 제품 홍보하고 앉았고</li>
                    <li>네이티브로 돌릴 수 있는 프로그램을 컨테이너로 배포하고 앉았고</li>
                </ul>
                쨌든 전 우분투 추천 안 합니다.
            </span>
        </QnaComponent>
        <QnaComponent title="아치리눅스 써도 돼요?" tag="distro">
            아치리눅스...는 사실 써도 되냐 안 되냐 물어볼 정도 됐으면 안 막습니다.
            <span>
                아래 상황의 경우에는 피하라고 하고 싶습니다.
                <ul>
                    <li>좀 특이한 장비를 쓰고 있어서 리눅스 드라이버 찾기가 어려운 경우</li>
                    <li>리눅스와 죽음의 50선을 할 각오가 부족하다고 생각하는 경우</li>
                    <li>위 말들이 뭔지 잘 모르겠는 경우</li>
                </ul>
            </span>
        </QnaComponent>
        <QnaComponent title="리눅스는 터미널 없이는 쓸 수 없나?" tag="vterm">
            필요성은 계속 감소하는 추세입니다만, 현재는 완전히 배제하긴 어렵다고 판단하고 있습니다.<br>
            리눅스란 거 자체가 애초에 터미널 환경에서 시작한 물건이기도 하고, CLI가 GUI보다 더 많은 조절이 가능한 경우가 상당히 많습니다.<br>
            필요한 경우에만 켜면 되긴 하는데... GUI를 잘 만들어주시는 분들이 아주 많진 않다는 느낌입니다.<br><br>
            윈도우나 맥이랑은 완전 다르죠. 윈도우는 GUI가 없으면 죽는 환경이고, 맥은 GUI에서 되는 모든 설정이 CLI에서 가능한 느낌입니다.
        </QnaComponent>
        <QnaComponent title="컴퓨터로 코딩 안 할 땐 주로 뭘 하나요?" tag="freetime">
            <ul>
                <li>유튜브,</li>
                <li>트위터,</li>
                <li>연합우주,</li>
                <li>디코,</li>
                <li>이지투온,</li>
                <li><code>dnf update --refresh</code></li>
            </ul>
            정도 있네요.
        </QnaComponent>
    </div>
</template>
<style scoped>
.content {
    padding-top: 35px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    & code {
        border-radius: 4px;
        padding: 0.05rem 0.2rem;
        background-color: #88888833;
    }

    & pre {
        border-radius: 6px;
        padding: 0.1rem 0.3rem;
        background-color: #88888844;
    }
}
</style>
