<template>
<div class="filter_box">
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
            @click="useVegeterian"
            >
                Vegeterian
            </h6>
            <h6 
            @click="useNuts"
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
        width: 80%;
        flex-wrap: wrap;
        width: 100%;
        z-index: 1;
        display: flex;

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

</style>