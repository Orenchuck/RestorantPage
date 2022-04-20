<template>
    <div class="main_description">
        <div class="description_content">
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

<style lang="scss">
    .main_description {
        padding-bottom: 91px;
        padding-top: 140px;
        margin-left: 70px;
        margin-right: 70px;
        justify-content: space-between;
        // margin-bottom: 70px;
        align-items: center;
        display: flex;
        -webkit-box-pack: justify;

        a {
            font-family: Muli-Bold;
            font-size: 15px;
            padding-bottom: 12px;
            position: relative;
            text-transform: uppercase;
            white-space: nowrap;
            color: inherit;
            cursor: pointer;
            text-decoration: inherit;

            &:after {
                background-color: #fff;
                bottom: 0;
                content: "";
                height: 4px;
                left: 0;
                position: absolute;
                right: 0;
            }
        }
    }

    .description_content {
        margin-right: 21px;
        max-width: 745px;

        p {
            font-size: 21px;
            font-weight: 300;
            letter-spacing: .023em;
            font-family: RockwellStd;
            line-height: 1.5em;
        }
    }
</style>