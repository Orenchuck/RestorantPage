<template>
    <div class="main__description">
        <div class="description__content">
            <p>{{ currentCuisine.description }}</p>
        </div> 
        <a :href="currentCuisine.href" class="description__link">
            More about Oblix {{currentCuisine.name}}
        </a>
    </div> 
</template>

<script>
export default ({
    name: "AboutRestoraunt",
    props: {
        currentCuisine: Object,
    },
    methods: {
    }

})
</script>

<style>

</style>