<template>
<div class="menus_restaurant_head">
    <div class="menus_restaurant_wrap">
    <div 
        :style="currentCuisine['picture']" 
        class="bg_image"
        >
        <div class="head_title">
            <h1 class="title__h">
            Choose menu
            </h1>
        </div> 
    <div class="head_selector">
        <div class="restorant_container">
            <div class="restorant_item">
                <h2
                v-for="(i, index) in cuisines"
                :key="index"
                @click="sendRestorant(index)"
                class="head__selector-title u-heading--h1">
                {{ i.name }}
                </h2>
            </div>
        </div>
    </div>
    </div> 
    </div>
    <!-- <div class="head_title">
        <h1 class="title__h">
        Choose menu
        </h1>
    </div> 
    <div class="head_selector">
        <div class="restorant_container">
            <div class="restorant_item">
                <h2
                v-for="(i, index) in cuisines"
                :key="index"
                @click="sendRestorant(index)"
                class="head__selector-title u-heading--h1">
                {{ i.name }}
                </h2>
            </div>
        </div>
    </div> -->
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
})
</script>

<style lang="scss">
    .menus_restaurant_head {
        height: 500px;
        position: relative;
        top: 90px;
        z-index: 1;

        &:after{
            background-color: #140906;
            content: "";
            opacity: .35;
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
        }
    }

    .menus_restaurant_wrap {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
    }

    .bg_image {
        background-position: 50%;
        background-size: cover;
        opacity: 1;
        height: 100%;
                        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        height: 500px;
        width: 100%;
        justify-content: flex-end;
    }

    .head_title{
        z-index: 1;
        margin-left: 70px;
        margin-right: 70px;
    }

    .title__h {
        font-family: Muli-ExtraBold;
        letter-spacing: .03em;
        margin-bottom: 20px;
        opacity: .5;
        text-transform: uppercase;
        font-size: 1.125rem;
        line-height: 1.33em;
        font-weight: 700;
    }

    .head_selector {
        background-color: rgba(20,9,6,.1);
        z-index: 1;
    }

    .restorant_container {
        display: flex;
        height: 99px;
        margin-left: 70px;
        margin-right: 70px;

        .restorant_item {
            align-items: center;
            cursor: pointer;
            display: flex;
            position: relative;
            -webkit-box-align: center;
            margin-left: 59px;

            &:after {
                bottom: 0;
                content: "";
                height: 4px;
                left: 4px;
                position: absolute;
                right: 4px;
            }
            
            &:first-of-type {
                margin-left: 0;
            }
        }

        h2 {
            font-family: RockwellStd;
            letter-spacing: .03em;
            font-size: 3.125rem;
            line-height: 1.1em;
        }
    }
</style>
