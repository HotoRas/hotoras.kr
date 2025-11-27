<script setup lang="ts">
import { toggleClick } from '@/scripts/EventHandler';
</script>
<template>
<header id="site-header" class="site-header">
    <nav class="navi">
        <RouterLink to="/" title="hotoras.kr" alt="go to homepage"><img src="/logo.png" alt="hotoras icon version 4">HotoRas</RouterLink>
        <ul class="navi-list">
            <li class="portfolio"><RouterLink to="/portfolio" title="Portfolio">Portfolio</RouterLink></li>
            <li class="about"><RouterLink to="/about" title="About Me">About</RouterLink></li>
            <li class="contact"><RouterLink to="/contact" title="Contacts">Contact</RouterLink></li>
            <li class="others" @click="toggleClick">
                Others
                <ul>
                    <li class="otoge"><RouterLink to="/otoge" title="Music Games">Music Games</RouterLink></li>
                </ul>
            </li>
            <li class="others">
                Outer Links
                <ul>
                    <li class="github">
                        <a href="https://github.com/HotoRas" title="HotoRas GitHub">GitHub</a>
                    </li>
                    <li class="twitter">
                        <a href="https://x.com/hotoras" title="X @hotoras">X<small>(formally Twitter)</small></a>
                    </li>
                    <li class="fediverse">
                        <a href="https://serafuku.moe/@ras" title="Fediverse @ras@serafuku.moe">Fediverse</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
</template>
<style scoped>
small {
    font-size: 0.8em;
}
#site-header {
    align-items: center;
    background: var(--accent);
    box-shadow: 5px 5px 5px #0001;
    box-sizing: border-box;
    color: var(--text);

    height: var(--header-height);
    justify-content: space-between;
    left: 0;
    /*overflow: hidden;*/

    padding: 0 1em;
    position: fixed; top: 0;
    width: 100vw;
    z-index: 30;
}
a, a:active {
    color: var(--text);
    text-decoration: none;
    transition: all 0.5s ease-in-out;
}
a:hover {
    text-decoration: underline;
    transform: translateX();
}
li {
    list-style: none;
}
.navi-list {
    display: inline flex;
    flex-direction: row;
    &>li {
        width: 12rem;
        text-align: center;
    }
}
.others {
    position: relative;
    align-items: center;

    & ul {
        display: inline grid;
        
        width: 12rem;

        height: 0;
        left: 0;
        padding: 0;
        opacity: 0;
        position: absolute;
        transition: all .5s ease;
        top: 0;

        background: rgba(from var(--accent) r g b / 80%);
        & li {
            height: 0;
        }
    }
    &:hover ul, &.on-click ul {
        top: 35px;
        height: 4em;
        opacity: 1;
        transform: translateY(0);
    }
}
.navi {
    font-size:1.5rem;
    & img {
        width:52px;height:auto;
    }
}
</style>