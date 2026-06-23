<script lang="ts" setup>
const props = defineProps<{
    game: string,
    url: string,
    img?: string,
    desc?: string,
    friendcode?: string,
    friendmagnet?: string,
}>();
</script>
<template>
    <div class="ogoge otoge-wrapper">
        <h3><a :href="props.url">{{ props.game }}</a></h3>
        <img class="otoge-thumbnail" v-if="props.img" :src="props.img" :alt="props.game" />
        <small v-if="props.desc">{{ props.desc }}</small>
        <div class="otoge-inner" v-if="props.friendcode">친구 코드: <a href="{{ props.friendmagnet ?? ./# }}">{{
            props.friendcode }}</a></div>
    </div>
</template>
<style lang="css" scoped>
.portfolio-wrapper {
    margin-left: 20px;
    margin-right: 20px;

    & .portfolio-inner {
        margin-left: 10px;
    }
}

img.portfolio-thumbnail {
    width: 80%;
    min-width: 600px;
    height: auto;
}
</style>