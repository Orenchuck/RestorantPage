<template>
<div
    :class="show_menu_mob"
    class="filter_box">
    <div class="page_logo">
        <!-- <p> O </p> -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107.941 48.489">
      <g data-name="Group 1409">
        <path data-name="Path 1087" 
        d="M12.02 24.449a12.02 12.02 0 1 0 12.02 12.02 12.02 12.02 0 0 0-12.02-12.02zm0 21.093a9.074 9.074 0 1 1 9.074-9.074 9.074 9.074 0 0 1-9.074 9.074z"
         fill="#1f1917">
         </path>
         <path data-name="Path 1088" 
         d="M40.301 24.449a12.02 12.02 0 1 0 12.02 12.02 12.02 12.02 0 0 0-12.02-12.02zm0 21.093a9.074 9.074 0 1 1 9.074-9.074 9.074 9.074 0 0 1-9.074 9.074z" 
         fill="#1f1917">
         </path>
         <path data-name="Rectangle 1572" 
         fill="#1f1917" d="M81.795 26.514l2.225-2.225 21.931 21.93-2.225 2.226z">
         </path>
         <path data-name="Rectangle 1573" fill="#1f1917" d="M69.643 24.331h5.774v24.157h-5.774z"></path>
         <path data-name="Rectangle 1574" fill="#1f1917" d="M56.916.057h5.774v48.432h-5.774z"></path>
         <path data-name="Rectangle 1575" fill="#1f1917" d="M84.019 48.445l-2.225-2.225 21.93-21.931 2.226 2.225z"></path>
         <path data-name="Line 211" fill="none" d="M71.293 24.275h36.648"></path>
         <path data-name="Line 212" fill="none" d="M59.391 0H23.332"></path>
         <path data-name="Path 1089" d="M34.055 29.824V0h-5.774v36.295h2.946a9 9 0 0 1 2.828-6.471z" fill="#1f1917">
           </path></g>
           </svg>
    </div>
  <div class="filter_wrap">
      <!-- <h3>à la carte menu</h3> -->
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
                :class="mobFilter"
                @click="useVegeterian"
                class="select_filter"
            >
                Vegeterian
            </h6>
            <h6 
                :class="mobFilter"
                @click="useNuts"
                class="select_filter"

            >
                Contain nuts
            </h6>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'FiltersDishes',
    props: {
        useVegeterian: Function,
        useNuts: Function,
        currentMenuName: String,
        show_menu_mob: String,
        mobFilter: String,
        showFilters: Function,
        resetFilters: Function,
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