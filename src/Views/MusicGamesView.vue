<script setup lang="ts">
import MusicGameItemComponent from '../components/MusicGameItemComponent.vue';
</script>
<template>
    <div class="content otoge-wrapper" id="otoge-toc">
        <h2 class="otoge-brandtitle">게키츄마이</h2>
        <div class="content-inner sega" id="gekichumai">
            <MusicGameItemComponent game="maimaiでらっくす" url="https://maimaidx-eng.com" friendcode="9022676127591"
                brand="sega" desc="RATING 13900+ (CiRCLE PLUS Intl.)" friendmagnet="https://mai.sft.sh/hotoras">
            </MusicGameItemComponent>
            <MusicGameItemComponent game="CHUNITHM" url="https://chunithm-net-eng.com" friendcode="9029676024581"
                brand="sega" desc="RATING 13.80+ (X-VERSE-X Intl.)"
                friendmagnet="https://chunilib.tsaibee.org/user/hotoras">
            </MusicGameItemComponent>
        </div>

        <h2 class="otoge-brandtitle">비마니</h2>
        <div class="content-inner bemani" id="bemani">
            <MusicGameItemComponent game="beatmaniaIIDX" url="https://p.eagate.573.jp/game/2dx" friendcode="5209-4351"
                brand="konami" desc="SP TOTAL 122+ / DP TOTAL 000.00">
            </MusicGameItemComponent>
            <MusicGameItemComponent game="SOUND VOLTEX" url="https://p.eagate.573.jp/game/sdvx" friendcode="7413-0385"
                brand="konami" desc="VF 12.68+">
            </MusicGameItemComponent>
            <MusicGameItemComponent game="pop'n music" url="https://p.eagate.573.jp/game/popn"
                friendcode="7597-0002-2676" brand="konami" desc="033.2+ (29 High Cheers) | 자주 사용 파트너 카오린">
            </MusicGameItemComponent>
            <MusicGameItemComponent game="jubeat" url="https://p.eagate.573.jp/game/jubeat" friendcode="60930001179216"
                brand="konami" desc="TOTAL 2297+ (beyond the Avenue)">
            </MusicGameItemComponent>
            <MusicGameItemComponent game="REFLEC BEAT" url="https://p.eagate.573.jp/game/reflec" friendcode="1214-2571"
                brand="konami" desc="GRADE BLUE 9 (유구의 리플레시아)">
            </MusicGameItemComponent>
            <MusicGameItemComponent game="NOSTALGIA" url="https://p.eagate.573.jp/game/nostalgia" brand="konami"
                desc="아마도 음악 교사 F (Op.3)">
            </MusicGameItemComponent>
            <MusicGameItemComponent game="GITADORA" url="https://p.eagate.573.jp/game/gfdm" friendcode="I02511B10F"
                brand="konami" desc="GF Skill 105.8+ DM Skill 55.9+ (GW:Delta)">
            </MusicGameItemComponent>
        </div>
        나머지도 추가 예정...
    </div>
</template>
<style scoped>
.content-inner {
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

}
</style>