<template>
<div
    :class="show_menu_mob"
    class="filter_box">
    <div class="page_logo">
        <LogoOblix :color="color='#1f1917'" />
    </div>
  <div class="filter_wrap">
      <h3>{{currentMenuName}}</h3>
      <div class="filter_title">
        <h6 class="filter_title_h">
                    Filter by:
        </h6>
        <div class="filter_names">
            <h6 
                class="mob_select"
                @click="resetFilters"
                >None</h6>
            <i 
                class="icon-down-open"
                @click="showFilters"
            ></i>

            <h6 
                v-for="(filter, index) in Object.keys(filters)"
                :key="index"
                :class="mobFilter"
                @click="useFilter(filter)"
                class="select_filter"
            >
                {{ filter }}
            </h6>
            <!-- <h6 
                :class="mobFilter"
                @click="useNuts"
                class="select_filter"

            >
                Contain nuts
            </h6> -->
        </div>
      </div>
  </div>
</div>
</template>

<script>
import LogoOblix from './LogoOblix.vue'

export default {
    name: 'FiltersDishes',
    components: {
        LogoOblix,
    },
    props: {
        useFilter: Function,
        currentMenuName: String,
        show_menu_mob: String,
        mobFilter: String,
        showFilters: Function,
        resetFilters: Function,
        filters: Object,
    }
}
</script>

<style lang="scss">
    .filter_box {
        background-color: #fff;
        padding: 48px 70px 0px;
    }

    .page_logo {
        display: flex;
        align-items: flex-end;

            p {
                color: #1f1917;
                font-family: fontello;
                font-size: 56px;
                margin: -10px 7.9% -7px;
            }

            svg {
                overflow: hidden;
                box-sizing: inherit;
                height: 60px;
                width: 120px;
                cursor: pointer;
                margin: -10px 7.9% -7px;
            }

            &::before {
                background-color: #d6d6d6;
                content: "";
                -webkit-box-flex: 1;
                flex-grow: 1;
                height: 2px;
                margin-bottom: 16px;
            }

            &::after {
                background-color: #d6d6d6;
                content: "";
                -webkit-box-flex: 1;
                flex-grow: 1;
                height: 2px;
                margin-bottom: 16px;
            }
    }

    .filter_wrap {
        align-items: flex-end;
        border-bottom: 2px solid #d6d6d6;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-top: 52px;
        padding-bottom: 73px;

        h3 {
            margin-bottom: 0;
            margin-right: 30px;
            line-height: 1.26em;
            font-size: 40px;
            font-weight: 400;
            font-family: RockwellStd;
            color: #140906;
        }
    }

    .filter_title {
        justify-content: flex-end;
        width: 54%;
        display: flex;
        -webkit-box-pack: end;
    }

    .filter_title_h {
        font-family: Muli-ExtraBold;
        letter-spacing: .03em;
        margin-bottom: 10px;
        text-transform: uppercase;
        margin-right: 10px;
        white-space: nowrap;
        font-size: 15px;
        color: #140906;
        font-weight: 400;
    }

    .filter_names {
        position: relative;
        // width: 80%;
        flex-wrap: wrap;
        width: 100%;
        z-index: 1;
        display: flex;
        // height: 35px;

        h6 {
            color: #a59e9e;
            cursor: pointer;
            margin-left: 21px;
            -webkit-tap-highlight-color: transparent;
            user-select: none;
            white-space: nowrap;
            font-family: Muli-ExtraBold;
            letter-spacing: .03em;
            margin-bottom: 10px;
            text-transform: uppercase;
            font-size: 15px;
            font-weight: 400;
        }
    }

    .icon-down-open, .mob_select {
        display: none;
    }

   @media only screen and (max-width: 864px) {
    //    .filter_box {
    //        height: 20vh;
    //    }

     .show_menu_mob {
       display: none;
     }

     .page_logo {
         display: none;
     }

     .filter_wrap {
        border: none;
        margin-top: 0;
        padding-bottom: 0;

        h3 {
            display: none;
        }
     }

     .filter_title {
        justify-content: flex-start;
        width: auto;  
        -webkit-box-pack: start;
        -ms-flex-pack: start;
     }

     .filter_names {
        width: auto;
        background-color: #fff;
        // -webkit-box-shadow: 1px 2px 3px 0 rgb(0 0 0 / 10%);
        // box-shadow: 1px 2px 3px 0 rgb(0 0 0 / 10%);
        display: block;
        left: 0;
        // // position: absolute;
        top: 100%;
        margin-top: 11vh;

        .select_filter {
        //             width: auto;
        // background-color: #fff;
        -webkit-box-shadow: 1px 2px 3px 0 rgb(0 0 0 / 10%);
        box-shadow: 1px 2px 3px 0 rgb(0 0 0 / 10%);
        // display: block;
        // left: 0;
        // // position: absolute;
        // top: 100%;
        }

        h6 {
            margin: 0;
            padding: 7px 16px;
            color: #a59e9e;
            cursor: pointer;
            user-select: none;
            white-space: nowrap;
        }
     }

     .icon-down-open {
        color: #d0cecd;
        font-size: 14px;
        margin-left: 6px;
        display: inline;

        &::before {
            content: '\f004';
            // content: '\ea36';
            font-family: "fontello";
            font-style: normal;
            font-weight: normal;
            // speak: none;
            display: inline-block;
            text-decoration: inherit;
            width: 1em;
            margin-right: 0.2em;
            text-align: center;
            /* opacity: .8; */
            font-variant: normal;
            text-transform: none;
            line-height: 1em;
            margin-left: 0.2em;
            /* font-size: 120%; */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
     }

     .mob_select {
         display: inline;
     }

     .mob_filter {
         display: none;
     }
   }

   @media only screen and (max-width: 736px) {
       .filter_box {
            padding: 20px 20px 30px;
       }
   }
</style>