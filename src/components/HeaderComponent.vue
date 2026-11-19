<script setup lang="ts"></script>
<template>
    <nav class="navbar md:navbar-expand fixed-top" data-bs-theme=light>
        <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/" title="hotoras.kr">
                <img src="/logo.png" alt="hotoras icon version 4" width=30 class="d-inline-block align-text-top">HotoRas
            </NuxtLink>
            <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navi">
                <span class="navbar-toggler-icon"></span>
            </button>

            <dialog id="navbarNav" class="drawer drawer-end " tabindex="-1" aria-labelledby="navbarDrawerLabel">
                <div class="drawer-header">
                    <h5 class="drawer-title" id="navbarDrawerLabel">Menu</h5>
                    <button class="btn-close" type="button" data-bs-dismiss="drawer" aria-label="Close"></button>
                </div>
                <div class="drawer-body mb-2 md:mb-0">
                    <ul class="nav navbar-nav me-auto">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/portfolio" title="Portfolio">
                                Portfolio
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/about" title="About Me">About</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/contact" title="Contact">Contact</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" type="button" data-bs-toggle="menu"
                                aria-expanded="false">Others</button>
                            <div class="menu">
                                <NuxtLink class="menu-item" to="/otoge" title="Music Games">
                                    Music Games</NuxtLink>
                                <NuxtLink class="menu-item" to="/linuxInKorea" title="Using Linux in Korea">
                                    Using Linux in Korea</NuxtLink>
                            </div>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
                                Outer links</button>
                            <div class="menu">
                                <a href="https://github.com/HotoRas" class="menu-item" title="HotoRas GitHub"
                                    target="_blank">GitHub</a>
                                <a href="https://x.com/hotoras" class="menu-item" title="HotoRas Twitter"
                                    target="_blank">X <small>formally Twitter</small></a>
                                <a href="https://serafuku.moe/@ras" class="menu-item"
                                    title="Fediverse @ras@serafuku.moe" target="_blank">Fediverse</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </dialog>
        </div>
    </nav>
</template>
<style scoped>
small {
    font-size: 0.8em;
}

a,
a:active {
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
</style>
