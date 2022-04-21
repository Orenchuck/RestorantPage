<template>
    <div class="panel_menu_cuisine">
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

<style lang="scss">
    .panel_menu_cuisine {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 60px;
        position: relative;
        -webkit-box-pack: center;

        p {
            border: 4px solid #fff;
            cursor: pointer;
            font-family: Muli-ExtraBold;
            margin-bottom: 10px;
            margin-top: 0;
            margin-left: 4px;
            margin-right: 4px;
            opacity: .2;
            padding: 24px 20px;
            text-align: center;
            text-transform: uppercase;

            &:hover {
                opacity: 1;
            }
        }
    }

    @media only screen and (max-width: 864px) {
        .panel_menu_cuisine {
            margin-bottom: 10px;
            padding: 24px 20px;
            flex-direction: column;
        }
    }

    
</style>