<script setup lang="ts"></script>
<template>
<header id="site-header" class="site-header">
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/" title="hotoras.kr">
                <img src="/logo.png" alt="hotoras icon version 4" width=30 height=24 class="d-inline-block align-text-top">HotoRas
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navi"><span class="navbar-toggler-icon"></span></button>
            <div id="navbarNav" class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/portfolio" title="Portfolio">
                            Portfolio
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about" title="About Me">About</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/contact" title="Contact">Contact</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <span class="navbar-text">Others</span>
                        <ul class="dropdown-menu">
                            <li>
                                <RouterLink class="dropdown-item" to="/otoge" title="Music Games">Music Games</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <span class="navbar-text">Outer links</span>
                        <ul class="dropdown-menu">
                            <li><a href="https://github.com/HotoRas" class="dropdown-item" title="HotoRas GitHub">GitHub</a></li>
                            <li><a href="https://x.com/hotoras" class="dropdown-item" title="HotoRas Twitter">X <small>formally Twitter</small></a></li>
                            <li><a href="https://serafuku.moe/@ras" class="dropdown-item" title="Fediverse @ras@serafuku.moe">Fediverse</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>
<style scoped>
small {
    font-size: 0.8em;
}
#site-header {
    position: fixed; top: 0;
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
</style>