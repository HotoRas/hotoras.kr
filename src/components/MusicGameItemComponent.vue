<script lang="ts" setup>
const props = defineProps<{
    game: string,
    url: string,
    img?: string,
    desc?: string,
    friendcode?: string,
    friendmagnet?: string,

    brand?: string,
}>();
</script>
<template>
    <div class="otoge otoge-wrapper" :data-brand="[brand ?? 'none']">
        <h3><a :href="props.url">{{ props.game }}</a></h3>
        <img class="otoge-thumbnail" v-if="props.img" :src="props.img" :alt="props.game" />
        <small v-if="props.desc">{{ props.desc }}</small>
        <div class="otoge-inner" v-if="props.friendcode">친구 코드:
            <a v-if="props.friendmagnet" :href="props.friendmagnet">{{ props.friendcode }}</a>
            <span v-else>{{ props.friendcode }}</span>
        </div>
    </div>
</template>
<style lang="css" scoped>
.otoge {
    --base-color: #ffb6b6;

    background-color: color-mix(in srgb, var(--base-color) 15%, transparent);
    border-radius: 16px;
    padding: 1.25rem 1.5rem;
    border: 1px solid color-mix(in srgb, var(--base-color) 30%, transparent);
    color: #333333;
    box-shadow: 0 8px 20px -4px color-mix(in srgb, var(--base-color) 35%, transparent);

    flex: 1 1 100%;
    box-sizing: border-box;

    &[data-brand="sega"] {
        --base-color: #0060a8;
    }

    &[data-brand="konami"] {
        --base-color: #e60012;
    }
}

@media(min-width: 1016px) {
    .otoge {
        flex: 0 0 calc(50% - 8px);
        max-width: calc(50% - 8px);
    }
}

.otoge-wrapper {
    margin-bottom: 25px;
}

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
