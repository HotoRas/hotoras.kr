<script lang="ts" setup>
const props = defineProps<{
    title: string,
    url: string,
    img?: string,
    desc?: string,
}>();
</script>
<template>
    <div class="portfolio portfolio-wrapper">
        <h3><a :href="props.url">{{ props.title }}</a></h3>
        <img class="portfolio-thumbnail" v-if="props.img" :src="props.img" :alt="props.title" />
        <small v-if="props.desc">{{ props.desc }}</small>
        <div class="portfolio-inner"><slot /></div>
    </div>
</template>
<style lang="css" scoped>
.portfolio-wrapper {
    margin-left: 20px; margin-right: 20px;
    & .portfolio-inner {
        margin-left: 10px;
    }
}
img.portfolio-thumbnail {
    width: 80%; min-width: 600px; height: auto;
}
</style>