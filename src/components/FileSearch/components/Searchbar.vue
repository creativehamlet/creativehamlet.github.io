<template>
    <div class="row">
        <input class="searchbar text col-9 my-3" placeholder="Let's find what you're looking for..."
            v-bind:value="value" @input="$emit('input', $event.target.value)">
    </div>
</template>

<script>
export default {
    name: "searchbar",
    props: ['value'],
};
</script>

<style lang="scss" scoped>
.searchbar {
    height: 3rem;
}
</style>


