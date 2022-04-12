<template>
    <div class="panel-menu__cuisine">
        <p 
        v-for="(i, idx) in currentCuisine.menu"
        :key="idx"
        @click="setMenu(idx)"
        class="cuisine__one cuisine__one_active">
           {{ currentCuisine.menu[idx]}}
        </p>
    </div> 
</template>

<script>
export default {
    name: "ToggleMenu",
    props: {
        currentCuisine: Object,
        setMenu: Function,
    }

}
</script>

<style>

</style>