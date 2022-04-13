<template>
<div class="menus-restaurant__head">
    <div 
        :style="currentCuisine['picture']" 
        style="height: 200px">
    </div> 
    <div class="head__title">
        <h1 class="title__h u-heading--h5">
        Choose menu
        </h1>
    </div> 
    <div class="head__selector">
        <h2
        v-for="(i, index) in cuisines"
        :key="index"
        @click="sendRestorant(index)"
        class="head__selector-title u-heading--h1">
        {{ i.name }}
        </h2>
    </div>
    </div> 
</template>

<script>

export default ({
    name: 'ToggleRestoraunt',
    props: {
        cuisines: Object,
        sendRestorant: Function,
        currentCuisine: Object,
    },
    data() {
        return {

        }
    },

    methods: {
        // console.log(this.props.cuisines);
    }
})
</script>
