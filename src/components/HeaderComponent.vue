<script setup lang="ts"></script>
<template>
    <nav class="navbar navbar-expand-lg fixed-top">
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
                        <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href=#>Outer links</span>
                        <ul class="dropdown-menu">
                            <li><a href="https://github.com/HotoRas" class="dropdown-item" title="HotoRas GitHub" target="_blank">GitHub</a></li>
                            <li><a href="https://x.com/hotoras" class="dropdown-item" title="HotoRas Twitter" target="_blank">X <small>formally Twitter</small></a></li>
                            <li><a href="https://serafuku.moe/@ras" class="dropdown-item" title="Fediverse @ras@serafuku.moe" target="_blank">Fediverse</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>
small {
    font-size: 0.8em;
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