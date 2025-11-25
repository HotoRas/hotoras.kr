<script setup lang="ts">
import { toggleClick } from '@/scripts/EventHandler';
</script>
<template>
<header id="site-header" class="site-header">
    <nav class="navi">
        <RouterLink to="/"><img src="/logo.png" alt="hotoras">HotoRas</RouterLink>
        <ul class="navi-list">
            <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
            <li class="others" @click="toggleClick">
                Others
                <ul>
                    <li><RouterLink to="/otoge">Music Games</RouterLink></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
</template>
<style scoped>
li {
    list-style: none;
}
navi-list>li {
    padding: 0 2em;
}
.others {
    display: block;
    position: relative;

    & ul {
        height: 0;
        left: 0;
        padding: 0;
        opacity: 0;
        position: absolute;
        transition: all .5s ease;
        top: 35px;

        background: var(--accent);
    }
    &:hover ul, &.on-click ul {
        height: 1.5em;
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