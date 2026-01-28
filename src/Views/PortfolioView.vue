<script setup lang="ts">
import PortfolioMemberComponent from '../components/PortfolioMemberComponent.vue';
</script>
<template>
<div class="content portfolio-wrapper">
    <h1 id="toc">포트폴리오</h1>
    <h2 id="projects">프로젝트</h2>
    <PortfolioMemberComponent title="고양이별 Misskey 인스턴스 개발" url="https://github.com/nekoplanet/misskey.git" desc="(2024.04 ~ 2025.02)">
        <p>고양이별 Misskey 인스턴스 개발 및 유지보수를 맡았습니다.</p>
        <div>
            Child Projects:
            <div>
                - <a href="https://github.com/nekoplanet/mfm.js.git">mfm.js 수정: 사용자에 온점(<code>.</code>) 허용</a>
            </div>
            <div>
                - <a href="https://github.com/nekoplanet/council.nekoplanet.xyz.git">고양이별 은하수 교단 홈페이지 제작</a>
            </div>
        </div>
    </PortfolioMemberComponent>
    <h2 id="templates">템플릿</h2>
    <PortfolioMemberComponent title="Papago Python3 예제 최신화" url="https://github.com/HotoRas/naver-translation-localapp.git">
        <p>Naver OpenAPI에서 제공하는 Papago 예제를 최신 Python3에 대응하는 패치를 공유했습니다.</p>
    </PortfolioMemberComponent>
    <h2 id="translations">각종 한글화</h2>
    <PortfolioMemberComponent title="PixiView 한글화" url="github.com/HotoRas/PixiView.git">
        <p>PixiView 커스텀 클라이언트의 UI 컴포넌트를 한글화했습니다.</p>
        <div>
            <a href="https://github.com/matsumo0922/PixiView-KMP/blob/master/core/resources/src/commonMain/composeResources/values-ko/strings.xml">현재 레포지트리 (하드 리셋)</a>
        </div>
    </PortfolioMemberComponent>
    <PortfolioMemberComponent title="Misskey Hub (클래식) 한글화" url="https://mkhub.hotoras.kr" desc="w/ Phrygia, ltlapy">
        <p>Misskey Hub의 전체 한글화를 진행했습니다.</p>
        <div>
            함께 작업한 분들:
            <div><a href="https://github.com/sjk04">Phrygia</a></div>
            <div><a href="https://github.com/ltlapy">ltlapy</a></div>
        </div>
    </PortfolioMemberComponent>
</div>
</template>
<style scoped></style>