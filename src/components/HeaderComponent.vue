<script setup lang="ts">
for (const el of document.getElementsByClassName('others-details')) {
    el.addEventListener('mouseover', (e: Event) => {
        const elem = (e.target as HTMLElement);
        if (elem.getAttribute('open')) return;
        elem.setAttribute('open','hover');
    });
    el.addEventListener('mouseout', (e: Event) => {
        const elem = (e.target as HTMLElement);
        if (elem.getAttribute('open') === '') return;
        elem.removeAttribute('open');
    })
}
</script>
<template>
<header id="site-header" class="site-header">
    <nav class="navi">
        <RouterLink id="goto-home" to="/" title="hotoras.kr" alt="go to homepage"><img src="/logo.png" alt="hotoras icon version 4">HotoRas</RouterLink>
        <ul class="navi-list">
            <li class="portfolio"><RouterLink to="/portfolio" title="Portfolio">Portfolio</RouterLink></li>
            <li class="about"><RouterLink to="/about" title="About Me">About</RouterLink></li>
            <li class="contact"><RouterLink to="/contact" title="Contacts">Contact</RouterLink></li>
            <li class="others">
                <details class="others-details">
                    <summary>
                        Others
                    </summary>
                    <ul>
                        <li class="otoge"><RouterLink to="/otoge" title="Music Games">Music Games</RouterLink></li>
                    </ul>
                </details>
            </li>
            <li class="others">
                <details class="others-details">
                    <summary>Outer Links</summary>
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
                </details>
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
    transition: all 0.5s ease-in-out;
    display: inline flex;
    flex-direction: row;
    &>li {
        width: 12rem;
        text-align: center;
    }
}
@media (max-width: 1180px) {
    .navi-list {
        display: none;
        padding: 0;
        flex-direction: column;
        background: rgba(from var(--accent) r g b / 70%);
    }
    header:hover .navi-list,
    .navi-list:hover {
        display: block;
    }
}

.others {
    position: relative;
    align-items: center;

    & ul {
        display: inline grid;
        
        width: 12rem;

        left: 0;
        padding: 0;
        top: 0;

        background: rgba(from var(--accent) r g b / 80%);
    }
}
.navi {
    font-size:1.5rem;
    & img {
        width:52px;height:auto;
    }
}
</style>