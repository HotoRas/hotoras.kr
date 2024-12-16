<template>
    <div id="container">
        <h1 id="title"><a href="/">호토라즈의 홈페이지</a></h1>
        <div class="box-cont">
            <div class="post-content" v-html=postContent></div>
        </div>
    </div>
</template>
<script setup>

import { marked } from 'marked';
const route = useRoute()
var content
try {
    content = await $fetch(`https://raw.githubusercontent.com/HotoRas/HotoRas/main/docs/${route.params.category}/index.md`)
} catch (e) {
    content = 'failed to fetch ' + route.params.category
}
var postContent = marked.parse(content)
var postTitle = '' //postContent.split('<h1>')[1].split('</h1>')[0]

useSeoMeta({
    title: () => postTitle,
    ogTitle: () => postTitle,
    description: content.slice(0, 100).replace(/\n\n/gm, ' ').replace(/\n/gm, ' '),
    ogDescription: content.slice(0, 100).replace(/\n\n/gm, ' ').replace(/\n/gm, ' '),
    ogImage: '/logo.png',
})

</script>