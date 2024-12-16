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
    content = await $fetch(`https://raw.githubusercontent.com/HotoRas/HotoRas/main/docs/${route.params.category}/${route.params.sub}/${route.params.post.split('.md')[0]}.md`)
} catch (e) {
    content = `failed to fetch ${route.params.category}/${route.params.sub}/${route.params.post}`
}
var postTitle = '' //content.split('# ')[1].split('\n')[0]
var postContent = marked.parse(content)

useSeoMeta({
    title: () => postTitle,
    ogTitle: () => postTitle,
    description: content.split(postTitle)[1].slice(0, 100).replace(/\n\n/gm, ' ').replace(/\n/gm, ' '),
    ogDescription: content.split(postTitle)[1].slice(0, 100).replace(/\n\n/gm, ' ').replace(/\n/gm, ' '),
    ogImage: '/logo.png',
})

</script>