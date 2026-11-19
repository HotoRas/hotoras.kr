<script lang="ts" setup>
const props = defineProps<{
    title: string,
    tag?: string,
}>();
</script>
<template>
    <div class="qna-body">
        <h3>{{ props.title }}</h3>
        <small v-if="props.tag">tag: {{ props.tag }}</small>
        <div class="qna-inner">
            <slot />
        </div>
    </div>
</template>
<style lang="css" scoped>
.qna-body {
    margin-bottom: 25px;

    background-color: color-mix(in srgb, var(--base-color) 15%, transparent);
    border-radius: 16px;
    padding: 1.25rem 1.5rem;
    border: 1px solid color-mix(in srgb, var(--color) 30%, transparent);
    color: #333333;
    box-shadow: 0 8px 20px -4px color-mix(in srgb, var(--color) 35%, transparent);

    flex: 1 1 100%;
    box-sizing: border-box;
}
</style>